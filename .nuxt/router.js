import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _71f480d8 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _7db5a2ac = () => interopDefault(import('../pages/coming.vue' /* webpackChunkName: "pages/coming" */))
const _581ea97e = () => interopDefault(import('../pages/Confirmation.vue' /* webpackChunkName: "pages/Confirmation" */))
const _1f10fee7 = () => interopDefault(import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _0889a76d = () => interopDefault(import('../pages/form.vue' /* webpackChunkName: "pages/form" */))
const _c696eb9e = () => interopDefault(import('../pages/Search.vue' /* webpackChunkName: "pages/Search" */))
const _61aff1e9 = () => interopDefault(import('../pages/uuuu.vue' /* webpackChunkName: "pages/uuuu" */))
const _6f065939 = () => interopDefault(import('../pages/profile/_profile.vue' /* webpackChunkName: "pages/profile/_profile" */))
const _6f4b7a79 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _71f480d8,
    name: "About"
  }, {
    path: "/coming",
    component: _7db5a2ac,
    name: "coming"
  }, {
    path: "/Confirmation",
    component: _581ea97e,
    name: "Confirmation"
  }, {
    path: "/Contact",
    component: _1f10fee7,
    name: "Contact"
  }, {
    path: "/form",
    component: _0889a76d,
    name: "form"
  }, {
    path: "/Search",
    component: _c696eb9e,
    name: "Search"
  }, {
    path: "/uuuu",
    component: _61aff1e9,
    name: "uuuu"
  }, {
    path: "/profile/:profile?",
    component: _6f065939,
    name: "profile-profile"
  }, {
    path: "/",
    component: _6f4b7a79,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
