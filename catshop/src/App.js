import './App.css';
import React, { useMemo, useState, useEffect } from 'react';
// import Footer from './components/Footer';
import Modal from './components/Modal';
import { faker } from '@faker-js/faker';
import CatPicture from './components/kittyCats';

const App = () => {
    const [show, setShow] = useState(false);
    const [basket, setBasket] = useState([]);
    const [addedCat, setAddedCat] = useState([]);
    let y;let z;
    const updateBasket = () => {setAddedCat([y,z]);setBasket([...basket, addedCat]);setAddedCat(["",""]);}
    const showTheBasket = (x) => {return(<p>{x}</p>)}
    const showBasket = useMemo(() => showTheBasket(basket),[basket]);


    useEffect(() => {

    })

    return(
    <div className="App">
        <div>
            <CatPicture updateBasket={updateBasket} setAddedCat={setAddedCat} addedCat={addedCat} setBasket={setBasket} basket={basket} />
            <CatPicture updateBasket={updateBasket} setAddedCat={setAddedCat} addedCat={addedCat} setBasket={setBasket} basket={basket} />
            <CatPicture updateBasket={updateBasket} setAddedCat={setAddedCat} addedCat={addedCat} setBasket={setBasket} basket={basket} />
            {showBasket}

         {basket}
    </div>

      <button onClick={() => setShow(true) }>Basket</button>
      <Modal title="Shopping Basket" onClose={() => setShow(false)} show={show}>
      <p>cat content</p>
      </Modal>
</div>
    )}

    

export default App;
