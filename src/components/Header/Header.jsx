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
                    <input className="header__bar" id="search" type="search" placeholder="Search" />
                <div className="header__btn">
                <Link className="header__link"to={`/upload`}>
                    <button className="header__btn__upload">UPLOAD</button>
                </Link>
                </div>
                    <img className="header__avatar" src={avatar} alt="man" />
             </div>    
        </header>
    );
};

export default Header;

