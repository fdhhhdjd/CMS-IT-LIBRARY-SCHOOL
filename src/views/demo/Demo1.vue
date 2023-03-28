<script lang="ts" setup>
interface Props{
    name: string
}

interface Emits {
    (e: 'show', payload: number): void

    // (e: 'update', value: string): void
}
const props = defineProps<Props>()
const emits = defineEmits<Emits>()

console.log(props.name)
</script>

<template>
    <h1>BBBBBBBBBBBBBBBBBBBBBBb: {{ name }}</h1>
    <button @click="emits('show', 6)">
        Increate
    </button>
</template>
