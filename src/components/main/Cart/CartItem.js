import React from 'react'

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        {props.itemname}
        {props.price}
      </div>
      <div className="cart-item-button-container">
        <div className="cart-item-quantity-buttons">
          <button name="inc" onClick={props.handleClick}>+</button>
          {props.quantity}
          <button name="dec" onClick={props.handleClick}>-</button>
        </div>
        <button name="remove" onClick={props.handleClick}>Remove</button>
      </div>
    </div>
  )
}

export default CartItem
