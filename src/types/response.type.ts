/**
 * @author Nguyễn Tiến Tài
 * @created_at 20/03/2023
 * @descriptionKey type Response
 */

export interface ResponseData extends ElementData {
    element: ElementData
}

export interface ElementData extends dataObject{
    status: number
    message: string
    data: dataObject
}

export interface dataObject  {
    result?: string |any
}
