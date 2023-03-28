//! LIBRARY
import { nanoid } from 'nanoid'

//! SHARE
import CONSTANTS from '@/configs/constants'

/**
 * @author Nguyễn Tiến Tài
 * @created_at 20/03/2023
 * @descriptionKey Create id computer
 * @function getDeviceId
 * @return {String}
 */
export function getDeviceId() {
    let result = localStorage.getItem(CONSTANTS.DEVICE_ID)
    if (result) {
        return result
    } else {
        result = nanoid(CONSTANTS.RANDOM_NANO_ID)
        localStorage.setItem(CONSTANTS.DEVICE_ID, result)

        return result
    }
}
