// ** Utils Import
import { post,get } from '@/utils/request'
import { setLocalStorage } from '@/utils/localStorage'
import { KEY_TOKEN } from '@/utils/enums'

// ** Types Imports
import type { AuthLogin, AuthProfile } from '@/types/auth.type'

// ** Configs Api
import { CONFIG } from '@/config'

// ** PATH API
import API_AUTH from '@/api/api_auth'

//**  Helper Import
import HELPERS from '@/utils/helper'

interface State {
    loading: boolean
    data_profile: AuthProfile[]
}
export const useAuthStore = defineStore('authStore', {
    state: (): State => ({
        loading: false,
        data_profile:[],
    }),
    getters: {
    },
    actions: {
        async login(form: AuthLogin) {
            return await post(API_AUTH.LOGIN_ADMIN, {
                input: {
                    admin_login_input: {
                        mssv: form.mssv,
                        password: form.password,
                    },
                },
            },
            {
                headers: HELPERS.headerBrowser(),
            },
            )
        },

        async getProfile() {
            const response = await get(API_AUTH.PROFILE_ADMIN, {
                headers: HELPERS.headerBrowser(),
                withCredentials: true,
            })

            this.data_profile = response?.element?.result
            setLocalStorage(KEY_TOKEN.AUTH_PROFILE,JSON.stringify(this.data_profile))

            return  response?.element?.result
        },

        async logoutAdmin() {
            return await get(API_AUTH.LOGOUT_ADMIN, {
                headers: HELPERS.headerBrowser(),
                withCredentials: true,
            })
        },
    },
})
