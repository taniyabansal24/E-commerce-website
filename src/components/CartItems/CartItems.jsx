import React, { useContext } from 'react';
import 'boxicons/css/boxicons.min.css';
import { ShopContext } from '../../context/ShopContext';

const CartItems = () => {
  const {all_product,cartItems,removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
      <p>Products</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className='cartitems-format'>
                <img src={e.image} alt="" className='carticon-product-icon'/>
                <p>{e.name}</p>
                <p>₹{e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>{e.new_price * cartItems[e.id]}</p>
                <p onClick={() => removeFromCart(e.id)}><i className='bx bx-x'></i></p>
              </div>
              <hr />
            </div>
          );
        } else {
          return null; // Or any other fallback UI for items not meeting the condition
        }
      })}

    </div>
  )
}

export default CartItems
