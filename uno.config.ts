import { defineConfig, presetWind4, presetAttributify, presetWind3, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(), // required when using attributify mode
    presetWind3(),
    presetWind4(),
    presetTypography(),
  ],
})
