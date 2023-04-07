import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Home = () => {
    const [cart,setcart] = useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res => res.json())
        .then(data => setcart(data))
    },[])
  
    return (
        <div>
            
            <p>Lorem ipsum dolor sit amet {cart.length}</p>
        </div>
    );
};

export default Home;