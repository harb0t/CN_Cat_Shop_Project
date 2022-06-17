import './App.css';
import React, { useMemo, useState, useEffect } from 'react';
import Modal from './components/Modal';
import { faker } from '@faker-js/faker';
import CatPicture from './components/kittyCats';

const App = () => {
    const [show, setShow] = useState(false);
    const [basket, setBasket] = useState([]);
    const [addedCat, setAddedCat] = useState([]);
    // const updateBasket = () => {setAddedCat([y,z]);setBasket([...basket, addedCat]);setAddedCat(["",""]);}
    // const showTheBasket = (x) => {return(<p>{x}</p>)}
    // const showBasket = useMemo(() => showTheBasket(basket),[basket]);


    useEffect(() => {

    })

    return(
    <div className="App">
        <div>
            <CatPicture  setBasket={setBasket} basket={basket} />
            <CatPicture  setBasket={setBasket} basket={basket} />
            <CatPicture  setBasket={setBasket} basket={basket} />

        
    </div>

      <button onClick={() => setShow(true) }>Basket</button>
      <Modal title="Shopping Basket" onClose={() => setShow(false)} show={show}>
      <p>{basket}</p>
      </Modal>
</div>
    )}

    

export default App;
