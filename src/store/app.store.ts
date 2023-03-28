export const useAppStore = defineStore('appStore', {
    state: () => ({
        sidebar: {
            opened: false,
            mobile: false,
        },
    }),
    getters: {
        getSidebarStatus(): boolean {
            return this.sidebar.opened
        },
        getSidebarMobile(): boolean {
            return this.sidebar.mobile
        },
    },
    actions: {
        sidebarCollapse(opened?: boolean) {
            this.sidebar.opened = opened ?? !this.sidebar.opened
        },
        sidebarMobileCollapse(mobile?: boolean) {
            this.sidebar.mobile = mobile ?? !this.sidebar.mobile

            if (useMediaQuery('(min-width: 1200px)')) {
                this.sidebarCollapse(!this.sidebar.opened)
            }
        },
    },
})
