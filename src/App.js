import './App.css';
import React, { useMemo, useState, useEffect } from 'react';
import Modal from './components/Modal';
import CatPicture from './components/kittyCats';
import cat from './components/images/exampleCat.jpg';
import image from './components/images/droneBanner.png';

const App = () => {
    const [show, setShow] = useState(false);
    const [basket, setBasket] = useState([]);
    let basketTotal = 0;
    for(let i=0;i<basket.length;i++){
        basketTotal += parseInt(basket[i][1].slice(1));
    }

    return(
    <div className="App">
            <div className='aboutMainContainer'>
    <div className='droneAndTextContainer'>
    <div className='dronePictureContainer'>
        <img className='drone' src={image} alt="drone"/>
    </div>
    <div className='communityTextContainer'>
    <h2>Community. Pawsitivity. Kitties</h2>
    <p>Here At The Kitten Exchange We Are Here For You And All Your Feline Needs. Whether It’s A Fluffy Kitty<br/>Or Smooth Kitty, A Grumpy Kitty Or Cheery Kitty – We Are Here For You. Whilst Offering Many Other<br/> Services (Kitty TV, Kitty VR, PocketKitti) Our Primary Responsibility Is Delivering Your Chosen Kitty With<br/> The Immediacy We All Know, Love And Expect In These Modern Times. For Even Quicky Delivery Be Sure<br/> To Subscribe As A Prime Kitty Member.</p>
    </div>
    </div>
    <div className='aboutMiddleContainer'>
    </div>
    <div className='catAndTextContainer'>
    <div className='purrfectTextContainer'>
        <h2>The Purrfect Kitty For You</h2>
        <p>All Our Kitties Are Vat Grown From Amino Acids Through Bulk Extraction From Protein Hydrolysates <br/>To Ensure You Have The Most Optimised Kitty Possible To Suit Your Every Day Needs. Supercharged By K2<br/>Our Models Brings Exceptional Speed And Boops. Boops Anywhere... At Home And At Work</p>
    </div>
    <div className='catPictureContainer'>
    <img className='meow'  src={cat} alt="catCode"/>
    </div>
    </div>
</div>
        <div>
            <CatPicture  setBasket={setBasket} basket={basket}  />
</div>
<div>
            <CatPicture  setBasket={setBasket} basket={basket} />
</div>
<div>
            <CatPicture  setBasket={setBasket} basket={basket}  />
        </div>

      <button onClick={() => setShow(true) }>Basket</button>
      <Modal title="Shopping Basket" onClose={() => setShow(false)} show={show}>
      <p>{basket}</p>
      <p>total price: {basketTotal}</p>
      </Modal>
</div>
    )}

export default App;
