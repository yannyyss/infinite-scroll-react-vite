import React, { useEffect } from 'react'
import Card from '../../components/card/Card'
import useGetTotalPages from '../../hooks/useGetTotalPages'
import useGetChars from '../../hooks/useGetChars'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'

import './CharsList.css'

function CharsList() {
    
    const { totalPages, loadingTotalPages, errorTotalPages } = useGetTotalPages()
    const { loadMoreRef, page } = useInfiniteScroll()
    const { chars, loading, error, endMessage } = useGetChars(page, totalPages)

    return (
        <div className='chars-list'>
            {(chars.length >0) && chars?.map((char, i) => {
                return <Card key={i} char={char}></Card>
            })}
            <div ref={loadMoreRef}>{(loading || loadingTotalPages) && <p className='loading-message'>...Loading</p>}</div>
            {endMessage && <p className='end-message'>{endMessage}</p>}
            {(error || errorTotalPages) && <p className='error'>{(error || errorTotalPages)}</p>}
        </div>
    )
}

export default CharsList