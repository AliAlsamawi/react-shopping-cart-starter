import React from 'react';


function MyShoppingCart(props) {

  let things = props.cart.map((d, i) => {
    return (
      <li key={i} onClick={() => props.handleClick(i)}>
        {d.name} {d.price}
      </li>
    );
  });

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      <ul>
        {things}
      </ul>
    </div>
  );
}

export default MyShoppingCart;