import { useState, useEffect } from 'react'
import { API } from '../services/constants'
import { getTotalCharPages } from '../services/fetchChars'

function useGetTotalPages() {
    const [totalPages, setTotalPages] = useState(API.initialPage)
    const [loadingTotalPages, setLoading] = useState(false)
    const [errorTotalPages, setError] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                const totalPages = await getTotalCharPages();
                setTotalPages(totalPages)
            } catch (e) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        })()
    },[getTotalCharPages])

    return { totalPages, loadingTotalPages, errorTotalPages }
}

export default useGetTotalPages