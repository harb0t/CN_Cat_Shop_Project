import './App.css';
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';

const App = () => {
    const [cat, setCat] = useState([]);
    const [error, setError] = useState(null);
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
      <h1>The Kitty Exchange</h1>
        {error && <p>{error}</p>}
        {cat.map((pic)=>( 
        <div key={pic.id}>
            <img src={pic.url} alt="xyz" />
            </div>))}
            <Footer/>
    </div>
    )}

export default App;