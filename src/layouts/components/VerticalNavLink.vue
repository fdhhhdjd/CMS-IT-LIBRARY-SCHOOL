<script lang="ts" setup>

// ** Types Imports
import type { NavLink } from '@/layouts/types'

// ** Props & Emit
interface Props {
    item: NavLink
}

defineProps<Props>()
</script>

<template>
    <ElMenuItem
        :index="item.to"
        class="font-medium capitalize tracking-wide"
    >
        <ElIcon>
            <Component
                :is="item.icon"
                class="w-[1em] h-[1em]"
            />
        </ElIcon>

        <template #title>
            <span class="whitespace-nowrap overflow-hidden text-ellipsis">{{ $t(`Router.${item.title}`) }}</span>
        </template>
    </ElMenuItem>
</template>

<style lang="scss">
.el-menu-item .el-menu-tooltip__trigger {
    justify-content: center !important;
}
</style>
