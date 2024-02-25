import './Hero.scss';

function ActiveHero ({ hero }){
    const {
        image,
        video
    } = hero;
    return (
        <div className="hero">
            <video className="hero__video" width="100%" height="240" controls poster={image}>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    )
}

export default ActiveHero;