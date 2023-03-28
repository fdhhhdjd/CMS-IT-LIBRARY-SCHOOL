<script lang="ts" setup>

// ** Types Imports
import type { NavGroup, NavLink, NavSectionTitle } from '@/layouts/types'

// ** Utils Imports
import navItems from '@/utils/router'

// ** Hook Imports
import { useNav } from '@/layouts/hooks/useNav'

// ** Components Imports
import VerticalNavGroup from './VerticalNavGroup.vue'
import VerticalNavLink from './VerticalNavLink.vue'
import VerticalNavSectionTitle from './VerticalNavSectionTitle.vue'

// ** Data
const route = useRoute()
const { isSidebarStatus, isDesktop, sidebarMobile, sidebarCollapse } = useNav()

// ** Watch
watch(() => route.name, () => {
    if (!isDesktop.value && isSidebarStatus) {
        sidebarMobile(false)
    }
})

watch(isDesktop, () => isDesktop.value ? sidebarCollapse(false) : sidebarMobile(false))

// ** Methods
const resolveNavItemComponent = (item: NavLink | NavSectionTitle | NavGroup) => {
    if ('heading' in item) return VerticalNavSectionTitle
    if ('children' in item) return VerticalNavGroup

    return VerticalNavLink
}
</script>

<template>
    <div class="layout-main">
        <aside
            class="fixed flex flex-col transition-[width] duration-200 ease-in-out z-[200]"
            :class="{
                'w-0': !isDesktop,
                'w-[260px]': (isDesktop && !isSidebarStatus) || (!isDesktop && isSidebarStatus),
            }"
        >
            <ElScrollbar>
                <ElMenu
                    router
                    unique-opened
                    mode="vertical"
                    class="h-[100vh]"
                    :collapse="(isDesktop && isSidebarStatus) || (!isDesktop && !isSidebarStatus)"
                    :default-active="route.name as string"
                >
                    <VerticalLogo />

                    <Component
                        :is="resolveNavItemComponent(item)"
                        v-for="(item, index) in navItems"
                        :key="index"
                        :item="item"
                    />
                </ElMenu>
            </ElScrollbar>
        </aside>

        <div
            class="fixed z-[199] bg-[#0009] cursor-pointer transition-[opacity] duration-[.15s] ease-in-out inset-0 none"
            :class="{
                'opacity-0 pointer-events-none hidden': (isDesktop) || (!isDesktop && !isSidebarStatus),
                'opacity-1 pointer-events-auto': !isDesktop && !isSidebarStatus
            }"
            @click="sidebarCollapse(false)"
        />

        <ElBacktop
            :right="100"
            :bottom="100"
        />

        <div
            class="layout-content-wrapper transition-[padding-left] duration-200 ease-in-out"
            :class="{
                'pl-[80px]': isSidebarStatus && isDesktop,
                'pl-[260px]': !isSidebarStatus && isDesktop,
                'pl-0': !isDesktop
            }"
        >
            <div
                class="px-6 max-w-[1440px] w-100 mx-auto"
            >
                <Header />

                <main class="mt-4 pt-6">
                    <RouterView v-slot="{ Component }">
                        <Transition
                            name="fade-transform"
                            mode="out-in"
                        >
                            <Component :is="Component" />
                        </Transition>
                    </RouterView>
                </main>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.el-menu--collapse {
    width: 80px !important;
}
</style>
