/**
 * @author Nguyễn Tiến Tài
 * @created_at 20/03/2023
 * @descriptionKey type Demo
 */

export interface Student {
    name: string
    age: number
    class: string
    gender: string
    mo_to_bike : ObjectDemo

}

export interface Student1 extends ObjectDemo {
    name: string
}

export interface ObjectDemo {
    bike: string
    car: string
}

export interface FormLogin {
    user_name: string
    password: string
}

export interface ListTodo {
    userId: number
    id: number
    title: string
    completed: boolean
}




