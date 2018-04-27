import React from 'react'

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <p>Item: {props.itemname}</p>
        <p>Type: {props.type}</p>
        <p>Price: ${(props.price / 100).toFixed(2)}</p>
      </div>
      <div className="cart-item-button-container">
        <div className="item-quantity-container">
          <button
            name="inc"
            value={props._id}
            onClick={props.handleClick}
          >
            +
          </button>
          <p className="item-quantity">{props.quantity}</p>
          <button
            name="dec"
            value={props._id}
            onClick={props.handleClick}
          >
            -
          </button>
        </div>
        <button name="remove" value={props._id} onClick={props.handleClick}>Remove</button>
      </div>
    </div>
  )
}

export default CartItem
