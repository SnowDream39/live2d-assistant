/**
 * 这个store是管理现有的窗口，包括最小化的窗口。
 * 创建窗口不归它管。
 */
import { defineStore } from 'pinia'

export interface WindowOptions {
  title: string
  content: any
  minimized: boolean
  padding?: string
  minSize?: { width: number; height: number }
  size?: { width: number; height: number }
  allowResize?: boolean
  // 我连事件钩子也设计了
  beforeMinimize?: () => void
  afterMinimize?: () => void
  beforeMaximize?: () => void
  afterMaximize?: () => void
  beforeClose?: () => void
  afterClose?: () => void
}

export const useWindowsStore = defineStore('windows', {
  state: () => ({
    windows: {} as Record<string, WindowOptions>,
  }),
})
