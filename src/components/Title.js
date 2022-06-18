import './Title.css';
import catDrone from './droneCatVector.png';
import kidVector from './kidVector.png'

const Title = () => {
    return (
<div className='titleWithPics'>
    <img className='catDrone' src={catDrone} alt="catdrone"/>
    <h1>The Kitty<br/>Exchange</h1>
    <img className='kidVector' src={kidVector} alt="kidVector"/><br/>
    </div>
    );
}

export default Title;