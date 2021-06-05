import React, { useState, useEffect, useRef } from 'react'

import Close from '../assets/close.svg';
import Danger from '../assets/danger.svg';
import Safe from '../assets/safe.svg';

const Search = () => {
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
        
        let looped = false
        let skip = 0

        let item = itemToFind.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]

        setLoading(true)

        while (looped !== true) {
            await fetch('https://api.apitalks.store/coi/rizikove-weby?filter=%7B%22limit%22:30,%22skip%22:' + skip + '%7D', options)
            .then(res => res.json())
            .then(data => {
                data.data.forEach(web => {
                  //console.log('comparing ' + web.rizikove + ' with ' + item)
                  if (web.rizikove === item) {
                      setFound(true)
                      looped = true
                      console.error('web was found')
                  }  
                })

                if (data.count === 0) {
                    setFound(false)
                    looped = true
                }
            })

            console.log(looped)
            skip += 30;
        }
        setLoading(false)
    }

    const handleAnother = () => {
        const searchInput = document.querySelector('.search-bar__input')

        setFound('')
        urlRef.current.value = ''
        searchInput.focus()
    }

    return (
        <div className="page-search">
            <div className="page-search__inner row row--lg center padding-v-xl flex-c-c">
                <h1 className="title">Zadejte <span className="title--colored">URL adresu</span> webu</h1>
                <div className="search-bar center">
                    <input className="search-bar__input padding-h-sm"
                        type="text" ref={ urlRef } placeholder="Např. www.podezrely-obchod.cz" />
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
                </div>
                : ''
            }
        </div>
    )
}

export default Search;