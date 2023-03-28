
// ** Axios Imports
import axios from '@axios'
import type { AxiosRequestConfig } from 'axios'

// ** Message Imports
import { message } from '@/utils/message'

// ** Helpers Imports
import HELPERS from '@/utils/helper'

export const get = async (url: string, header?: object) => {
    return await axios
        .get(url, header)
        .then(res => res.data)
        .catch(err => {
            if (err) {
                console.log(err,'err')


                //Take response Error
                const errorData = err.response?.data

                // return result data
                const result_data = HELPERS.takeDataResponse(errorData)

                if (errorData) {
                    // Notification Error
                    message(result_data.data || result_data.message)
                }
            }
        })
}

export const post = async (url: string, body: object, header:object) => {
    return await axios
        .post(url, body, header)
        .then(res => res)
        .catch(err => {
            if (err) {
                //Take response Error
                const errorData = err?.response?.data

                // return result data
                const result_data = HELPERS.takeDataResponse(errorData)

                if (errorData) {
                    // Notification Error
                    message(result_data.data || result_data.message)
                }
            }

            return err
        })
}

export const patch = async (url: string, body?: AxiosRequestConfig) => {
    return await axios
        .patch(url, body)
        .then(res => res)
        .catch(err => {
            if (err) {
                //Take response Error
                const errorData = err.response.data

                // return result data
                const result_data = HELPERS.takeDataResponse(errorData)

                if (errorData) {
                    // Notification Error
                    message(result_data.data || result_data.message)
                }
            }
        })
}
