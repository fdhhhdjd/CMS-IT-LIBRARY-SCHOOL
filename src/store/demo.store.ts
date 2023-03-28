import type { ListTodo } from '@/types/demo.type'
import { get } from '@/utils/request'

// ** Interface Imports
interface State {
    loading: boolean
    count: number,
    data: ListTodo[],
    total : number
}

export const useDemoStore = defineStore('demo', {
    state: (): State => ({
        loading: false,
        data:[],
        count: 5,
        total:0,
    }),
    getters:{
        doubleCount():number{
            return this.count * 2
        },
    },
    actions: {
        async handleListTodo() {
            this.loading = true

            this.data = await get('https://jsonplaceholder.typicode.com/todos')

        },
        handleReset() {
            this.loading = false
            this.$reset()
        },
    },
})
