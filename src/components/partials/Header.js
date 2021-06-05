import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/WO.svg';

const Header = () => {
    const [size, setSize] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })

    const [menuToggle, setMenuToggle] = useState(false)

    const [menuItems, setMenuItems] = useState([
        {
            link: '/o-overovaci',
            desc: 'O stránce Web ověřovač',
            button: false
        },
        {
            link: '/rizikove-weby',
            desc: 'Seznam rizikových webů',
            button: false
        },
        {
            link: '/overit-web',
            desc: 'OVĚŘIT PRODEJCE',
            button: true
        },
    ])

    useEffect(() => {
        window.addEventListener('resize', () => {
            setSize({
                height: window.innerHeight,
                width: window.innerWidth
            })
            console.log(size)
        })
    })

    const renderMenu = () => {
        return (
            <ul className="navigation__menu">
                {
                    menuItems.map(item => (
                        <li className="navigation__item" key={ item.link }>
                            <Link to={ item.link }
                                className={ item.button ? 'button button--colored' : 'navigation__link' }
                                onClick={ () => setMenuToggle(!menuToggle) }>{ item.desc }</Link>
                        </li>
                    ))
                }
            </ul>
        )
    }

    return (
        <nav className="navigation">
            <div className="navigation__inner row row--lg center flex-c-sb padding-v-xs">
                <a href="#">
                    <img className="navigation__logo" src={ Logo } />                    
                </a>

                { size.width >= 1060 ? 
                    renderMenu()
                : menuToggle === true ? renderMenu() : '' }

                { size.width <= 1060 ? 
                    <div className={ menuToggle ? 'burger burger--active' : 'burger' }
                        onClick={ () => setMenuToggle(!menuToggle) }></div>
                : '' }
            </div>
        </nav>
    )
}

export default Header;