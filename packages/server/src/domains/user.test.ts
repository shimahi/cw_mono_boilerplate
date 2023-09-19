import { domainArgsMock, userFixture } from 'src/__tests__'
import { ValiError } from 'valibot'
import { afterEach, beforeAll, describe, expect, test, vi } from 'vitest'

import { UserDomain } from './user'

const userDomainMock = {
  repository: {
    getUser: vi.fn(),
    getUsers: vi.fn(),
    getUsersCount: vi.fn(),
    findOrCreateUser: vi.fn(),
    getUserByProfileId: vi.fn(),
    updateUser: vi.fn(),
  },
  authService: {
    getAuthUser: vi.fn(),
    authenticateWithGoogle: vi.fn(),
    authenticateWithTwitter: vi.fn(),
    getTwitterProfile: vi.fn(),
    logout: vi.fn(),
  },
}

vi.mock('../repositories/user', () => ({
  UserRepository: vi.fn().mockImplementation(() => userDomainMock.repository),
}))

vi.mock('../services/auth', () => ({
  AuthService: vi.fn().mockImplementation(() => userDomainMock.authService),
}))

afterEach(() => {
  vi.clearAllMocks()
})

const subject = new UserDomain(domainArgsMock)

describe('#currentUser', () => {
  const user = userFixture.build()

  describe('ログインしている状態の時', () => {
    beforeAll(() => {
      userDomainMock.authService.getAuthUser.mockResolvedValue({ profileId: user.profileId })
    })
    test('認証情報から返ってきたprofileIdを元に、repository.getUserByProfileIdがコールされること', async () => {
      await subject.currentUser()

      expect(userDomainMock.repository.getUserByProfileId).toBeCalledWith(user.profileId)
    })
  })

  describe('ログインしていない状態の時', () => {
    beforeAll(() => {
      userDomainMock.authService.getAuthUser.mockResolvedValue(null)
    })
    test('repository.getUserByProfileIdはコールされず、nullが返ること', async () => {
      const result = await subject.currentUser()

      expect(userDomainMock.repository.getUserByProfileId).not.toBeCalled()
      expect(result).toBeNull()
    })
  })
})

describe('#getUser', () => {
  test('idを引数としてrepository.getUserがコールされること', async () => {
    await subject.getUser('userId')

    expect(userDomainMock.repository.getUser).toBeCalledWith('userId')
  })
})

describe('#getUsers', () => {
  test('repository.getUsersがコールされること', async () => {
    await subject.getUsers()

    expect(userDomainMock.repository.getUsers).toBeCalled()
  })
})

describe('#updateUser', () => {
  const user = userFixture.build()
  const { accountId, displayName, avatarUri, introduction } = userFixture.build()
  const input = { accountId, displayName, avatarUri, introduction }

  describe('ログインしていない場合', () => {
    beforeAll(() => {
      userDomainMock.authService.getAuthUser.mockResolvedValue(null)
    })
    test('エラーが投げられること', async () => {
      await expect(subject.updateUser(input)).rejects.toThrowError('ログインしていません。')
    })
  })

  describe('バリデーションを満たさない場合', () => {
    beforeAll(() => {
      userDomainMock.authService.getAuthUser.mockResolvedValue({ profileId: user.profileId })
      userDomainMock.repository.getUserByProfileId.mockResolvedValue(user)
    })
    test('エラーが投げられること', async () => {
      // @ts-expect-error
      await expect(subject.updateUser({ accountId: 123, displayName: undefined })).rejects.toThrowError(ValiError)
    })
  })

  describe('ログインしている場合', () => {
    beforeAll(() => {
      userDomainMock.authService.getAuthUser.mockResolvedValue({ profileId: user.profileId })
      userDomainMock.repository.getUserByProfileId.mockResolvedValue(user)
    })
    test('repository.updateUserがコールされること', async () => {
      await subject.updateUser({ accountId, displayName, introduction, avatarUri })

      expect(userDomainMock.repository.updateUser).toBeCalledWith(user.id, {
        accountId,
        displayName,
        avatarUri,
        introduction,
        isProfileRegistered: true,
      })
    })
  })
})

describe('#loginWithGoogle', () => {
  const authenticatorMock = { authenticate: vi.fn() }
  const option = {}
  const profile = {
    provider: 'google',
    id: 'profileId',
    displayName: 'displayName',
    photos: [{ value: 'photo' }],
  }

  describe('正常系', () => {
    beforeAll(() => {
      userDomainMock.authService.authenticateWithGoogle.mockImplementation(async (callback) => {
        await callback({ profile })

        return authenticatorMock
      })
    })
    test('認証時のコールバック引数 { profile } によって、repository.findOrCreateUserがコールされること', async () => {
      await subject.loginWithGoogle(option)
      expect(userDomainMock.repository.findOrCreateUser).toBeCalledWith(profile)
    })
  })

  describe('認証に失敗した場合', () => {
    beforeAll(() => {
      userDomainMock.authService.authenticateWithGoogle.mockImplementation(async (callback) => {
        await callback({ profile: undefined })

        return authenticatorMock
      })
    })

    test('エラーが投げられること', async () => {
      await expect(subject.loginWithGoogle(option)).rejects.toThrowError('認証情報の取得に失敗しました。')
    })
  })
})

describe('#loginWithTwitter', () => {
  const authenticatorMock = { authenticate: vi.fn() }
  const option = {}
  const accessToken = 'accessToken'
  const profile = {
    provider: 'twitter',
    id: 'profileId',
    displayName: 'displayName',
    photos: [{ value: 'photo' }],
  }

  describe('正常系', () => {
    beforeAll(() => {
      userDomainMock.authService.authenticateWithTwitter.mockImplementation(async (callback) => {
        await callback({ accessToken })

        return authenticatorMock
      })
      userDomainMock.authService.getTwitterProfile.mockResolvedValue(profile)
    })

    test('認証時のコールバック引数 { accessToken } によって、authService.getTwitterProfileがコールされること。その戻り値によってrepository.findOrCreateUserがコールされること', async () => {
      await subject.loginWithTwitter(option)
      expect(userDomainMock.authService.getTwitterProfile).toBeCalledWith(accessToken)
      expect(userDomainMock.repository.findOrCreateUser).toBeCalledWith(profile)
    })
  })

  describe('アクセストークンの取得に失敗した場合', () => {
    beforeAll(() => {
      userDomainMock.authService.authenticateWithTwitter.mockImplementation(async (callback) => {
        await callback({ accessToken: undefined })

        return authenticatorMock
      })
    })
    test('エラーが投げられること', async () => {
      await expect(subject.loginWithTwitter(option)).rejects.toThrowError('アカウント認証に失敗しました。')
    })
  })

  describe('アカウント情報の取得に失敗した場合', () => {
    beforeAll(() => {
      userDomainMock.authService.authenticateWithTwitter.mockImplementation(async (callback) => {
        await callback({ accessToken })

        return authenticatorMock
      })
      userDomainMock.authService.getTwitterProfile.mockResolvedValue(undefined)
    })
    test('エラーが投げられること', async () => {
      await expect(subject.loginWithTwitter(option)).rejects.toThrowError('アカウント情報の取得に失敗しました。')
    })
  })
})

describe('#logout', () => {
  test('authService.logoutがコールされること', async () => {
    await subject.logout({ redirectTo: '/' })

    expect(userDomainMock.authService.logout).toBeCalledWith({ redirectTo: '/' })
  })
})
