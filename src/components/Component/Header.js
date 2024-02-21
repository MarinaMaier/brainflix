import logo from '../../assets/logo/BrainFlix-logo.svg';
import imgIcon from '../../assets/Images/Mohan-muruge.jpg';
import './component.scss';
const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header__wrapper">
                <div className="header__search">
                    <input className="header__search__bar" type="search" placeholder="Search" />
                </div>
                <div className="header__image">
                    <img className="header__image__man" src={imgIcon} alt="man" />
                </div>
             </div>    
            <div className="header__btn">
                <button className="header__btn__upload">UPLOAD</button>
            </div>
        </header>
    );
};

export default Header;

