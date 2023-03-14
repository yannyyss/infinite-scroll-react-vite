
import { useState, useEffect } from 'react'
import { getChars } from '../services/fetchChars'
import { getTotalCharPages } from '../services/fetchChars'

function useGetChars(page, totalPages) {
    const [chars, setChars] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [endMessage, setEndMessage] = useState(false)

    useEffect(() => {
        (async () => {
            if (page <= totalPages) {
                try {
                    const result = await getChars(page)
                    const data = await result.json()
                    const newChars = [...chars, ...data.results]
                    setChars([...new Set(newChars)])
                } catch (e) {
                    setError(e.message)
                } finally {
                    setLoading(false)
                }
            } else {
                setEndMessage('This is the end of the list')
            }
        })()
    },[page, getTotalCharPages])

    return { chars, loading, error, endMessage }
}

export default useGetChars