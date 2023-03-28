<script lang="ts" setup>

// ** Types Imports
import type { NavSectionTitle } from '@/layouts/types'

// ** Props & Emit
interface Props {
    item: NavSectionTitle
}

defineProps<Props>()
</script>

<template>
    <li class="uppercase mb-[0.375rem] tracking-[.4px] text-[.75rem] px-3 mx-3.5 mt-5 whitespace-nowrap text-slate-400">
        {{ $t(item.heading) }}
    </li>
</template>
