import './App.css';
import React, { useState, useEffect } from 'react';
import Modal from './components/Modal';
import { faker } from '@faker-js/faker';

const App = () => {
    const [cat, setCat] = useState([]);
    const [error, setError] = useState(null);
    const [show, setShow] = useState(false);
    useEffect(() => {
  
        const fetchData = async () => { try{
        const response = await fetch("https://api.thecatapi.com/v1/images/search" ,{headers: {
                "x-api-key":"e32dd654-b737-4256-bfc1-14d1e95d7349"
            }
        });
        console.log(response);
        if(!response.ok){
        throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
        setCat(data);
        console.log(data);
        } catch(error) {
        console.log(error);
        setError('Could not fetch the data');
        }
      };
     fetchData();
     // eslint-disable-next-line
      },[]);

    return(
    <div className="App">
        <div>
        {error && <p>{error}</p>}
        {cat.map((pic)=>( 
        <div key={pic.id}>
            <h1>{faker.name.firstName()}</h1>
            <h2>{faker.commerce.price(5001,10000,2,'£')}</h2>
            <img src={pic.url} alt="xyz" />
            </div>))}
    </div>

<div className='App'>
      <button onClick={() => setShow(true) }>Basket</button>
      <Modal title="Shopping Basket" onClose={() => setShow(false)} show={show}>
      <p>cat content</p>
      </Modal>
</div>
</div>
    )}

    

export default App;
