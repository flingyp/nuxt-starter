declare module '@vue/runtime-dom' {
  interface Document {
    startViewTransition?: (callback: () => void | Promise<void>) => {
      ready: Promise<void>
      finished: Promise<void>
      updateCallbackDone: Promise<void>
      skipTransition: () => void
    }
  }
}

export {}
