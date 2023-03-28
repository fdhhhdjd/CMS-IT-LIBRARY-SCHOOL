/**
* @author Nguyễn Tiến Tài
* @created_at 20/03/2023
* @descriptionKey Get Token localStorage
* @function getToken
* @return {String}
*/
export function getToken(key:string) {
    return localStorage.getItem(key)
}

/**
* @author Nguyễn Tiến Tài
* @created_at 20/03/2023
* @descriptionKey Set Token localStorage
* @function setToken
* @return {String}
*/
export function setToken(key:string, value:string) {
    return localStorage.setItem(key, value)
}

/**
* @author Nguyễn Tiến Tài
* @created_at 20/03/2023
* @descriptionKey CLear localStorage
* @function clearToken
* @return {}
*/
export function clearToken(key:string ) {
    return localStorage.removeItem(key)

}

/**
* @author Nguyễn Tiến Tài
* @created_at 20/03/2023
* @descriptionKey Get Token localStorage
* @function getToken
* @return {String}
*/
export function getLocalStorage(key:string) {
    const value:string | any = localStorage.getItem(key)

    return JSON.parse(value)
}

/**
* @author Nguyễn Tiến Tài
* @created_at 20/03/2023
* @descriptionKey Set Token localStorage
* @function setToken
* @return {String}
*/
export function setLocalStorage(key:string, value:string) {
    return localStorage.setItem(key, value)
}
