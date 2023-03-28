<script lang="ts" setup>

// ** Types Imports
import type { NavGroup } from '@/layouts/types'

// ** Props & Emit
interface Props {
    item: NavGroup
}

defineProps<Props>()
</script>

<template>
    <ElSubMenu index="1">
        <template #title>
            <Component
                :is="item.icon"
                class="w-[1em] h-[1em] mr-[6px]"
            />

            {{ $t(item.title) }}
        </template>

        <VerticalNavLink
            v-for="child in item.children"
            :key="child.title"
            :item="child"
        />
    </ElSubMenu>
</template>
