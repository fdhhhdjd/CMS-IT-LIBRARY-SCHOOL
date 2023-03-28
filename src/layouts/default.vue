<script lang="ts" setup>

// ** Component Imports
const VerticalNav = defineAsyncComponent(() => import('./components/Vertical.vue'))
</script>

<template>
    <div class="app-main">
        <VerticalNav />
    </div>
</template>
