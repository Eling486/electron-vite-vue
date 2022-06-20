import { createStore, createLogger } from 'vuex'
import time from './modules/time'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    time
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})