// ** Utils Import
import { get } from '@/utils/request'

// ** Types Imports
import type { BookResult } from '@/types/book.type'

// ** PATH API
import API_BOOK from '@/api/api_book'

//**  Helper Import
import HELPERS from '@/utils/helper'

interface State {
    loading: boolean
    data_book: BookResult[]
}
export const useBookStore = defineStore('bookStore', {
    state: (): State => ({
        loading: false,
        data_book:[],
    }),
    getters: {
    },
    actions: {
        async getALlBook() {
            return await get(API_BOOK.ALL_BOOK,
                {
                    headers: HELPERS.headerBrowser(),
                },
            )
        },
        async getDetailBook(id:number) {
            console.log( HELPERS.headerBrowser(),' HELPERS.headerBrowser()')

            const api_get_detail_book = HELPERS.getURIFromTemplate(API_BOOK.DETAIL_BOOK,{ book_id:id })

            return await get(api_get_detail_book, {
                headers: HELPERS.headerBrowser(),
                withCredentials: true,
            },
            )
        },
    },
})
