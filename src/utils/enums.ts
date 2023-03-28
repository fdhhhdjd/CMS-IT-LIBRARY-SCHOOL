/**
   * @author Nguyễn Tiến Tài
   * @created_at 20/03/2023
   * @descriptionKey Header
   * @return {string}
   */
export enum ROUTE {
    DEVICE = 'device',
    SERVICE = 'service',
    ACCESSORY = 'accessory',
}

export enum NAME {
    NAME = 'Nguyen Tien Tai'
}

/**
* @author Nguyễn Tiến Tài
* @created_at 20/03/2023
* @descriptionKey Header
* @return {string}
*/
export enum Headers {
  OS_TYPE_HEADER= 'web',
  OS_VERSION_HEADER= '1.0',
  APP_VERSION_HEADER= '1.0',
  DEVICE_ID= 'device-id',
}

/**
* @author Nguyễn Tiến Tài
* @created_at 20/03/2023
* @descriptionKey Random key id
* @return {Number}
*/
export enum RANDOM_NANO{
    RANDOM_NANO_ID= 50,
}

/**
 * @author Nguyễn Tiến Tài
 * @created_at 20/03/2023
 * @descriptionKey Key Auth token localStorage
 * @return {string}
 */
export enum KEY_TOKEN{
    AUTH_TOKEN='auth-token',
    AUTH_PROFILE= 'auth-profile'
  }


