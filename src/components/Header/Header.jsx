import logo from '../../assets/logo/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import './Header.scss';
import { Link } from 'react-router-dom';
const Header = () => {

    return (
        <header className="header">
            <div className="header__logo">
            <Link to={`/`}>   
                <img src={logo} alt="logo" />
            </Link>     
            </div>
            <div className="header__wrapper">
                <div className="header__search">
                    <input className="header__search__bar" type="search" placeholder="Search" />
                </div>
                <div className="header__btn">
                <Link className="header__link"to={`/upload`}>
                    <button className="header__btn__upload">UPLOAD</button>
                </Link>
                </div>
                <div className="header__image">
                    <img className="header__image__avatar" src={avatar} alt="man" />
                </div>
             </div>    
        </header>
    );
};

export default Header;

