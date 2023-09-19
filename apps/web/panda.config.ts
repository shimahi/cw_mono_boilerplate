import { defineConfig, defineGlobalStyles } from '@pandacss/dev'
import { preset } from '@pandacss/preset-panda'

export default defineConfig({
  outExtension: 'js',
  jsxFramework: 'react',
  preflight: true,
  outdir: 'styled-system',
  include: [
    './src/components/**/*.tsx',
    './src/routes/**/*.tsx',
    './src/_root/**/*.tsx',
    './.ladle/stories/**.stories.tsx',
  ],
  exclude: [],
  conditions: {
    // テーマ
    defaultTheme: '[data-theme=default] &',
    // カラーモード
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
  },
  utilities: {
    extend: {
      display: { shorthand: 'd' },
      position: { shorthand: 'pos' },
      zIndex: { shorthand: 'z' },
      background: { shorthand: 'bg' },
      backgroundColor: { shorthand: 'bgc' },
      backgroundSize: { shorthand: 'bgsz' },
      backgroundPosition: { shorthand: 'bgp' },
      backgroundRepeat: { shorthand: 'bgr' },
      backgroundImage: { shorthand: 'bgi' },
      backgroundAttachment: { shorthand: 'bga' },
      minWidth: { shorthand: 'miw' },
      maxWidth: { shorthand: 'maw' },
      minHeight: { shorthand: 'mih' },
      maxHeight: { shorthand: 'mah' },
      border: { shorthand: 'b' },
      borderRadius: { shorthand: 'br' },
      borderWidth: { shorthand: 'bw' },
      borderStyle: { shorthand: 'bs' },
      borderColor: { shorthand: 'bc' },
      color: { shorthand: 'c' },
      fontFamily: { shorthand: 'ff' },
      fontSize: { shorthand: 'fz' },
      fontWeight: { shorthand: 'fw' },
      textAlign: { shorthand: 'ta' },
      letterSpacing: { shorthand: 'lts' },
      lineHeight: { shorthand: 'lh' },
      fontStyle: { shorthand: 'fs' },
      textTransform: { shorthand: 'tt' },
      textDecoration: { shorthand: 'td' },
      flexDirection: { shorthand: 'fd' },
      justifyContent: { shorthand: 'jc' },
      justifyItems: { shorthand: 'ji' },
      justifySelf: { shorthand: 'js' },
      alignItems: { shorthand: 'ai' },
      alignContent: { shorthand: 'ac' },
      alignSelf: { shorthand: 'as' },
      placeContent: { shorthand: 'pc' },
      placeItems: { shorthand: 'pi' },
      placeSelf: { shorthand: 'ps' },
      boxShadow: { shorthand: 's' },
      /**  グリッドレイアウトを縦に何分割するか決める */
      cols: {
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none'],
        transform: (value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'none') => ({
          gridTemplateColumns: value === 'none' ? 'none' : `repeat(${value}, 1fr)`,
        }),
      },
      /**  グリッドレイアウトを横に何分割するか決める */
      rows: {
        values: [1, 2, 3, 4, 5, 6, 'none'],
        transform: (value: 1 | 2 | 3 | 4 | 5 | 6 | 'none') => ({
          gridTemplateRows: value === 'none' ? 'none' : `repeat(${value}, 1fr)`,
        }),
      },
      /**  グリッドの子要素がグリッド(横方向)を何ブロック占めるか指定する */
      colSpan: {
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto', 'full'],
        transform: (value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto' | 'full') => {
          if (value === 'auto') return { gridColumn: 'auto' }
          if (value === 'full') return { gridColumn: '1 / -1' }

          return { gridColumn: `span ${value} / span ${value}` }
        },
      },
      /**  グリッドの子要素がグリッド(縦方向)を何ブロック占めるか指定する */
      rowSpan: {
        values: [1, 2, 3, 4, 5, 6, 'auto', 'full'],
        transform: (value: 1 | 2 | 3 | 4 | 5 | 6 | 'auto' | 'full') => {
          if (value === 'auto') return { gridRow: 'auto' }
          if (value === 'full') return { gridRow: '1 / -1' }

          return { gridRow: `span ${value} / span ${value}` }
        },
      },
    },
  },
  // Useful for theme customization
  theme: {
    ...preset.theme,
    tokens: {
      ...preset.theme.tokens,
      colors: {
        black: { value: '#000000' },
        white: { value: '#FFFFFF' },
        twitter: { value: '#00ACEE' },
        facebook: { value: '#1778F2' },
        line: { value: '#00B900' },
      },
    },
    semanticTokens: {
      colors: {
        /** アプリの背景に適用する色 */
        background: {
          value: {
            _defaultTheme: { _light: 'hsl(0, 0%, 100%)', _dark: 'hsl(224, 71%, 4%)' },
          },
        },
        backgroundAlpha: {
          value: {
            _defaultTheme: { _light: 'hsla(0, 0%, 100%, 0.8)', _dark: 'hsla(224, 71%, 4%, 0.8)' },
          },
        },
        /** アプリの背景上に置く要素(文字)に適用する色 */
        foreground: {
          value: {
            _defaultTheme: { _light: 'hsl(222, 48%, 11%)', _dark: 'hsl(213, 31%, 91%)' },
          },
        },
        foregroundAlpha: {
          value: {
            _defaultTheme: { _light: 'hsl(222, 48%, 11%, 0.8)', _dark: 'hsl(213, 31%, 91%, 0.8)' },
          },
        },
        /** アプリの背景色に薄めのコントラストを与える色 */
        accent: {
          value: {
            _defaultTheme: { _light: 'hsl(210, 40%, 92%)', _dark: 'hsl(216, 34%, 17%)' },
          },
        },
        accentAlpha: {
          value: {
            _defaultTheme: { _light: 'hsla(210, 40%, 92%, 0.7)', _dark: 'hsla(216, 34%, 17%, 0.7)' },
          },
        },
        accentForeground: {
          value: {
            _defaultTheme: { _light: 'hsl(222, 47%, 11%)', _dark: 'hsl(210, 40%, 98%)' },
          },
        },
        /** UIのベースカラー */
        primary: {
          value: {
            _defaultTheme: { _light: 'hsl(222, 47%, 11%)', _dark: 'hsl(210, 40%, 98%)' },
          },
        },
        primaryAlpha: {
          value: {
            _defaultTheme: { _light: 'hsla(222, 47%, 11%, 0.8)', _dark: 'hsla(210, 40%, 98%, 0.8)' },
          },
        },
        primaryForeground: {
          value: {
            _defaultTheme: { _light: 'hsl(210, 40%, 98%)', _dark: 'hsl(222, 47%, 1%)' },
          },
        },
        /** UIのサブカラー */
        secondary: {
          value: {
            _defaultTheme: { _light: 'hsl(210, 40%, 96%)', _dark: 'hsl(222, 47%, 11%)' },
          },
        },
        secondaryAlpha: {
          value: {
            _defaultTheme: { _light: 'hsla(210, 40%, 96%, 0.8)', _dark: 'hsla(222, 47%, 11%, 0.8)' },
          },
        },
        secondaryForeground: {
          value: {
            _defaultTheme: { _light: 'hsl(222, 47%, 11%)', _dark: 'hsl(210, 40%, 98%)' },
          },
        },
        /** 警告色 */
        destructive: {
          value: {
            _defaultTheme: { _light: 'hsl(0, 100%, 50%)', _dark: 'hsl(0, 63%, 31%)' },
          },
        },
        destructiveAlpha: {
          value: {
            _defaultTheme: { _light: 'hsla(0, 100%, 50%, 0.8)', _dark: 'hsla(0, 63%, 31%, 0.8)' },
          },
        },
        destructiveForeground: {
          value: {
            _defaultTheme: { _light: 'hsl(210, 40%, 98%)', _dark: 'hsl(210, 40%, 98%)' },
          },
        },
        /** 注釈となる薄めの文字や操作できないUIの色 */
        muted: {
          value: {
            _defaultTheme: { _light: 'hsl(210, 40%, 96%)', _dark: 'hsl(222, 47%, 11%)' },
          },
        },
        mutedAlpha: {
          value: {
            _defaultTheme: { _light: 'hsla(210, 40%, 96%, 0.8)', _dark: 'hsla(222, 47%, 11%, 0.8)' },
          },
        },
        mutedForeground: {
          value: {
            _defaultTheme: { _light: 'hsl(215, 16%, 47%)', _dark: 'hsl(215, 16%, 57%)' },
          },
        },
        /** インタラクティブ要素がフォーカスされたときのアウトラインの色。 */
        focus: {
          value: {
            _defaultTheme: { _light: 'hsl(215, 20%, 65%)', _dark: 'hsl(216, 34%, 17%)' },
          },
        },
      },
    },
    extend: {
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        animateIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        animateOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translate(-50%, -45%) scale(.90)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        fadeOut: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(0.9)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(-4px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(-4px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(4px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(4px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        enterFromRight: {
          from: { transform: 'translateX(200px)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 },
        },
        enterFromLeft: {
          from: { transform: 'translateX(-200px)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 },
        },
        exitToRight: {
          from: { transform: 'translateX(0)', opacity: 1 },
          to: { transform: 'translateX(200px)', opacity: 0 },
        },
        exitToLeft: {
          from: { transform: 'translateX(0)', opacity: 1 },
          to: { transform: 'translateX(-200px)', opacity: 0 },
        },
        scaleIn: {
          from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
          to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
        },
        scaleOut: {
          from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
          to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
        },
        slideUpAndFade: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          '0%': { opacity: 0, transform: 'translateX(-8px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideDownAndFade: {
          '0%': { opacity: 0, transform: 'translateY(-8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          '0%': { opacity: 0, transform: 'translateX(8px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInFromBottom: {
          from: { transform: `translateY(calc(100% + 32px))` },
          to: { transform: 'translateX(0)' },
        },
        slideInFromTop: {
          from: { transform: `translateY(-32px)` },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: `translateX(calc(100% + 32px))` },
        },
      },
    },
  },
  globalCss: defineGlobalStyles({
    html: {
      c: 'foreground',
      bgc: 'background',
      bc: 'accent',
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: 1.55,
      fontFamily: 'system-ui, sans-serif',
    },
    h1: {
      fontWeight: '700',
      fontSize: '2.125rem',
      lineHeight: 1.3,
    },
    h2: {
      fontWeight: '700',
      fontSize: '1.625rem',
      lineHeight: 1.35,
    },
    h3: {
      fontWeight: '700',
      fontSize: '1.375rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: '700',
      fontSize: '1.125rem',
      lineHeight: 1.45,
    },
    h5: {
      fontWeight: '700',
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: '700',
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  }),
})
