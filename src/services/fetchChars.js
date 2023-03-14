import { API } from './constants'

export const getChars = (page) => fetch(`${API.baseURL}?page=${page}`)

export async function getTotalCharPages () {
    try {
        const response = await fetch(`${API.baseURL}`)
        const data = await response.json()
        return data.info.pages
    } catch (e) {
        console.log(e.message)
    }
}