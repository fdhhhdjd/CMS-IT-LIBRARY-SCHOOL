// ** Axios Imports
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

// ** Config
import CONSTANTS from '@/configs/constants'
import { CONFIG } from '@/config'

// ** Api Import
import API_AUTH from '@/api/api_auth'

// ** Utils Imports
import HELPERS from '@/utils/helper'
import { getToken,setToken,clearToken } from '@/utils/localStorage'
import { KEY_TOKEN } from '@/utils/enums'
import { post,get } from '@/utils/request'


// ** Router Imports
import router from '@/router'

const axiosIns = axios.create({
    baseURL: CONFIG.API_BASE_URL,
    withCredentials: true,
    timeout: 3000,
    headers: {
        Accept: 'application/json',
    },
})

axiosIns.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        if (config.url !== API_AUTH.LOGIN_ADMIN) {

            const auth = getToken(KEY_TOKEN.AUTH_TOKEN) || 'null'

            if (auth) {
                config.headers['Authorization'] = `Bearer ${auth}`
            }
        }

        return config
    },
    error => {
        return Promise.reject(error)
    },
)

let isRefreshing = false

axiosIns.interceptors.response.use(
    (response: AxiosResponse) => response,
    async err => {
        const originalConfig = err?.config
        if (
            originalConfig &&
            originalConfig?.url !== API_AUTH.LOGIN_ADMIN &&
            err.response &&
            err.response?.status === 401 &&
            !originalConfig._retry &&
            !isRefreshing
        ) {
            originalConfig._retry = true
            originalConfig!.headers = { ...originalConfig!.headers }

            try {
                const response = await get(API_AUTH.RE_NEW_TOKEN_ADMIN, {
                    headers: HELPERS.headerBrowser(),
                    withCredentials: true,
                })

                isRefreshing = false

                const accessToken= response?.element?.result?.access_token

                setToken(KEY_TOKEN.AUTH_TOKEN,accessToken)

                return axiosIns(originalConfig)
            } catch (_error) {
                console.log(_error)

                clearToken(KEY_TOKEN.AUTH_TOKEN)
                clearToken(KEY_TOKEN.AUTH_PROFILE)
                router.push({ path: '/login' })

                return Promise.reject(_error)
            }
        }

        return Promise.reject(err)
    },
)

export default axiosIns
