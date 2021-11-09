import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _91ff75ae = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _5f094896 = () => interopDefault(import('../pages/coming.vue' /* webpackChunkName: "pages/coming" */))
const _6578bb6e = () => interopDefault(import('../pages/Confirmation.vue' /* webpackChunkName: "pages/Confirmation" */))
const _0aff1988 = () => interopDefault(import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _290d9b38 = () => interopDefault(import('../pages/form.vue' /* webpackChunkName: "pages/form" */))
const _a7ea9188 = () => interopDefault(import('../pages/Search.vue' /* webpackChunkName: "pages/Search" */))
const _fb983498 = () => interopDefault(import('../pages/uuuu.vue' /* webpackChunkName: "pages/uuuu" */))
const _641bf484 = () => interopDefault(import('../pages/profile/_profile.vue' /* webpackChunkName: "pages/profile/_profile" */))
const _5f46000e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _91ff75ae,
    name: "About"
  }, {
    path: "/coming",
    component: _5f094896,
    name: "coming"
  }, {
    path: "/Confirmation",
    component: _6578bb6e,
    name: "Confirmation"
  }, {
    path: "/Contact",
    component: _0aff1988,
    name: "Contact"
  }, {
    path: "/form",
    component: _290d9b38,
    name: "form"
  }, {
    path: "/Search",
    component: _a7ea9188,
    name: "Search"
  }, {
    path: "/uuuu",
    component: _fb983498,
    name: "uuuu"
  }, {
    path: "/profile/:profile?",
    component: _641bf484,
    name: "profile-profile"
  }, {
    path: "/",
    component: _5f46000e,
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
