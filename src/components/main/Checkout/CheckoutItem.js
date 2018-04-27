import React from 'react'

const CheckoutItem = (props) => {
  return (
    <div className="checkout-item-container">
      <p className="checkout-item">Item: {props.itemname}</p>
      <p className="checkout-item">Type: {props.type}</p>
      <p className="checkout-item">Quantity: {props.quantity}</p>
      <p className="checkout-item">Price: ${(props.price / 100).toFixed(2)}</p>
      <p className="checkout-item">Total Price: ${((props.price * props.quantity) / 100).toFixed(2)}</p>
    </div>
  )
}

export default CheckoutItem
