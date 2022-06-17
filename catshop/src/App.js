import './App.css';
import kittyPic from './components/images/exampleCat.png';

const App = () => {
    
return (

<div className = "mainModuleContainer">

    <div>
    <img className = "catModulePic" src={kittyPic}/>
    </div>

    <div className = "catModuleTextBox">
        <div>
            <p className = "catName">Name</p>
        </div>
        <div>
            <p>Age:</p>
            <p>Price:</p>
        </div>
    <div>
        <button className = "purrchaseKittyButton">PURRCHASE KITTY</button>
    </div>
    


    </div>



</div>);
};

export default App; 













/* _____________ */
/* ABOUT JS 1634.160622 */
/* _____________ */
// import './App.css';
// import image from './components/images/droneBanner.png';
// import cat from './components/images/catBanner.png';


// const App = () => {
//   return ( 
//     <div className='aboutMainContainer'>

//       <div className='droneAndTextContainer'>

//         <div className='dronePictureContainer'>
//           <img className='drone' src={image} alt="drone"/>
//         </div>
        
//         <div class='communityTextContainer'>
//         <h2>Community. Pawsitivity. Kitties</h2>
//         <p>Here At The Kitten Exchange We Are Here For You And All Your Feline Needs. Whether It’s A Fluffy Kitty<br/>Or Smooth Kitty, A Grumpy Kitty Or Cheery Kitty – We Are Here For You. Whilst Offering Many Other<br/> Services (Kitty TV, Kitty VR, PocketKitti) Our Primary Responsibility Is Delivering Your Chosen Kitty With<br/> The Immediacy We All Know, Love And Expect In These Modern Times. For Even Quicky Delivery Be Sure<br/> To Subscribe As A Prime Kitty Member.</p>
//         </div>

//       </div>

//       <div class='aboutMiddleContainer'>

//       </div>


//       <div className='catAndTextContainer'>
//         <div className='purrfectTextContainer'>
//           <h2>The Purrfect Kitty For You</h2>
//           <p>All Our Kitties Are Vat Grown From Amino Acids Through Bulk Extraction From Protein Hydrolysates <br/>To Ensure You Have The Most Optimised Kitty Possible To Suit Your Every Day Needs. Supercharged By K2<br/>Our Models Brings Exceptional Speed And Boops. Boops Anywhere... At Home And At Work</p>
//         </div>
//         <div className='catPictureContainer'>
//         <img className='meow'  src={cat} alt="catCode"/>
//         </div>
//       </div>

//     </div>

//   );
// }

// export default App; 