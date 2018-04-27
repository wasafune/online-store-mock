import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ItemBox = (props) => {
  const currPath = `/products/${props.itemname}`.split(' ').join('_')
  const itemObj = {
    itemname: props.itemname,
    _id: props.variants[0]._id,
    price: props.variants[0].price,
    type: props.variants[0].type,
    variants: props.variants,
  }
  return (
    <div className="item-box">
      <Link
        className="item-box-link-container"
        href={currPath}
        to={currPath}
        onClick={e => props.handleClick(e, itemObj)}
      >
        <img
          className="item-img"
          src="https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C240-128.png"
          alt="item-pic"
        />
        {props.itemname}
      </Link>
    </div>
  )
}

const variantShape = {
  type: PropTypes.string,
  price: PropTypes.number,
}

ItemBox.propTypes = {
  _id: PropTypes.string.isRequired,
  itemname: PropTypes.string.isRequired,
  variants: PropTypes.arrayOf(PropTypes.shape(variantShape)).isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default ItemBox
