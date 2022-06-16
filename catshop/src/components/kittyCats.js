import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';

const CatPicture = (
    // image,
    // name,
    // price,
    // setAddedCat,
) => {
    const [cat, setCat] = useState([]);
    const [error, setError] = useState(null);
    const [catName, setCatName] = useState("");
    const [catPrice, setCatPrice] = useState("");
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
        setCat(data);
        setCatName(faker.name.firstName());
        setCatPrice(faker.commerce.price(5001,10000,2,'£'));
        } catch(error) {
        console.log(error);
        setError('Could not fetch the data');
        }
      };
     fetchData();
     // eslint-disable-next-line
      },[]);
    return (
        <div>
        {cat.map((pic)=>( 
            <div key={pic.id}>
    
                
                {/* <button onClick addToBasket></button> 
                {/* <h1>{faker.name.firstName()}</h1>
                <h2>{faker.commerce.price(5001,10000,2,'£')}</h2>
                <img src={pic.url} alt="xyz" /> 
                
                </div>)) */}
        <div className="cats">
            <img src={pic.url} alt=""/>
            <div className="catInfo">
                <h2>{catName}</h2>
                <h3>{catPrice}</h3></div></div></div>   ))}
                {/*<button onClick={(setAddedCat([name,price]))}>Add to basket</button>*/}
                
            
        </div>
);}

export default CatPicture;

