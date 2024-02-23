import logo from '../../assets/logo/BrainFlix-logo.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import './Header.scss';
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
                <div className="header__btn2">
                    <button className="header__btn2__upload2">UPLOAD</button>
                </div>
                <div className="header__image">
                    <img className="header__image__avatar" src={avatar} alt="man" />
                </div>
             </div>    
            <div className="header__btn">
                <button className="header__btn__upload">UPLOAD</button>
            </div>
        </header>
    );
};

export default Header;

