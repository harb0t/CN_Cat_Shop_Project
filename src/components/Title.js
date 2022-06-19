import './Title.css';
import catDrone from './droneCatVector.png';
import kidVector from './kidVector.png'

const Title = () => {
    return (
    <div className='titleWithPics'>
        <div id="pre-ribbon">content</div>
        <div id="top-ribbon">
            <div id="tp-rib-left"></div>
            <div id="tp-rib-right"></div>
        </div>
        <div id="white-banner">
            <div id="left-panel"></div>
            <div id="drone-panel">
                <img className='catDrone' src={catDrone} alt="catDrone"/>
                <div id="drone-botm"></div>
            </div>
            <div id="title-panel">
                <h1>THE KITTY<br></br>EXCHANGE</h1>
            </div>
            <div id="kid-panel">
                <div id="kid-top"></div>
                <img className='kidVector' src={kidVector} alt="kidVector"/><br/>
            </div>
            <div id="right-panel"></div>
        </div>
        <div id="mid-ribbon">
            <div id="mid-rib-left"></div>
            <div id="mid-rib-right"></div>
        </div>
        <div id="botm-ribbon">
            Vat Grown Kitties To Your Doorstep
        </div>
    </div>
    );
}

export default Title;
