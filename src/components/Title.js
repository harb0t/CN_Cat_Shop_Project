import './Title.css';
import catDrone from './components/images/droneCatVector.png';
import kidVector from './components/images/kidVector.png'

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