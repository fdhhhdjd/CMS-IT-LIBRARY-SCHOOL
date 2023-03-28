/**
 * @author Nguyễn Tiến Tài
 * @created_at 20/03/2023
 * @descriptionKey type Header
 */

export interface Header {
    'Content-Type': string
    'X-DEVICE-ID': any
    'X-OS-TYPE': string
    'X-OS-VERSION': string
    'X-APP-VERSION': string
    'X-DEVICE-NAME': string
    authorization?: string |null
}
