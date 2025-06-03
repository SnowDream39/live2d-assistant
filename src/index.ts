import Live2dWidget from './components/LiveCanvas.vue'

export default {
  install(app: any) {
    app.component('Live2dWidget', Live2dWidget)
  },
}
