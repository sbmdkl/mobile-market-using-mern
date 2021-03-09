import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import styles from './Cart.module.css';

function Cart(props) {
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	const [ showCart, setShowCart ] = useState(false);
	const cartRef = useRef();
	const dropDownRef = useRef();
	const handleClickOutside = (event) => {
		if (dropDownRef.current) {
			if (!dropDownRef.current.contains(event.target)) {
				setShowCart(false);
			} else {
			}
		}
	};
	const renderCarts = () => {
		return props.carts.map((cart) => {
			return (
				<div className={`${styles['cartItem']}`}>
					<div className={`${styles['cartItemName']}`}>
						<p>Iphone</p>
						<button className='btn btn-sm btn-danger'>X</button>
					</div>
					<div>
						<p>Quantity 1</p>
						<p>price Rs.100</p>
						<p>total Rs.100</p>
					</div>
					<hr />
				</div>
			);
		});
	};
	return (
		<React.Fragment>
			<div className={styles['cart']}>
				<div ref={cartRef} onClick={() => setShowCart(true)}>
					<i className='fas fa-shopping-cart' />
					Cart ({props.carts.length})
				</div>
				{showCart && (
					<div ref={dropDownRef} className={`${styles['cartDropdown']}`}>
						{!!props.carts && renderCarts()}
					</div>
				)}
			</div>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	carts: state.carts
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
