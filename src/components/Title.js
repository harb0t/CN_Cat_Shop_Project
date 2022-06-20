import './Title.css';
import catDrone from './droneCatVector.png';
import kidVector from './kidVector.png'

const Title = () => {
    return (
    <div className='titleWithPics'>
        <div className="pre-ribbon">content</div>
        <div className="top-ribbon">
            <div className="tp-rib-left"></div>
            <div className="tp-rib-right"></div>
        </div>
        <div className="white-banner">
            <div className="left-panel"></div>
            <div className="drone-panel">
                <img className='catDrone' src={catDrone} alt="catDrone"/>
                <div className="drone-botm"></div>
            </div>
            <div className="title-panel">
                <h1>THE KITTY<br></br>EXCHANGE</h1>
            </div>
            <div className="kid-panel">
                <div className="kid-top"></div>
                <img className='kidVector' src={kidVector} alt="kidVector"/><br/>
            </div>
            <div className="right-panel"></div>
        </div>
        <div className="mid-ribbon">
            <div className="mid-rib-left"></div>
            <div className="mid-rib-right"></div>
        </div>
        <div className="botm-ribbon">
            Vat Grown Kitties To Your Doorstep
        </div>
    </div>
    );
}

export default Title;
