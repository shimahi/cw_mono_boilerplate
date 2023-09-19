import { Link } from '@remix-run/react'
import { Twitter } from 'lucide-react'
import type { FC, PropsWithChildren } from 'react'

import { useRootViewModel } from '@/_root/viewModel'
import { Box, Button, Container, Flex, Img, Spacer, Text } from '@/components/ui'

import { ForceProfileRegisterModal } from './ForceProfileRegisterModal'

/**
 * アプリのほとんどのページで利用する共通レイアウト
 */
export const BasicLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Box as="main">{children}</Box>
      <ForceProfileRegisterModal />
    </>
  )
}

const Header = () => {
  const { currentUser, theme, toggleColorMode, loginWithGoogle, loginWithTwitter, logout } = useRootViewModel()

  return (
    <Box as="header" css={{ backgroundColor: 'primary', color: 'primaryForeground', py: '2', px: '4' }}>
      <Container
        css={{
          d: 'grid',
          alignItems: 'center',
          maxWidth: '1200px',
          px: '3',
          md: {
            px: '12',
          },
        }}
      >
        <Flex ai="center">
          <Box mr={5}>
            <Link to="/">
              <Text>Home</Text>
            </Link>
          </Box>

          {currentUser ? null : (
            <Flex fd="row" gap={4}>
              <Button
                variant="ghost"
                onClick={loginWithTwitter}
                css={{
                  w: 5,
                  br: 'full',
                  px: 0,
                  py: 0,
                }}
              >
                <Twitter size="20px" fill="#1DA1F2" color="#1DA1F2" />
              </Button>
              <Button
                variant="ghost"
                onClick={loginWithGoogle}
                css={{
                  w: 5,
                  px: 0,
                  py: 0,
                  br: 'full',
                }}
              >
                <Box>
                  <Img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    d="block"
                    maw="100%"
                    width="20px"
                  />
                </Box>
              </Button>
            </Flex>
          )}
          <Spacer />
          <Flex gap={2}>
            <Button
              css={{
                px: 0,
                py: 0,
                br: 'full',
              }}
              variant="ghost"
              onClick={toggleColorMode}
            >
              {theme.colorMode === 'dark' ? '🌞' : '🌙'}
            </Button>
            {!!currentUser && (
              <Button onClick={logout} px={{ base: 2, md: 4 }}>
                <Text fz={{ base: 'xs', md: 'sm' }}>ログアウト</Text>
              </Button>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
