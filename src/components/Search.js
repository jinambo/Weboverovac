import React, { useState, useRef } from 'react'

import Close from '../assets/close.svg';
import Danger from '../assets/danger.svg';
import Safe from '../assets/safe.svg';

const Search = (props) => {
    const urlRef = useRef('')
    const [found, setFound] = useState('')
    const [loading, setLoading] = useState(false)

    const searchData = async (itemToFind) => {
        const options = {
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': 'oG3PZj2KG08GedHxJDQ0P6WLpReHzJvT3aS9BRlM'
            }
        }
        
        let dangerous = false // just for the localstorage feature
        let looped = false
        let skip = 0

        let item = itemToFind.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]

        setLoading(true)

        while (looped !== true) {
            await fetch('https://api.apitalks.store/coi/rizikove-weby?filter=%7B%22limit%22:30,%22skip%22:' + skip + '%7D', options)
            .then(res => res.json())
            .then(data => {
                data.data.forEach(web => {
                  if (web.rizikove === item) {
                      setFound(true)
                      dangerous = true
                      looped = true
                      console.error('web was found')
                  }  
                })

                if (data.count === 0) {
                    setFound(false)
                    dangerous = false
                    looped = true
                }
            })

            console.log(looped)
            skip += 30;
        }

        // set loading state to false
        setLoading(false)

        // store item and it's type (found/not found) to the localStorage
        let historyArr = []

        if (localStorage.getItem('history')) {
            historyArr = JSON.parse(localStorage.getItem('history'))
        } 

        historyArr.unshift({
            item: itemToFind,
            type: dangerous ? 'dangerous' : 'safe'
        })

        localStorage.setItem('history', JSON.stringify(historyArr))
        props.setHistory(historyArr)
    }

    const handleAnother = () => {
        const searchInput = document.querySelector('.search-bar__input')

        setFound('')
        urlRef.current.value = ''
        searchInput.focus()
    }

    return (
        <div className="page-search">
            <div className="page-search__inner row row--lg center padding-t-xl padding-b-md flex-c-c">
                <h1 className="title focus-in-expand">Zadejte <span className="title--colored">URL adresu</span> webu</h1>
                <div className="search-bar center">
                    <input className="search-bar__input padding-h-sm"
                        type="text" ref={ urlRef } placeholder="Např. www.obchod.cz" />
                    <button className="search-bar__btn"
                        onClick={ () => searchData(urlRef.current.value) }>OVĚŘIT PRODEJCE</button>
                </div>
            </div>

            { found !== '' ?
                <div className="modal flex-c-c">
                    <div className="modal__box padding-v-lg padding-h-xl">
                        <img src={ Close } className="modal__close"
                            onClick={ handleAnother } />
                        { found === true ? 
                            <div className="modal__box__inner flex-c-c">
                                <img className="modal__icon" src={ Danger } />
                                <p className="modal__text margin-t-md">
                                    Web { urlRef.current.value } je <br />
                                    <strong className="dangerous">nebezpečný!</strong>
                                </p>
                                <button className="button button--colored margin-t-md"
                                    onClick={ handleAnother }>OVĚŘIT DALŠÍ</button>
                            </div> :
                            <div className="modal__box__inner flex-c-c">
                                <img className="modal__icon" src={ Safe } />
                                <p className="modal__text margin-t-md">
                                    Web { urlRef.current.value } je <br />
                                    <strong className="safe">bezpečný.</strong>
                                </p>
                                <button className="button button--colored margin-t-md"
                                    onClick={ handleAnother }>OVĚŘIT DALŠÍ</button>
                            </div>
                        }
                    </div>
                </div>
            : '' }

            { loading === true ?
                <div className="modal flex-c-c">
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                    <p className="loading-text">Ověřování webu <strong className="text-highlight">{ urlRef.current.value }</strong> ...</p>
                </div>
                : ''
            }
        </div>
    )
}

export default Search;