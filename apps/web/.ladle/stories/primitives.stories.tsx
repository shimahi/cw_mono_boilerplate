/**
 * @description Primitives
 * HTMLタグをstyled-componentで拡張した原始的なコンポーネント
 */
import * as React from 'react'

import '../../src/index.css'
import { Box, Flex, Stack, Separator, Text, Button } from '../../src/components/ui'

document?.querySelector('html')?.setAttribute('data-theme', 'default')
document?.querySelector('html')?.setAttribute('data-color-mode', 'light')

export const PrimitiveButton = () => {
  return (
    <>
      <Text as="h1">Button</Text>
      <Text>ボタン要素を扱うコンポーネント</Text>
      <Separator mt={4} mb={8} />
      <Stack gap={8} p={8} pt={16}>
        <h3>default</h3>
        <Flex gap={4}>
          <Button size="sm">Button</Button>
          <Button>Button</Button>
          <Button size="lg">Button</Button>
        </Flex>
        <h3>outline</h3>
        <Flex gap={4}>
          <Button variant="outline" size="sm">
            Button
          </Button>
          <Button variant="outline">Button</Button>
          <Button variant="outline" size="lg">
            Button
          </Button>
        </Flex>
        <h3>secondary</h3>
        <Flex gap={4}>
          <Button variant="secondary" size="sm">
            Button
          </Button>
          <Button variant="secondary">Button</Button>
          <Button variant="secondary" size="lg">
            Button
          </Button>
        </Flex>
        <h3>ghost</h3>
        <Flex gap={4}>
          <Button variant="ghost" size="sm">
            Button
          </Button>
          <Button variant="ghost">Button</Button>
          <Button variant="ghost" size="lg">
            Button
          </Button>
        </Flex>
        <h3>destructive</h3>
        <Flex gap={4}>
          <Button variant="destructive" size="sm">
            Button
          </Button>
          <Button variant="destructive">Button</Button>
          <Button variant="destructive" size="lg">
            Button
          </Button>
        </Flex>
        <h3>vanilla</h3>
        <Flex gap={4}>
          <Button variant="vanilla" size="sm">
            Button
          </Button>
          <Button variant="vanilla">Button</Button>
          <Button variant="vanilla" size="lg">
            Button
          </Button>
        </Flex>
      </Stack>
      <Stack gap={4} p={8} pt={16} bgc="black" c="foreground" data-theme="default" data-color-mode="dark">
        <h3>default</h3>
        <Flex gap={4}>
          <Button size="sm">Button</Button>
          <Button>Button</Button>
          <Button size="lg">Button</Button>
        </Flex>
        <h3>outline</h3>
        <Flex gap={4}>
          <Button variant="outline" size="sm">
            Button
          </Button>
          <Button variant="outline">Button</Button>
          <Button variant="outline" size="lg">
            Button
          </Button>
        </Flex>
        <h3>secondary</h3>
        <Flex gap={4}>
          <Button variant="secondary" size="sm">
            Button
          </Button>
          <Button variant="secondary">Button</Button>
          <Button variant="secondary" size="lg">
            Button
          </Button>
        </Flex>
        <h3>ghost</h3>
        <Flex gap={4}>
          <Button variant="ghost" size="sm">
            Button
          </Button>
          <Button variant="ghost">Button</Button>
          <Button variant="ghost" size="lg">
            Button
          </Button>
        </Flex>
        <h3>destructive</h3>
        <Flex gap={4}>
          <Button variant="destructive" size="sm">
            Button
          </Button>
          <Button variant="destructive">Button</Button>
          <Button variant="destructive" size="lg">
            Button
          </Button>
        </Flex>
        <h3>vanilla</h3>
        <Flex gap={4}>
          <Button variant="vanilla" size="sm">
            Button
          </Button>
          <Button variant="vanilla">Button</Button>
          <Button variant="vanilla" size="lg">
            Button
          </Button>
        </Flex>
      </Stack>
    </>
  )
}
PrimitiveButton.storyName = 'Button'

export const PrimitiveText = () => {
  return (
    <>
      <Text as="h1">Text</Text>
      <Text mt="2" fz="sm">
        文字を扱うコンポーネント。
        <br />
        定義したタイポグラフィトークンを variant に与えることで文字スタイルを適用する。
      </Text>
      <Text
        mt="2"
        fz="sm"
        as="a"
        href="https://panda-css.com/docs/utilities/typography"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://panda-css.com/docs/utilities/typography
      </Text>
      <Separator mt={4} mb={8} />
      <Box>
        <Text as="h1">どうか Kappa と発音してください。(h1)</Text>
        <Text as="h2">どうか Kappa と発音してください。(h2)</Text>
        <Text as="h3">どうか Kappa と発音してください。(h3)</Text>
        <Text as="h4">どうか Kappa と発音してください。(h4)</Text>
        <Text as="h5">どうか Kappa と発音してください。(h5)</Text>
        <Text as="h6">どうか Kappa と発音してください。(h6)</Text>
        <Separator my={2} css={{ w: '1/2' }} />
        <Text fz="3xl">どうか Kappa と発音してください。(3xl)</Text>
        <Text fz="2xl">どうか Kappa と発音してください。(2xl)</Text>
        <Text fz="xl">どうか Kappa と発音してください。(xl)</Text>
        <Text fz="lg">どうか Kappa と発音してください。(lg)</Text>
        <Text>どうか Kappa と発音してください。(md・デフォルト)</Text>
        <Text fz="sm">どうか Kappa と発音してください。(sm)</Text>
        <Text fz="xs">どうか Kappa と発音してください。(xs)</Text>
      </Box>
      <Box mt={8} p={8} pt={16} mih={40} bgc="background" c="foreground" data-theme="default" data-color-mode="dark">
        <Text as="h1">どうか Kappa と発音してください。(h1)</Text>
        <Text as="h2">どうか Kappa と発音してください。(h2)</Text>
        <Text as="h3">どうか Kappa と発音してください。(h3)</Text>
        <Text as="h4">どうか Kappa と発音してください。(h4)</Text>
        <Text as="h5">どうか Kappa と発音してください。(h5)</Text>
        <Text as="h6">どうか Kappa と発音してください。(h6)</Text>
        <Separator my={2} css={{ w: '1/2' }} />
        <Text fz="3xl">どうか Kappa と発音してください。(3xl)</Text>
        <Text fz="2xl">どうか Kappa と発音してください。(2xl)</Text>
        <Text fz="xl">どうか Kappa と発音してください。(xl)</Text>
        <Text fz="lg">どうか Kappa と発音してください。(lg)</Text>
        <Text>どうか Kappa と発音してください。(md・デフォルト)</Text>
        <Text fz="sm">どうか Kappa と発音してください。(sm)</Text>
        <Text fz="xs">どうか Kappa と発音してください。(xs)</Text>
      </Box>
    </>
  )
}
PrimitiveText.storyName = 'Text'
