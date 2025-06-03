/**
 * 这里是可用的窗口
 */

import TailwindTest from '@/components/TailwindTest.vue'

export const icons = {
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
