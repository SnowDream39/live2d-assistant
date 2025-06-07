import Live2dWidget from './components/LiveWidget.vue'

export default {
  install(app: any) {
    app.component('Live2dWidget', Live2dWidget)
  },
}
