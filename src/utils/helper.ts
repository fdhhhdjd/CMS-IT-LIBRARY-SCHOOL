//* CONSTANTS Import
import CONSTANTS from '@/configs/constants'
import REGEX from '@/configs/regex'

// * Type Import
import type { Header } from '@/types/headers.type'
import type { ResponseData } from '@/types/response.type'

// * Hepler Import
import { getDeviceId } from '@/utils/auth'

// * Localstorage Import
import { getToken } from '@/utils/localStorage'

const HELPERS = {
    /**
   * @author Nguyễn Tiến Tài
   * @created_at 20/03/2023
   * @descriptionKey return header browser
   * @function getToken
   * @return {String}
   */
    headerBrowser: () => {
    // add the authorization to the headers
        const headers:Header = {
            'Content-Type': 'application/json',
            'X-DEVICE-ID': getDeviceId(),
            'X-OS-TYPE': CONSTANTS.OS_TYPE_HEADER,
            'X-OS-VERSION': CONSTANTS.OS_VERSION_HEADER,
            'X-APP-VERSION': CONSTANTS.APP_VERSION_HEADER,
            'X-DEVICE-NAME': window.navigator.userAgent,
        }

        const token = getToken(CONSTANTS.AUTH_TOKEN)
        if (token) {
            headers.authorization = token ? `Bearer ${token}` : null
        }

        return headers
    },

    /**
   * @author Nguyễn Tiến Tài
   * @created_at 20/03/2023
   * @descriptionKey Convert data response
   * @return {Object}
   */
    takeDataResponse: (successData:ResponseData )=> {
        if (successData?.element) {
            return {
                status: successData?.status,
                message: successData?.message,
                data: successData.element?.result || null,
            }
        }

        return {
            status: successData?.status,
            message: successData?.message,
        }
    },

    /**
     * @author Nguyễn Tiến Tài
     * @created_at 06/02/2023
     * @description from String template to URI
     * @param {template,data}
     * @returns {string}
     */
    getURIFromTemplate(template:string, data:any) {
        return template.replace(REGEX.REGEX_IS_STRING_PARAM, (_, key) => data[key])
    },
}

export default HELPERS
