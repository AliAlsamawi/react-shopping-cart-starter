// import useState
import React, { useState } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import Form from './components/Form';
import productsArr from './products';


export default function App() {
  const [products] = useState(productsArr);
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart( [...cart, item] )
  };

  const removeFromCart = index => {
    const cartArr = cart.filter( (d,i) => i !== index )
    setCart(cartArr)
  };
  // create an addToCart function that takes in a product as a param
  // using the ...spread operator add the product to the cart array

  // create an removeFromCart function that takes in an index as a param
  // using Array.filter remove create a new array where that item is removed

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form />
      <div className="products">
        <AllTheThings products={products} handleClick={addToCart} />
      <MyShoppingCart cart={cart} handleClick={removeFromCart} />
      </div>
    </div>
  );
}