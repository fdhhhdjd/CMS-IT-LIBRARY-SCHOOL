// **  Imports
import type { DeviceSearch } from '@/types/device.type'

// ** Interface Imports
interface State {
    loading: boolean
    search: DeviceSearch
}

export const useDeviceStore = defineStore('device', {
    state: (): State => ({
        loading: false,
        search: {
            name: '',
            serial: '',
            status: Number(''),
            type: Number(''),
        },
    }),
    actions: {
        handleSearch() {
            this.loading = true
        },
        handleReset() {
            this.loading = false
            this.$reset()
        },
    },
})
