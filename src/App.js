import './App.css';
import React, { useMemo, useState, useEffect } from 'react';
import Modal from './components/Modal';
import CatPicture from './components/kittyCats';
import Container from './components/Container';
import Header from './components/Header';
import Title from './components/Title';
import BasketPic from './components/whiteFullBasket.png';


const App = () => {
    const [show, setShow] = useState(false);
    const [basket, setBasket] = useState([]);
    let basketTotal = 0;
    for(let i=0;i<basket.length;i++){
        basketTotal += parseInt(basket[i][1].slice(1));
    }

    return(
    <div className="App">
        <div className = "mainContainer">

        <div>
      <Header/>
            <div className = "navBar">
            <div className = "basketButtonPositioning">
            <button className='basketButton' onClick={() => setShow(true) }><img className='basketCatButton' src={BasketPic}/></button>
            <Modal title="Shopping Basket" onClose={() => setShow(false)} show={show}>
            <p>{basket}</p>
            <p>total price: {basketTotal}</p>
            </Modal>
            </div>
            </div>
      <Title/>
      <div className = "aboutSection">
      <Container />
      </div>
        </div>


        <div className = "moduleFlexContainer">
        
        <div className = "moduleBorder">
            <CatPicture  setBasket={setBasket} basket={basket}  />
            </div>

            <div className = "moduleBorder">
            <CatPicture  setBasket={setBasket} basket={basket} />
            </div>

            <div className = "moduleBorder">
            <CatPicture  setBasket={setBasket} basket={basket}  />
            </div>

            <div className = "moduleBorder">
            <CatPicture  setBasket={setBasket} basket={basket}  />
            </div>

            <div className = "moduleBorder">
            <CatPicture  setBasket={setBasket} basket={basket}  />
            </div>

            <div className = "moduleBorder">
            <CatPicture  setBasket={setBasket} basket={basket}  />
            </div>

            <div className = "moduleBorder">
            <CatPicture  setBasket={setBasket} basket={basket}  />
            </div>

            <div className = "moduleBorder">
            <CatPicture  setBasket={setBasket} basket={basket}  />
            </div>










        </div>

    </div>


</div>
    )}

export default App;
