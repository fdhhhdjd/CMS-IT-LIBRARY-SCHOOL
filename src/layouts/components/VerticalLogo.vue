<script lang="ts" setup>

// ** Utils Imports
import Config from '@/utils/config'

// ** Hook Imports
import { useNav } from '@/layouts/hooks/useNav'

// ** Assets Imports
import logo from '@/assets/logo.png'

// ** Data
const { isSidebarStatus, isDesktop, sidebarMobile } = useNav()

// ** Methods
</script>

<template>
    <div class="flex items-center justify-between px-2.5 mx-3.5">
        <RouterLink
            to="/"
            class="flex items-center py-4"
            :class="{
                'justify-center': isSidebarStatus && isDesktop,
                'gap-x-3': (isDesktop && !isSidebarStatus) || (!isDesktop)
            }"
        >
            <img
                alt="Logo"
                :src="logo"
                class="w-[32px] h-[32px] max-w-none"
            >

            <h1
                v-if="(isDesktop && !isSidebarStatus) || (!isDesktop)"
                class="text-[16px] uppercase whitespace-nowrap text-ellipsis"
            >
                {{ Config.Title }}
            </h1>
        </RouterLink>

        <Close
            v-if="!isDesktop"
            class="w-[1em] h-[1em] cursor-pointer"
            @click="sidebarMobile"
        />
    </div>
</template>
