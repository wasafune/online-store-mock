import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ItemBox = (props) => {
  const currPath = `/products/${props.itemname}`.split(' ').join('_')
  const itemObj = {
    _id: props._id,
    itemname: props.itemname,
    price: props.price,
  }
  return (
    <div className="item-box">
      <Link
        href={currPath}
        to={currPath}
        name="item-box"
        onClick={(e) => {
          props.handleClick(e, itemObj)
        }}
      >
        {props.itemname}
        <br />
        {props.price}
      </Link>
    </div>
  )
}

ItemBox.propTypes = {
  _id: PropTypes.string.isRequired,
  itemname: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default ItemBox
