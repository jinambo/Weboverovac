import { Link } from 'react-router-dom';
import Logo from '../../assets/WO.svg';

const header = () => {
    return (
        <nav className="navigation">
            <div className="row row--lg center navigation__inner flex-c-sb padding-v-xs">
                <a href="#">
                    <img className="navigation__logo" src={ Logo } />                    
                </a>
                <ul className="navigation__menu">
                    <li className="navigation__item"><Link to="/o-overovaci" className="navigation__link">O stránce web ověřovač</Link></li>
                    <li className="navigation__item"><Link to="/rizikove-weby" className="navigation__link">Seznam rizikových webů</Link></li>
                    <li className="navigation__item"><Link to="/overit-web" className="button button--colored">OVĚŘIT PRODEJCE</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default header;