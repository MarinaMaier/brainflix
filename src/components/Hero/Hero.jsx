// import logo from '../../assets/logo/BrainFlix-logo.svg';
// import avatar from '../../assets/Images/Mohan-muruge.jpg';
import heroVideo from "../../assets/Images/Upload-video-preview.jpg";
import './Hero.scss';
const Hero = () => {
    return (
        <div className="hero">
            <video className="hero__video" width="100%" height="240" controls poster={heroVideo} >
                <source src={heroVideo} type="video/mp4" />
            </video>
        </div>
    );      
};
export default Hero;