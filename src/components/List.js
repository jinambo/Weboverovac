import React, { useState, useEffect } from 'react'
import Arrow from '../assets/arrow.svg';

const List = () => {
    const [webs, setWebs] = useState([])
    const [pageNum, setPageNum] = useState(0)

    const fetchData = skip => {
        const url = 'https://api.apitalks.store/coi/rizikove-weby?filter=%7B%22limit%22:30,%22skip%22:' + skip + '%7D'
        const options = {
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': 'oG3PZj2KG08GedHxJDQ0P6WLpReHzJvT3aS9BRlM'
            }
        }
        
        fetch(url, options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setWebs(data.data)
        })
    }

    useEffect(() => {
        fetchData(0) // fetch first page
    }, [])

    const handleNext = () => {
        fetchData((pageNum + 1) * 30)
        setPageNum(pageNum + 1)
    }

    const handlePrev = () => {
        fetchData((pageNum - 1) * 30)
        setPageNum(pageNum - 1)
    }

    return (
        <div className="page-list row row--sm center padding-v-xl">
            <h1 className="title">Seznam rizikových webů:</h1>
            <ul className="webs">
            { webs.map(web => (
                <li key={ web.id } className="webs__item padding-xs"> { web.rizikove } </li>
            )) }
            </ul>
            <div className="pagination flex-c-sb">
                <div className={ pageNum < 1 ? 'pagination__prev pagination--disabled flex-c-c' : 'pagination__prev flex-c-c' }
                    onClick={ handlePrev }>
                    <img className="arrow arrow--left" src={ Arrow } />
                    <p>Předchozí</p>
                </div>
                <div className="pagination__next flex-c-c"
                    onClick={ handleNext }>
                    <p>Další</p>
                    <img className="arrow arrow--right" src={ Arrow } />
                </div>
            </div>
        </div>
    )
}

export default List;