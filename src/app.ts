import { createApp } from 'vue'
import store from "./stores";
import router from "./router";

import './main.css'
import './app.less'

const app = createApp({})

app.use(store)
app.use(router)

export default app
