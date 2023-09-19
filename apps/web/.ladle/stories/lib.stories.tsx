/**
 * @description
 * Radix UIのコンポーネントにスタイルを適用したもの
 * https://www.radix-ui.com
 */
import React, { Fragment, useEffect, useState } from 'react'
import '../../src/index.css'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  BellRing,
  Bold,
  CalendarDays,
  Check,
  ChevronsUpDown,
  Cloud,
  CreditCard,
  Github,
  Italic,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  Settings2,
  Strikethrough,
  User,
  UserPlus,
  Users,
} from 'lucide-react'
import {
  Button,
  Img,
  Input,
  Label,
  Li,
  Text,
  Textarea,
  Box,
  Flex,
  Grid,
  Accordion,
  AlertDialog,
  AspectRatio,
  Avatar,
  Badge,
  Card,
  Checkbox,
  Collapsible,
  ContextMenu,
  Dialog,
  DropdownMenu,
  HoverCard,
  Menubar,
  NavigationMenu,
  Popover,
  Progress,
  RadioGroup,
  ScrollArea,
  Select,
  Separator,
  Skeleton,
  Slider,
  Switch,
  Tabs,
  Toaster,
  Toggle,
  ToggleGroup,
  Toolbar,
  Tooltip,
  useToast,
} from '../../src/components/ui'
import { styled } from '../../styled-system/jsx'

document?.querySelector('html')?.setAttribute('data-theme', 'default')
document?.querySelector('html')?.setAttribute('data-color-mode', 'light')

export const LibAccordion = () => (
  <>
    <Text as="h1">Accordion</Text>
    <Text mt="2" fz="sm">
      タップで開閉できる折りたたみ式のUI
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/accordion"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/accordion
    </Text>
    <Separator mt={4} mb={8} />
    <Accordion.Root type="single" collapsible css={{ w: 'full', maw: 300 }}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger css={{ br: 'xs' }}>Is it accssible?</Accordion.Trigger>
        <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger css={{ br: 'xs' }}>Is it styled?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It comes with default styles that matches the other components' aesthetic.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger css={{ br: 'xs' }}>Is it animated?</Accordion.Trigger>
        <Accordion.Content>Yes. It's animated by default, but you can disable it if you prefer.</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  </>
)
LibAccordion.storyName = 'Accordion'

export const LibAlertDialog = () => (
  <>
    <Text as="h1">AlertDialog</Text>
    <Text mt="2" fz="sm">
      モーダルUIのうち、外部をクリックしても閉じず。アクションまたはキャンセルを強制的に行わせる場合に使用する。
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/alert-dialog"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/alert-dialog
    </Text>
    <Separator mt={4} mb={8} />
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
          <AlertDialog.Description>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action>Continue</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  </>
)
LibAlertDialog.storyName = 'AlertDialog'

export const LibAspectRatio = () => (
  <>
    <Text as="h1">AspectRatio</Text>
    <Text mt="2" fz="sm">
      子要素のアスペクト比率を ratio props で指定する
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/aspect-ratio"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/aspect-ratio
    </Text>
    <Separator mt={4} mb={8} />
    <Box
      css={{
        width: '80',
        radius: 'md',
        overflow: 'hidden',
      }}
    >
      <AspectRatio ratio={16 / 9}>
        <Img
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Landscape photo by Tobias Tullius"
          css={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      </AspectRatio>
    </Box>
  </>
)
LibAspectRatio.storyName = 'AspectRatio'

export const LibAvatar = () => (
  <>
    <Text as="h1">Avatar</Text>
    <Text mt="2" fz="sm">
      小さいサイズのアバター画像を表示するコンポーネント
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/avatar"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/avatar
    </Text>
    <Separator mt={4} mb={8} />
    <Flex gap={5}>
      <Avatar.Root>
        <Avatar.Image
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
        <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Image
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          alt="Pedro Duarte"
        />
        <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback>PD</Avatar.Fallback>
      </Avatar.Root>
    </Flex>
  </>
)
LibAvatar.storyName = 'Avatar'

export const LibBadge = () => (
  <>
    <Text as="h1">Badge</Text>
    <Text mt="2" fz="sm">
      タグなど表示するUI
    </Text>
    <Text as="a" href="https://ui.shadcn.com/docs/components/badge" target="_blank" rel="noreferrer noopener">
      https://ui.shadcn.com/docs/components/badge
    </Text>
    <Separator mt={4} mb={8} />
    <Flex gap={4}>
      <Badge>いぬ〜</Badge>
      <Badge variant="secondary">いぬ〜</Badge>
      <Badge variant="outline">いぬ〜</Badge>
      <Badge variant="destructive">いぬ〜</Badge>
    </Flex>
  </>
)
LibBadge.storyName = 'Badge'

export const LibCard = () => {
  const notifications = [
    {
      title: 'Your call has been confirmed.',
      description: '1 hour ago',
    },
    {
      title: 'You have a new message!',
      description: '1 hour ago',
    },
    {
      title: 'Your subscription is expiring soon!',
      description: '2 hours ago',
    },
  ]
  return (
    <>
      <Text as="h1">Card</Text>
      <Text mt="2" fz="sm">
        ヘッダー(タイトル・説明)・コンテンツ・フッターを持つカード型UI
      </Text>
      <Text as="a" href="https://ui.shadcn.com/docs/components/card" target="_blank" rel="noreferrer noopener">
        https://ui.shadcn.com/docs/components/card
      </Text>
      <Separator mt={4} mb={8} />
      <Card.Root css={{ w: '380px' }}>
        <Card.Header>
          <Card.Title>Notifications</Card.Title>
          <Card.Description>You have 3 unread messages.</Card.Description>
        </Card.Header>
        <Card.Content css={{ d: 'grid', gap: '4' }}>
          <Box
            css={{
              d: 'flex',
              ai: 'center',
              gap: 4,
              br: 'md',
              border: 'solid 1px',
              borderColor: 'accent',
              p: '4',
            }}
          >
            <BellRing />
            <Box css={{ flex: 1, gap: '1' }}>
              <Text css={{ lh: 1, fz: 'sm', fw: 'medium' }}>Push Notifications</Text>
              <Text css={{ fz: 'sm' }} c="disabledForeground">
                Send notifications to device.
              </Text>
            </Box>
            <Switch />
          </Box>
          <div>
            {notifications.map((notification, index) => (
              <Box
                key={index}
                css={{
                  mb: '4',
                  d: 'grid',
                  gridTemplateColumns: '25px 1fr',
                  ai: 'start',
                  '&:last-child': { mb: 0, pb: 0 },
                }}
              >
                <Box
                  as="span"
                  css={{
                    d: 'flex',
                    h: '2',
                    w: '2',
                    br: 'full',
                    transform: 'translateY(4px)',
                    bgc: '#0ea5e9',
                  }}
                />
                <Box css={{ gap: '1' }}>
                  <Text css={{ lh: 1, fz: 'sm', fw: 'medium' }}>{notification.title}</Text>
                  <Text css={{ fz: 'sm' }} c="disabledForeground">
                    {notification.description}
                  </Text>
                </Box>
              </Box>
            ))}
          </div>
        </Card.Content>
        <Card.Footer>
          <Button css={{ w: 'full' }}>
            <Check size="16px" />{' '}
            <Text ml="2" css={{ fw: 'light' }}>
              Mark all as read
            </Text>
          </Button>
        </Card.Footer>
      </Card.Root>
    </>
  )
}
LibCard.storyName = 'Card'

export const LibCheckbox = () => (
  <>
    <Text as="h1">Checkbox</Text>
    <Text mt="2" fz="sm">
      チェックボックス型の入力UI
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/checkbox"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/checkbox
    </Text>
    <Separator mt={4} mb={8} />
    <Box css={{ d: 'flex', alignItems: 'center', gap: '2' }}>
      <Checkbox id="terms" />
      <Label htmlFor="terms" css={{ fz: 'sm', fw: 'medium', lh: 'none' }}>
        Accept terms and conditions
      </Label>
    </Box>
  </>
)
LibCheckbox.storyName = 'Checkbox'

export const LibCollapsible = () => {
  const [open, setOpen] = useState(false)
  const Repository = styled(Box, {
    base: {
      backgroundColor: 'white',
      br: 'md',
      px: '4',
      py: '3',
      b: 'solid 1px',
      ff: 'mono',
    },
  })
  return (
    <>
      <Text as="h1">Collapsible</Text>
      <Text mt="2" fz="sm">
        パネルの展開・縮小を行える表示コンポーネント
      </Text>
      <Text
        as="a"
        href="https://www.radix-ui.com/docs/primitives/components/collapsible"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://www.radix-ui.com/docs/primitives/components/collapsible
      </Text>
      <Separator mt={4} mb={8} />
      <Collapsible.Root
        open={open}
        onOpenChange={setOpen}
        css={{ w: '350px', d: 'flex', flexDirection: 'column', gap: '3' }}
      >
        <Flex ai="center" jutify="space-between">
          <Text mt="2" fz="sm">
            @peduarte starred 3 repositories
          </Text>
          <Collapsible.Trigger asChild>
            <Button
              variant="ghost"
              size="sm"
              ml="2"
              css={{ w: '10', h: '10', p: 0, br: 'full', b: 'solid 1px', bc: 'accent' }}
            >
              <ChevronsUpDown size="16px" />
            </Button>
          </Collapsible.Trigger>
        </Flex>
        <Repository>
          <Text mt="2" fz="sm">
            @radix-ui/primitives
          </Text>
        </Repository>
        <Collapsible.Content css={{ d: 'flex', flexDirection: 'column', gap: '3' }}>
          <Repository>
            <Text mt="2" fz="sm">
              @radix-ui/colors
            </Text>
          </Repository>
          <Repository>
            <Text mt="2" fz="sm">
              @stitches/react
            </Text>
          </Repository>
        </Collapsible.Content>
      </Collapsible.Root>
    </>
  )
}
LibCollapsible.storyName = 'Collapsible'

export const LibContextMenu = () => (
  <>
    <Text as="h1">ContextMenu</Text>
    <Text mt="2" fz="sm">
      右クリック時に表示されるメニュー
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/context-menu"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/context-menu
    </Text>
    <Separator mt={4} mb={8} />
    <ContextMenu.Root>
      <ContextMenu.Trigger
        css={{
          d: 'flex',
          h: '150px',
          w: '300px',
          alignItems: 'center',
          justifyContent: 'center',
          br: 'md',
          border: 'solid 1px #888',
          fz: 'sm',
          bs: 'dashed',
        }}
      >
        Right click here
      </ContextMenu.Trigger>
      <ContextMenu.Content css={{ w: '64' }}>
        <ContextMenu.Item inset>
          Back
          <ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Item inset disabled>
          Forward
          <ContextMenu.Shortcut>⌘]</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Item inset>
          Reload
          <ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Sub>
          <ContextMenu.SubTrigger inset>More Tools</ContextMenu.SubTrigger>
          <ContextMenu.SubContent css={{ w: '48' }}>
            <ContextMenu.Item>
              Save Page As...
              <ContextMenu.Shortcut>⇧⌘S</ContextMenu.Shortcut>
            </ContextMenu.Item>
            <ContextMenu.Item>Create Shortcut...</ContextMenu.Item>
            <ContextMenu.Item>Name Window...</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Developer Tools</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>
        <ContextMenu.Separator />
        <ContextMenu.CheckboxItem checked>
          Show Bookmarks Bar
          <ContextMenu.Shortcut>⌘⇧B</ContextMenu.Shortcut>
        </ContextMenu.CheckboxItem>
        <ContextMenu.CheckboxItem>Show Full URLs</ContextMenu.CheckboxItem>
        <ContextMenu.Separator />
        <ContextMenu.RadioGroup value="pedro">
          <ContextMenu.Label inset>People</ContextMenu.Label>
          <ContextMenu.Separator />
          <ContextMenu.RadioItem value="pedro">Pedro Duarte</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="colm">Colm Tuite</ContextMenu.RadioItem>
        </ContextMenu.RadioGroup>
      </ContextMenu.Content>
    </ContextMenu.Root>
  </>
)
LibContextMenu.storyName = 'ContextMenu'

export const LibDialog = () => (
  <>
    <Text as="h1">Dialog</Text>
    <Text mt="2" fz="sm">
      モーダルともいう
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/dialog"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/dialog
    </Text>
    <Separator mt={4} mb={8} />
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </Dialog.Trigger>
      <Dialog.Content css={{ maw: '425px' }}>
        <Dialog.Header>
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>Make changes to your profile here. Click save when you're done.</Dialog.Description>
        </Dialog.Header>
        <Box css={{ d: 'grid', gap: '4', py: '4' }}>
          <Grid cols="4" gap="4" ai="center">
            <Label htmlFor="name" css={{ ta: 'right' }}>
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" css={{ gridColumn: 'span 3 / span 3' }} />
          </Grid>
          <Grid cols="4" gap="4" ai="center">
            <Label htmlFor="username" css={{ ta: 'right' }}>
              Username
            </Label>
            <Input id="username" value="@peduarte" css={{ gridColumn: 'span 3 / span 3' }} />
          </Grid>
        </Box>
        <Dialog.Footer>
          <Button type="submit">Save changes</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  </>
)
LibDialog.storyName = 'Dialog'

export const LibDropdownMenu = () => {
  return (
    <>
      <Text as="h1">DropdownMenu</Text>
      <Text mt="2" fz="sm">
        トリガーを起動することで表示されるメニュー
      </Text>
      <Text
        as="a"
        href="https://www.radix-ui.com/docs/primitives/components/dropdown-menu"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://www.radix-ui.com/docs/primitives/components/dropdown-menu
      </Text>
      <Separator mt={4} mb={8} />
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content css={{ w: '56' }}>
          <DropdownMenu.Label>My Account</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Item>
              <Box css={{ mr: '2' }}>
                <User size="16px" />
              </Box>
              <span>Profile</span>
              <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Box css={{ mr: '2' }}>
                <CreditCard size="16px" />
              </Box>
              <span>Billing</span>
              <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Box css={{ mr: '2' }}>
                <Settings size="16px" />
              </Box>
              <span>Settings</span>
              <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Box css={{ mr: '2' }}>
                <Keyboard size="16px" />
              </Box>
              <span>Keyboard shortcuts</span>
              <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Item>
              <Box css={{ mr: '2' }}>
                <Users size="16px" />
              </Box>
              <span>Team</span>
            </DropdownMenu.Item>
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger>
                <Box css={{ mr: '2' }}>
                  <UserPlus size="16px" />
                </Box>
                <span>Invite users</span>
              </DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item>
                  <Box css={{ mr: '2' }}>
                    <Mail size="16px" />
                  </Box>
                  <span>Email</span>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <Box css={{ mr: '2' }}>
                    <MessageSquare size="16px" />
                  </Box>
                  <span>Message</span>
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                  <Box css={{ mr: '2' }}>
                    <PlusCircle size="16px" />
                  </Box>
                  <span>More...</span>
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>
            <DropdownMenu.Item>
              <Box css={{ mr: '2' }}>
                <Plus size="16px" />
              </Box>
              <span>New Team</span>
              <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <Box css={{ mr: '2' }}>
              <Github size="16px" />
            </Box>
            <span>GitHub</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Box css={{ mr: '2' }}>
              <LifeBuoy size="16px" />
            </Box>
            <span>Support</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item disabled>
            <Box css={{ mr: '2' }}>
              <Cloud size="16px" />
            </Box>
            <span>API</span>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <Box css={{ mr: '2' }}>
              <LogOut size="16px" />
            </Box>
            <span>Log out</span>
            <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  )
}
LibDropdownMenu.storyName = 'DropdownMenu'

export const LibHoverCard = () => (
  <>
    <Text as="h1">HoverCard</Text>
    <Text mt="2" fz="sm">
      トリガーの上でマウスをホバーすると表示される情報カード
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/hover-card"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/hover-card
    </Text>
    <Separator mt={4} mb={8} />
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <Box
          css={{
            b: 'solid',
            px: '4',
            py: '3',
            br: 'md',
            w: '24',
            ta: 'center',
            cursor: 'default',
          }}
        >
          hover
        </Box>
      </HoverCard.Trigger>
      <HoverCard.Content css={{ w: '80', px: '4', py: '3' }}>
        <Flex css={{ justifyContent: 'space-between', gap: '4' }}>
          <Avatar.Root>
            <Avatar.Image src="https://github.com/vercel.png" />
            <Avatar.Fallback>VC</Avatar.Fallback>
          </Avatar.Root>
          <Box>
            <Text mb="1" css={{ fz: 'xs' }}>
              @nextjs
            </Text>
            <Text mb="1" css={{ fz: 'xs' }}>
              The React Framework – created and maintained by @vercel.
            </Text>
            <Flex css={{ alignItems: 'center', pt: '2' }}>
              <CalendarDays size="16px" />
              <Text ml="2" c="disabledForeground" css={{ fz: 'xs' }}>
                Joined December 2021
              </Text>
            </Flex>
          </Box>
        </Flex>
      </HoverCard.Content>
    </HoverCard.Root>
  </>
)
LibHoverCard.storyName = 'HoverCard'

export const LibLabel = () => (
  <>
    <Text as="h1">Label</Text>
    <Text mt="2" fz="sm">
      入力フォームのラベル
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/label"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/label
    </Text>
    <Separator mt={4} mb={8} />
    <Flex ai="center" css={{ p: '0 20px' }}>
      <Label htmlFor="firstName" css={{ mr: 15 }}>
        First name
      </Label>
      <Input
        type="text"
        id="firstName"
        defaultValue="Pedro Duarte"
        css={{
          md: {
            maw: '80',
          },
        }}
      />
    </Flex>
  </>
)
LibLabel.storyName = 'Label'

export const LibInput = () => (
  <>
    <Text as="h1">Input</Text>
    <Text mt="2" fz="sm">
      テキスト入力フォーム
    </Text>
    <Text as="a" href="https://ui.shadcn.com/docs/components/input" target="_blank" rel="noreferrer noopener">
      https://ui.shadcn.com/docs/components/input
    </Text>
    <Separator mt={4} mb={8} />
    <Input type="email" placeholder="Email" w="96" />
  </>
)
LibInput.storyName = 'Input'

export const LibMenubar = () => (
  <>
    <Text as="h1">Menubar</Text>
    <Text mt="2" fz="sm">
      ヘッダー状のUIで、要素をクリックするとメニューが表示されるもの
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/menubar"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/menubar
    </Text>
    <Separator mt={4} mb={8} />
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>
            New Tab <Menubar.Shortcut>⌘T</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Item>
            New Window <Menubar.Shortcut>⌘N</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Item disabled>New Incognito Window</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Sub>
            <Menubar.SubTrigger>Share</Menubar.SubTrigger>
            <Menubar.SubContent>
              <Menubar.Item>Email link</Menubar.Item>
              <Menubar.Item>Messages</Menubar.Item>
              <Menubar.Item>Notes</Menubar.Item>
            </Menubar.SubContent>
          </Menubar.Sub>
          <Menubar.Separator />
          <Menubar.Item>
            Print... <Menubar.Shortcut>⌘P</Menubar.Shortcut>
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>
            Undo <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Item>
            Redo <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Separator />
          <Menubar.Sub>
            <Menubar.SubTrigger>Find</Menubar.SubTrigger>
            <Menubar.SubContent>
              <Menubar.Item>Search the web</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item>Find...</Menubar.Item>
              <Menubar.Item>Find Next</Menubar.Item>
              <Menubar.Item>Find Previous</Menubar.Item>
            </Menubar.SubContent>
          </Menubar.Sub>
          <Menubar.Separator />
          <Menubar.Item>Cut</Menubar.Item>
          <Menubar.Item>Copy</Menubar.Item>
          <Menubar.Item>Paste</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>View</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.CheckboxItem>Always Show Bookmarks Bar</Menubar.CheckboxItem>
          <Menubar.CheckboxItem checked>Always Show Full URLs</Menubar.CheckboxItem>
          <Menubar.Separator />
          <Menubar.Item inset>
            Reload <Menubar.Shortcut>⌘R</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Item disabled inset>
            Force Reload <Menubar.Shortcut>⇧⌘R</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item inset>Toggle Fullscreen</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item inset>Hide Sidebar</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Profiles</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.RadioGroup value="benoit">
            <Menubar.RadioItem value="andy">Andy</Menubar.RadioItem>
            <Menubar.RadioItem value="benoit">Benoit</Menubar.RadioItem>
            <Menubar.RadioItem value="Luis">Luis</Menubar.RadioItem>
          </Menubar.RadioGroup>
          <Menubar.Separator />
          <Menubar.Item inset>Edit...</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item inset>Add Profile...</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar.Root>
  </>
)
LibMenubar.storyName = 'Menubar'

export const LibNavigationMenu = () => {
  const ContentList = styled('ul', {
    base: {
      display: 'grid',
      padding: 22,
      margin: 0,
      columnGap: 10,
      listStyle: 'none',
    },
    variants: {
      layout: {
        one: {
          '@media only screen and (min-width: 600px)': {
            width: 500,
            gridTemplateColumns: '.75fr 1fr',
          },
        },
        two: {
          '@media only screen and (min-width: 600px)': {
            width: 600,
            gridAutoFlow: 'column',
            gridTemplateRows: 'repeat(3, 1fr)',
          },
        },
      },
    },
  })
  const LinkTitle = styled('div', {
    base: {
      fontWeight: '600',
      lineHeight: 1.2,
      marginBottom: 5,
      color: 'primary',
    },
  })
  const LinkText = styled('p', {
    base: {
      lineHeight: 1.4,
      fontWeight: 'initial',
    },
  })
  const ContentListItem = ({ children, title, ...props }) => (
    <Li>
      <NavigationMenu.Link
        {...props}
        css={{
          padding: 4,
          borderRadius: 6,
          _hover: { backgroundColor: 'accent', c: 'accentForeground' },
        }}
      >
        <LinkTitle>{title}</LinkTitle>
        <LinkText>{children}</LinkText>
      </NavigationMenu.Link>
    </Li>
  )

  return (
    <>
      <Text as="h1">NavigationMenu</Text>
      <Text mt="2" fz="sm">
        ナビゲーションメニュー。サイトのリンクを展開するのに適する
      </Text>
      <Text
        as="a"
        href="https://www.radix-ui.com/docs/primitives/components/navigation-menu"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://www.radix-ui.com/docs/primitives/components/navigation-menu
      </Text>
      <Separator mt={4} mb={8} />
      <NavigationMenu.Root>
        <NavigationMenu.List
          css={{
            gap: '4px',
          }}
          indicatorCss={{
            display: 'none',
            opacity: 0,
          }}
        >
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              <span>Learn</span>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ContentList layout="one">
                <Li css={{ gridRow: '3' }}>
                  <NavigationMenu.Link
                    href="#"
                    css={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      flexDirection: 'column',
                      width: '100%',
                      height: '100%',
                      borderRadius: '3xl',
                      padding: '6',
                      bgc: 'primary',
                      c: 'white',
                      _hover: { bgc: 'primaryAlpha', c: 'white' },
                      _focus: { bgc: 'primaryAlpha', c: 'white' },
                    }}
                  >
                    <svg aria-hidden width="38" height="38" viewBox="0 0 25 25">
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <LinkTitle
                      css={{
                        fontSize: 18,
                        color: 'white',
                        mt: '8',
                        mb: '2',
                      }}
                    >
                      Radix Primitives
                    </LinkTitle>
                    <LinkText
                      css={{
                        fz: 12,
                        lh: 1.3,
                      }}
                    >
                      Unstyled, accessible components for React.
                    </LinkText>
                  </NavigationMenu.Link>
                </Li>
                <ContentListItem href="https://stitches.dev/" title="Stitches">
                  CSS-in-JS with best-in-class developer experience.
                </ContentListItem>
                <ContentListItem href="https://www.radix-ui.com/colors" title="Colors">
                  Beautiful, thought-out palettes with auto dark mode.
                </ContentListItem>
                <ContentListItem href="https://icons.radix-ui.com/" title="Icons">
                  A crisp set of 15x15 icons, balanced and consistent.
                </ContentListItem>
              </ContentList>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              <span>Overview</span>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ContentList layout="two">
                <ContentListItem title="Introduction" href="/docs/primitives/overview/introduction">
                  Build high-quality, accessible design systems and web apps.
                </ContentListItem>
                <ContentListItem title="Getting started" href="/docs/primitives/overview/getting-started">
                  A quick tutorial to get you up and running with Radix Primitives.
                </ContentListItem>
                <ContentListItem title="Styling" href="/docs/primitives/overview/styling">
                  Unstyled and compatible with any styling solution.
                </ContentListItem>
                <ContentListItem title="Animation" href="/docs/primitives/overview/animation">
                  Use CSS keyframes or any animation library of your choice.
                </ContentListItem>
                <ContentListItem title="Accessibility" href="/docs/primitives/overview/accessibility">
                  Tested in a range of browsers and assistive technologies.
                </ContentListItem>
                <ContentListItem title="Releases" href="/docs/primitives/overview/releases">
                  Radix Primitives releases and their changelogs.
                </ContentListItem>
              </ContentList>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="https://github.com/radix-ui" target="_blank" rel="noopener noreferrer">
              Github
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </>
  )
}
LibNavigationMenu.storyName = 'NavigationMenu'

export const LibPopover = () => (
  <>
    <Text as="h1">Popover</Text>
    <Text mt="2" fz="sm">
      トリガーをクリックすると浮かんでくる要素
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/popover"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/popover
    </Text>
    <Separator mt={4} mb={8} />
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline" css={{ w: '10', h: '10', br: 'full', p: 0 }}>
          <Settings2 size="16px" />
        </Button>
      </Popover.Trigger>
      <Popover.Content css={{ w: '88', p: '6' }}>
        <Grid gap="4">
          <Box css={{ gap: '2' }}>
            <Text css={{ fw: 'medium', lh: 1 }}>Dimensions</Text>
            <Text css={{ fz: 'sm', c: 'mutedForeground' }}>Set the dimensions for the layer.</Text>
          </Box>
          <Grid gap="4">
            <Grid cols="3" gap="4" css={{ ai: 'center' }}>
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" css={{ gridColumn: 'span 2 / span 2', h: '8' }} />
            </Grid>
            <Grid cols="3" gap="4" css={{ ai: 'center' }}>
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input id="maxWidth" defaultValue="300px" css={{ gridColumn: 'span 2 / span 2', h: '8' }} />
            </Grid>
            <Grid cols="3" gap="4" css={{ ai: 'center' }}>
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" css={{ gridColumn: 'span 2 / span 2', h: '8' }} />
            </Grid>
            <Grid cols="3" gap="4" css={{ ai: 'center' }}>
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input id="maxHeight" defaultValue="none" css={{ gridColumn: 'span 2 / span 2', h: '8' }} />
            </Grid>
          </Grid>
        </Grid>
      </Popover.Content>
    </Popover.Root>
  </>
)
LibPopover.storyName = 'Popover'

export const LibProgress = () => {
  const [progress, setProgress] = useState(13)

  return (
    <>
      <Text as="h1">Progress</Text>
      <Text mt="2" fz="sm">
        割合を表示するインジケータ
      </Text>
      <Text
        as="a"
        href="https://www.radix-ui.com/docs/primitives/components/progress"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://www.radix-ui.com/docs/primitives/components/progress
      </Text>
      <Separator mt={4} mb={8} />
      <Progress value={progress} css={{ maw: '80' }} />
      <Button mt={8} onClick={() => setProgress(66)}>
        Click
      </Button>
    </>
  )
}
LibProgress.storyName = 'Progress'

export const LibRadioGroup = () => (
  <>
    <Text as="h1">RadioGroup</Text>
    <Text mt="2" fz="sm">
      radio形式の入力要素のグループ
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/radio-group"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/radio-group
    </Text>
    <Separator mt={4} mb={8} />
    <RadioGroup.Root defaultValue="comfortable">
      <Box css={{ d: 'flex', ai: 'center', gap: '2' }}>
        <RadioGroup.Item value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </Box>
      <Box css={{ d: 'flex', ai: 'center', gap: '2' }}>
        <RadioGroup.Item value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </Box>
      <Box css={{ d: 'flex', ai: 'center', gap: '2' }}>
        <RadioGroup.Item value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </Box>
    </RadioGroup.Root>
  </>
)
LibRadioGroup.storyName = 'RadioGroup'

export const LibScrollArea = () => {
  const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)
  return (
    <>
      <Text as="h1">ScrollArea</Text>
      <Text mt="2" fz="sm">
        エリア内でスクロールを行い表示するコンテンツ
      </Text>
      <Text
        as="a"
        href="https://www.radix-ui.com/docs/primitives/components/scroll-area"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://www.radix-ui.com/docs/primitives/components/scroll-area
      </Text>
      <Separator mt={4} mb={8} />
      <ScrollArea css={{ h: '72', w: '48', br: 'md', border: 'solid 1px', borderColor: 'accent' }}>
        <Box css={{ p: '4' }}>
          <Text css={{ mb: '4', fz: 'sm', fw: 'medium', lh: 1 }}>Tags</Text>
          {tags.map((tag, i) => (
            <Fragment key={i}>
              <Text key={tag} css={{ fz: 'sm' }}>
                {tag}
              </Text>
              <Separator css={{ my: '2' }} />
            </Fragment>
          ))}
        </Box>
      </ScrollArea>
    </>
  )
}
LibScrollArea.storyName = 'ScrollArea'

export const LibSelect = () => (
  <>
    <Text as="h1">Select</Text>
    <Text mt="2" fz="sm">
      Select形式の入力要素
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/select"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/select
    </Text>
    <Separator mt={4} mb={8} />
    <Select.Root>
      <Select.Trigger css={{ w: '180px' }}>
        <Select.Value placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Label>Fruits</Select.Label>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
          <Select.Item value="blueberry">Blueberry</Select.Item>
          <Select.Separator />
          <Select.Item value="grapes">Grapes</Select.Item>
          <Select.Item value="pineapple">Pineapple</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  </>
)
LibSelect.storyName = 'Select'

export const LibSeparator = () => (
  <>
    <Text as="h1">Separator</Text>
    <Text mt="2" fz="sm">
      コンテンツの視覚的分離線
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/separator"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/separator
    </Text>
    <Separator mt={4} mb={8} />
    <Box css={{ maw: 'fit-content' }}>
      <Box css={{ gap: '1' }}>
        <Text css={{ fz: 'sm', fw: 'medium', lh: 1 }}>Radix Primitives</Text>
        <Text css={{ fz: 'sm', c: 'mutedForeground' }}>An open-source UI component library.</Text>
      </Box>
      <Separator css={{ my: '3' }} />
      <Box css={{ d: 'flex', h: '5', ai: 'center', gap: '4', fz: 'sm' }}>
        <Box>Blog</Box>
        <Separator orientation="vertical" />
        <Box>Docs</Box>
        <Separator orientation="vertical" />
        <Box>Source</Box>
      </Box>
    </Box>
  </>
)
LibSeparator.storyName = 'Separator'

export const LibSkeleton = () => (
  <>
    <Text as="h1">Skeleton</Text>
    <Text mt="2" fz="sm">
      ローディング中に表示するスケルトン要素
    </Text>
    <Text as="a" href="https://ui.shadcn.com/docs/components/skeleton" target="_blank" rel="noreferrer noopener">
      https://ui.shadcn.com/docs/components/skeleton
    </Text>
    <Separator mt={4} mb={8} />
    <Flex ai="center" gap="4">
      <Skeleton h="12" w="12" br="full" />
      <Box gap="2">
        <Skeleton css={{ h: '4', w: '250px' }} />
        <Skeleton css={{ h: '4', w: '250px' }} />
      </Box>
    </Flex>
  </>
)
LibSkeleton.storyName = 'Skeleton'

export const LibSlider = () => (
  <>
    <Text as="h1">Sldier</Text>
    <Text mt="2" fz="sm">
      スライダー・シークバー
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/slider"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/slider
    </Text>
    <Separator mt={4} mb={8} />
    <Slider defaultValue={[50]} max={100} step={1} css={{ maw: '400px' }} />
  </>
)
LibSlider.storyName = 'Slider'

export const LibSwitch = () => (
  <>
    <Text as="h1">Switch</Text>
    <Text mt="2" fz="sm">
      トグル要素を扱うスイッチボタン
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/switch"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/switch
    </Text>
    <Separator mt={4} mb={8} />
    <Box css={{ d: 'flex', ai: 'center', gap: '2' }}>
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </Box>
  </>
)
LibSwitch.storyName = 'Switch'

export const LibTabs = () => (
  <>
    <Text as="h1">Tabs</Text>
    <Text mt="2" fz="sm">
      複数タブで表示する要素
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/tabs"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/tabs
    </Text>
    <Separator mt={4} mb={8} />
    <Tabs.Root defaultValue="account" css={{ w: '400px' }}>
      <Tabs.List css={{ d: 'grid', w: 'full', cols: 2 }}>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <Card.Root>
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>Make changes to your account here. Click save when you're done.</Card.Description>
          </Card.Header>
          <Card.Content css={{ gap: '2' }}>
            <Box css={{ gap: '1' }}>
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </Box>
            <Box css={{ gap: '1' }}>
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </Box>
          </Card.Content>
          <Card.Footer>
            <Button>Save changes</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
      <Tabs.Content value="password">
        <Card.Root>
          <Card.Header>
            <Card.Title>Password</Card.Title>
            <Card.Description>Change your password here. After saving, you'll be logged out.</Card.Description>
          </Card.Header>
          <Card.Content css={{ gap: '2' }}>
            <Box css={{ gap: '1' }}>
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </Box>
            <Box css={{ gap: '1' }}>
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </Box>
          </Card.Content>
          <Card.Footer>
            <Button>Save password</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
    </Tabs.Root>
  </>
)
LibTabs.storyName = 'Tabs'

export const LibTextarea = () => {
  return (
    <>
      <Text as="h1">Progress</Text>
      <Text mt="2" fz="sm">
        テキストエリア要素
      </Text>
      <Separator mt={4} mb={8} />
      <Textarea placeholder="Type your message here." />
    </>
  )
}
LibTextarea.storyName = 'Textarea'

export const LibToast = () => {
  const { toast } = useToast()
  const [count, setCount] = useState(1)
  return (
    <>
      <Text as="h1">Toast</Text>
      <Text mt="2" fz="sm">
        通知やメッセージを示すトースト
      </Text>
      <Text
        as="a"
        href="https://www.radix-ui.com/docs/primitives/components/toast"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://www.radix-ui.com/docs/primitives/components/toast
      </Text>
      <Separator mt={4} mb={8} />
      <Box css={{ w: '100%', h: '100dvh' }}>
        <Button
          css={{ mt: '400px', sm: { mt: 0 } }}
          variant="outline"
          onClick={() => {
            toast({
              variant: count % 5 === 0 ? 'destructive' : 'default',
              title: 'Scheduled: Catch up ' + count,
              description: 'Friday, February 10, 2023 at 5:57 PM',
              action: 'Undo',
            })
            setCount((state) => state + 1)
          }}
        >
          Add to calendar
        </Button>
        <Toaster />
      </Box>
    </>
  )
}
LibToast.storyName = 'Toast'

export const LibToggle = () => (
  <>
    <Text as="h1">Toggle</Text>
    <Text mt="2" fz="sm">
      ONのときに背景色のつくインタラクション要素
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/toggle"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/toggle
    </Text>
    <Separator mt={4} mb={8} />
    <Toggle aria-label="Toggle italic">
      <Bold size="16px" />
    </Toggle>
  </>
)
LibToggle.storyName = 'Toggle'

export const LibToggleGroup = () => (
  <>
    <Text as="h1">ToggleGroup</Text>
    <Text mt="2" fz="sm">
      Toggleをグループ化したもの
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/toggle-group"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/toggle-group
    </Text>
    <Separator mt={4} mb={8} />
    <ToggleGroup.Root type="single" defaultValue="center" aria-label="Text alignment">
      <ToggleGroup.Item value="left" aria-label="Left aligned">
        <AlignLeft size="16px" />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="center" aria-label="Center aligned">
        <AlignCenter size="16px" />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="right" aria-label="Right aligned">
        <AlignRight size="16px" />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  </>
)
LibToggleGroup.storyName = 'ToggleGroup'

export const LibToolbar = () => (
  <>
    <Text as="h1">Toolbar</Text>
    <Text mt="2" fz="sm">
      ボタン、トグルグループ、ドロップダウンメニューなどのセットをグループ化するためのコンテナ
    </Text>
    <Text
      mt="2"
      fz="sm"
      as="a"
      href="https://www.radix-ui.com/docs/primitives/components/toolbar"
      target="_blank"
      rel="noreferrer noopener"
    >
      https://www.radix-ui.com/docs/primitives/components/toolbar
    </Text>
    <Separator mt={4} mb={8} />
    <Toolbar.Root aria-label="Formatting options" css={{ maw: '1000px' }}>
      <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
        <Toolbar.ToggleItem value="bold" aria-label="Bold">
          <Bold size="16px" />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="italic" aria-label="Italic">
          <Italic size="16px" />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="strikethrough" aria-label="Strike through">
          <Strikethrough size="16px" />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>
      <Toolbar.Separator />
      <Toolbar.ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
        <Toolbar.ToggleItem value="left" aria-label="Left aligned">
          <AlignLeft size="16px" />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="center" aria-label="Center aligned">
          <AlignCenter size="16px" />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="right" aria-label="Right aligned">
          <AlignRight size="16px" />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>
      <Toolbar.Separator />
      <Toolbar.Link href="#" target="_blank" css={{ marginRight: 10 }}>
        Edited 2 hours ago
      </Toolbar.Link>
      <Toolbar.Button css={{ marginLeft: 'auto' }}>Share</Toolbar.Button>
    </Toolbar.Root>
  </>
)
LibToolbar.storyName = 'Toolbar'

export const LibTooltip = () => {
  const IconButton = styled('button', {
    base: {
      all: 'unset',
      fontFamily: 'inherit',
      borderRadius: '100%',
      height: 35,
      width: 35,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
  return (
    <>
      <Text as="h1">Tooltip</Text>
      <Text mt="2" fz="sm">
        ホバー・フォーカス時に、その要素に関連する情報を表示するポップアップ
      </Text>
      <Text
        as="a"
        href="https://www.radix-ui.com/docs/primitives/components/tooltip"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://www.radix-ui.com/docs/primitives/components/tooltip
      </Text>
      <Separator mt={4} mb={8} />
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <IconButton>
            <Plus size={16} />
          </IconButton>
        </Tooltip.Trigger>
        <Tooltip.Content sideOffset={5}>
          <Text fz="sm">Add to library</Text>
        </Tooltip.Content>
      </Tooltip.Root>
    </>
  )
}
LibTooltip.storyName = 'Tooltip'
