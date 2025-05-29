/**
 * 这里是可用的窗口
 */

import TailwindTest from '@/components/TailwindTest.vue'
import { type WindowOptions } from '@/stores/windows'

export interface IconOptions {
  name: string
  windowOptions: WindowOptions
}

export const icons: Record<string, IconOptions> = {
  tailwind: {
    name: 'tailwind',
    windowOptions: {
      title: 'Window',
      content: TailwindTest,
      minimized: false,
      size: { width: 400, height: 300 },
      minSize: { width: 320, height: 200 },
      allowResize: true,
    },
  },
}
