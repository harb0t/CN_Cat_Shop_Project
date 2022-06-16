import './App.css';
import React, { useState, useEffect } from 'react';
// import Footer from './components/Footer';
import Modal from './components/Modal';
import { faker } from '@faker-js/faker';
import CatPicture from './components/kittyCats';

const App = () => {
    // const [cat, setCat] = useState([]);
    // const [error, setError] = useState(null);
    const [show, setShow] = useState(false);
    const [basket, setBasket] = useState([]);
    const [addedCat, setAddedCat] = useState([]);
    const [catName, setCatName] = useState("");
    const [catPrice, setCatPrice] = useState(0);

    const addToBasket = (x) => {
        x.preventDefault();
        setBasket([...basket, addedCat]);
        setAddedCat([]);
    }

    // useEffect(() => {
  
    //     const fetchData = async () => { try{
    //     const response = await fetch("https://api.thecatapi.com/v1/images/search" ,{headers: {
    //             "x-api-key":"e32dd654-b737-4256-bfc1-14d1e95d7349"
    //         }
    //     });
    //     console.log(response);
    //     if(!response.ok){
    //     throw new Error(response.statusText);
    //     }
    //     const data = await response.json();
    //     setCat(data);
    //     } catch(error) {
    //     console.log(error);
    //     setError('Could not fetch the data');
    //     }
    //   };
    //  fetchData();
    //  // eslint-disable-next-line
    //   },[]);

    return(
    <div className="App">
        <div>
            <CatPicture />
            <CatPicture />
            <CatPicture />
        {/*error && <p>{error}</p>}
        
        {cat.map((pic)=>( 
        <div key={pic.id}>

            <CatPicture name={faker.name.firstName()} image={pic.url} price={faker.commerce.price(5001,10000,2,'£')} addedCat={addedCat} setAddedCat={setAddedCat} />
            <button onClick addToBasket></button> 
            {/* <h1>{faker.name.firstName()}</h1>
            <h2>{faker.commerce.price(5001,10000,2,'£')}</h2>
        <img src={pic.url} alt="xyz" /> */}
            
            {/*</div>))} */}

            
    </div>

      <button onClick={() => setShow(true) }>Basket</button>
      <Modal title="Shopping Basket" onClose={() => setShow(false)} show={show}>
      <p>cat content</p>
      </Modal>
</div>
    )}

    

export default App;
