/**
 * @description Layouts
 * 要素の配置を担うコンポーネント
 */
import * as React from 'react'
import '../../src/index.css'
import { Box, Container, Flex, Grid, GridItem, Spacer, Stack, Separator, Text } from '../../src/components/ui'

document?.querySelector('html')?.setAttribute('data-theme', 'default')
document?.querySelector('html')?.setAttribute('data-color-mode', 'light')

export const LayoutBox = () => (
  <>
    <Text as="h1">Box</Text>
    <Text mt="2" fz="sm">
      divタグをstyled-componentで拡張した、もっとも基本的なコンポーネント。
    </Text>
    <Separator mt={4} mb={8} />
    <Stack>
      <Box>
        <Box p={4}>Box</Box>
        <Box c="accentForeground" bgc="accent" p={4}>
          Box
        </Box>
      </Box>
    </Stack>
  </>
)
LayoutBox.storyName = 'Box'

export const LayoutContainer = () => (
  <>
    <Text as="h1">Container</Text>
    <Text mt="2" fz="sm">
      最大幅を持つコンテナを作成する。コンテンツは中央に配置される
    </Text>
    <Separator mt={4} mb={8} />
    <Container bgc="accent" p={4} maw="768px">
      <Box h={16} bgc="primary" w="3/4" />
      <Box mt="4" h={16} bgc="white" w="1/2" />
      <Box mt="4" h={16} bgc="destructive" w="1/4" />
    </Container>
  </>
)
LayoutContainer.storyName = 'Container'

export const LayoutStack = () => (
  <>
    <Text as="h1">Stack</Text>
    <Text mt="2" fz="sm">
      子要素を等間隔に配置するコンポーネント。デフォルトは「縦方向・左揃え」
    </Text>
    <Separator mt={4} mb={8} />
    <Stack>
      <Box w={16} h={16} bgc="primary" c="primaryForeground">
        1
      </Box>
      <Box w={16} h={16} bgc="accent" c="accentForeground">
        2
      </Box>
      <Box w={16} h={16} bgc="secondary" c="secondaryForeground">
        3
      </Box>
    </Stack>
  </>
)
LayoutStack.storyName = 'Stack'

export const LayoutFlex = () => (
  <>
    <Text as="h1">Flex</Text>
    <Text mt="2" fz="sm">
      Flexboxを扱うコンポーネント
    </Text>
    <Separator mt={4} mb={8} />
    <Flex b="solid 2px" bc="accent" p={4}>
      <Box w={16} h={16} bgc="primary" />
      <Box w={16} h={16} bgc="accent" />
      <Box w={16} h={16} bgc="secondary" />
    </Flex>
    <Flex gap={4} mt={12} p={4} b="solid 2px" bc="accent">
      <Box w={16} h={16} bgc="primary" />
      <Box w={16} h={16} bgc="accent" />
      <Box w={16} h={16} bgc="secondary" />
    </Flex>
  </>
)
LayoutFlex.storyName = 'Flex'

export const LayoutSpace = () => (
  <>
    <Text as="h1">Space</Text>
    <Text mt="2" fz="sm">
      余白として機能するコンポーネント
    </Text>
    <Separator mt={4} mb={8} />
    <Flex gap={4} mt={12} c="accentForeground" bgc="accent" p={4}>
      <Box w={16} h={16} bgc="primary" />
      <Spacer stretch />
      <Box w={16} h={16} bgc="primary" />
      <Box w={16} h={16} bgc="primary" />
    </Flex>
  </>
)
LayoutSpace.storyName = 'Space'

export const LayoutGrid = () => (
  <>
    <Text as="h1">Grid / GridItem</Text>
    <Text mt="2" fz="sm">
      CSS Grid でスタイルを組むためのコンポーネント
      <br />
      Grid コンポーネントでグリッドのスタイルを決め、その中で GridItem コンポーネントを呼び出し要素のスタイルを行う
    </Text>
    <Separator mt={4} mb={8} />
    <Grid rows="3" h={64} cols="4" b="solid 2px" bc="accent" gap={0}>
      <GridItem rowSpan="2" bgc="primary" c="primaryForeground">
        1
      </GridItem>
      <GridItem colSpan="2" bgc="secondary" c="secondaryForeground">
        2
      </GridItem>
      <GridItem bgc="destructive" c="destructiveForeground">
        3
      </GridItem>
      <GridItem rowSpan="2">4</GridItem>
      <GridItem bgc="accent" c="accentForeground">
        5
      </GridItem>
      <GridItem bgc="primary" c="primaryForeground">
        6
      </GridItem>
      <GridItem bgc="destructive" c="destructiveForeground">
        7
      </GridItem>
      <GridItem colStart="4" bgc="muted" c="mutedForeground">
        8
      </GridItem>
    </Grid>
  </>
)
LayoutGrid.storyName = 'Grid'
