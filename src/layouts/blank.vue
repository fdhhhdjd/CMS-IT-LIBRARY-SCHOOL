<script lang="ts">
export default defineComponent({
    setup() {
        const routerView = resolveComponent('router-view')

        return () => h('div', { class: 'flex-col' }, h(routerView))
    },
})
</script>
