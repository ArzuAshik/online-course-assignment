import React from 'react';
import AddedCourse from '../AddedCourse/AddedCourse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    return (
        <div>
            <h1>Cart Details</h1>
            <h5>Course Added: {cart.length}</h5>
            {
                cart.map(data => <AddedCourse key={data.id} data={data}></AddedCourse>)
            }
            <h4 style={{borderTop: '2px solid gray'}}>Total Price: <strong>${Math.ceil(totalPrice)}</strong></h4>
            <button className="btn btn-warning"> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Checkout</button>
        </div>
    );
};

export default Cart;