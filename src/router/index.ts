// ** Vue-Router Imports
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

// ** Plugins Imports
import NProgress from '@/plugins/nprogress'

// ** Utils Imports
import { ROUTE } from '@/utils/enums'

// ** Router Settings
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: () => ROUTE.DEVICE,
        },
        ...setupLayouts(routes),
    ],
    scrollBehavior() {
        return { top: 0 }
    },
})

router.beforeEach((to, _from, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})

export default router
