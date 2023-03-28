export const useNav = () => {
    // ** Data
    const app = useAppStore()

    const isSidebarStatus = computed(() => {
        return app.getSidebarStatus
    })

    const isMobileCollapse = computed(() => {
        return app.getSidebarMobile
    })

    const isDesktop = useMediaQuery('(min-width: 1200px)')

    const sidebarCollapse = (params?: boolean) => app.sidebarCollapse(params)
    const sidebarMobile = (params?: boolean) => app.sidebarMobileCollapse(params)

    return {
        isSidebarStatus,
        isDesktop,
        isMobileCollapse,
        sidebarCollapse,
        sidebarMobile,
    }
}
