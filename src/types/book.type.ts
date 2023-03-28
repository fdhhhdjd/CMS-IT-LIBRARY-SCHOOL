/**
 * @author Nguyễn Tiến Tài
 * @created_at 27/03/2023
 * @descriptionKey type book
 */
export interface BookResult extends BookType {
    result: BookType
}
export interface BookType  {
    book_id: number
    author_id: number
    mssv: number
    name: string
    image_uri: string
    description: string
    language: string
    dob: string
    bookshelf: number
    page_number: number
    total_comment: number
    total_like: number
    total_rating: number
    quantity: number
    status: number
    class: string
    rate_average: string
}
