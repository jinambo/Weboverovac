import React, { useState } from 'react'

import HistoryIcon from '../../assets/history.png'
import CloseIcon from '../../assets/close.svg';

const History = (props) => {
    const [toggleHistory, setToggleHistory] = useState(false)

    return (
        <div className="history">
            <div className="history__icon flex-c-c"
                onClick={ () => setToggleHistory(true) }>
                <img src={ HistoryIcon } />
            </div>

            { toggleHistory ?  
                <div className="history__inner scale-in-right">
                    <div className="history__bar flex-c-sb padding-h-sm padding-v-xs">
                        <p>Historie</p>
                        <img className="history__bar-icon" src={ CloseIcon }
                            onClick={ () => setToggleHistory(false) } />
                    </div>
                    <ul className="history__content">
                        { 
                            props.history.map(item => (
                                <li className="history__item flex-c-sb padding-h-sm padding-v-xs" key={ item.item }>
                                    <p>{ item.type === 'safe' ? 'BEZPEČNÉ' : 'NEBEZPEČNÉ' }</p>
                                    <b style={ item.type === 'dangerous' ? { color: '#EF414E' } : { color: '#21B876' } }>{ item.item }</b>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            : '' }
        </div>
    )
}

export default History