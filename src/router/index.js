import Vue from 'vue'
import Router from 'vue-router'

import router1 from './router1'

/**
 * 路由
 * 开发时将路由分配到 router1.js、router2.js、...依此类推，在这里组装。
 */
let routers = []

routers = routers.concat(router1)

Vue.use(Router)

export default new Router({
  routes: routers
})
