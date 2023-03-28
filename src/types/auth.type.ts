/**
 * @author Nguyễn Tiến Tài
 * @created_at 20/03/2023
 * @descriptionKey type Auth
 */
export interface InputAuthLogin extends ObjectAdminLogin {
    input: ObjectAdminLogin
}

export interface ObjectAdminLogin extends AuthLogin {
    user_login_input: AuthLogin
}
export interface AuthLogin  {
    mssv: string
    password: string
}

//Profile
export interface resultProfile extends AuthProfile {
    result: AuthProfile
}
export interface AuthProfile  {
    user_id: number
    role: number
    mssv: number
    name: string
    avatar_uri: string
    email: string
    address: string
    dob: string
    gender: number
    class: string
    phone_hidden: string
}
