import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      /* 配置选项放在这里 */
    }),
    presetIcons({
      scale: 1.2,
      collections: {
        carbon: () =>
          import('@iconify-json/carbon/icons.json').then(i => i.default),
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      'primary': 'var(--ant-colorPrimary)',
      'primary-hover': 'var(--ant-colorPrimaryHover)',
      'primary-active': 'var(--ant-colorPrimaryActive)',
      'primary-text': 'var(--ant-colorPrimaryText)',
      'primary-text-hover': 'var(--ant-colorPrimaryTextHover)',
      'primary-bg': 'var(--ant-colorPrimaryBg)',
      'primary-bg-hover': 'var(--ant-colorPrimaryBgHover)',
    },
  },
})
