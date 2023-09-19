/**
 * @description color
 * テーマと色トークンの一覧
 */

import * as React from 'react'
import '../../src/index.css'
import { Box, Grid, Stack, Separator, Text } from '../../src/components/ui'

export const LightTheme = () => {
  return (
    <Box data-theme="default" data-color-mode="light">
      <Text as="h1">Light Theme</Text>
      <Text mt="2" fz="sm">
        ライトモード時のアプリのカラーテーマ
      </Text>
      <Separator mt={4} mb={8} />
      <Box p="8" bgc="background" c="text" css={{ b: 'solid thin' }}>
        <Box px={8}>
          <Text as="h2" mb={4}>
            Theme Color
          </Text>
          <Grid cols={{ '@md': 2 }} gap="4">
            <Box
              bgc="background"
              c="foreground"
              fw="bold"
              css={{
                border: 'solid 2px',
                borderColor: 'foreground',
                px: '6',
                py: '4',
                d: 'grid',
                pi: 'center',
              }}
            >
              background
            </Box>
            <Box bgc="accent" c="accentForeground" fw="bold" css={{ px: '6', py: '4', d: 'grid', pi: 'center' }}>
              accent
            </Box>
            <Box bgc="primary" c="primaryForeground" fw="bold" css={{ px: '6', py: '4', d: 'grid', pi: 'center' }}>
              primary
            </Box>
            <Box bgc="secondary" c="secondaryForeground" fw="bold" css={{ px: '6', py: '4', d: 'grid', pi: 'center' }}>
              secondary
            </Box>
            <Box
              bgc="destructive"
              c="destructiveForeground"
              fw="bold"
              css={{ px: '6', py: '4', d: 'grid', pi: 'center' }}
            >
              destructive
            </Box>
            <Box bgc="muted" c="mutedForeground" fw="bold" css={{ px: '6', py: '4', d: 'grid', pi: 'center' }}>
              muted
            </Box>
          </Grid>
        </Box>
        <Box px={8} mt={8}>
          <Text as="h2" mb={4}>
            Utility Color
          </Text>
          <Stack mt={4} gap="4" fd={{ base: 'column', md: 'row' }}>
            <Stack gap="2">
              <Box bgc="black" h={16} w={16} />
              <Text variant="caption">Black</Text>
            </Stack>
            <Stack gap="2">
              <Box bgc="white" css={{ b: 'solid thin', bc: 'accent' }} h={16} w={16} />
              <Text variant="caption">White</Text>
            </Stack>
            <Stack gap="2">
              <Box bgc="twitter" h={16} w={16} />
              <Text variant="caption">Twitter</Text>
            </Stack>
            <Stack gap="2">
              <Box bgc="facebook" h={16} w={16} />
              <Text variant="caption">Facebook</Text>
            </Stack>
            <Stack gap="2">
              <Box bgc="line" h={16} w={16} />
              <Text variant="caption">LINE</Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export const DarkTheme = () => {
  return (
    <Box data-theme="default" data-color-mode="dark">
      <Text as="h1">Dark Theme</Text>
      <Text mt="2" fz="sm">
        ダークモード時のアプリのカラーテーマ
      </Text>
      <Separator mt={4} mb={8} />
      <Box p={8} bgc="background" c="foreground">
        <Box px={8}>
          <Text as="h2" mb={4}>
            Theme Color
          </Text>
          <Grid cols={{ '@md': 2 }} gap="4">
            <Box
              bgc="background"
              c="foreground"
              fw="bold"
              css={{
                border: 'solid 2px',
                borderColor: 'foreground',
                px: '6',
                py: '4',
                d: 'grid',
                pi: 'center',
              }}
            >
              background
            </Box>
            <Box bgc="accent" c="accentForeground" fw="bold" css={{ px: '6', py: '4', d: 'grid', pi: 'center' }}>
              accent
            </Box>
            <Box bgc="primary" c="primaryForeground" fw="bold" css={{ px: '6', py: '4', d: 'grid', pi: 'center' }}>
              primary
            </Box>
            <Box bgc="secondary" c="secondaryForeground" fw="bold" css={{ px: '6', py: '4', d: 'grid', pi: 'center' }}>
              secondary
            </Box>
            <Box
              bgc="destructive"
              c="destructiveForeground"
              fw="bold"
              css={{ px: '6', py: '4', d: 'grid', pi: 'center' }}
            >
              destructive
            </Box>
            <Box bgc="muted" c="mutedForeground" fw="bold" css={{ px: '6', py: '4', d: 'grid', pi: 'center' }}>
              muted
            </Box>
          </Grid>
        </Box>
        <Box px={8} mt={8}>
          <Text as="h2" mb={4}>
            Utility Color
          </Text>
          <Stack mt={4} gap="4" fd={{ base: 'column', md: 'row' }}>
            <Stack gap="2">
              <Box bgc="black" css={{ b: 'solid thin', bc: 'accent' }} h={16} w={16} />
              <Text variant="caption">Black</Text>
            </Stack>
            <Stack gap="2">
              <Box bgc="white" h={16} w={16} />
              <Text variant="caption">White</Text>
            </Stack>
            <Stack gap="2">
              <Box bgc="twitter" h={16} w={16} />
              <Text variant="caption">Twitter</Text>
            </Stack>
            <Stack gap="2">
              <Box bgc="facebook" h={16} w={16} />
              <Text variant="caption">Facebook</Text>
            </Stack>
            <Stack gap="2">
              <Box bgc="line" h={16} w={16} />
              <Text variant="caption">LINE</Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
