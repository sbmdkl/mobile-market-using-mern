import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { removeProductFromCart, increaseProductQuantity } from '../../redux/actions';
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
	const handleRemoveProduct = (product) => {
		props.removeProductFromCart(product.id);
		props.increaseProductQuantity(product.id, product.quantity);
	};
	const renderCarts = () => {
		return props.carts.map((product, i) => {
			return (
				<div key={i} className={`${styles['cartItem']}`}>
					<div className={`${styles['cartItemName']}`}>
						<p>{product.name}</p>
						<button
							onClick={() => {
								handleRemoveProduct(product);
							}}
							className='btn btn-sm btn-danger'
						>
							X
						</button>
					</div>
					<div>
						<p>Quantity {product.quantity}</p>
						<p>price Rs.{product.price}</p>
						<p>total Rs.{product.quantity * product.price}</p>
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
						{!!props.carts.length ? (
							<React.Fragment>
								{renderCarts()}
								<p>
									Total:{' '}
									{props.carts
										.reduce((acc, product) => parseFloat(acc) + parseFloat(product.quantity * product.price), [ 0 ])
										.toString()}
								</p>
							</React.Fragment>
						) : (
							<p className='text-center'>Cart is Empty</p>
						)}
					</div>
				)}
			</div>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	carts: state.carts
});

const mapDispatchToProps = {
	removeProductFromCart,
	increaseProductQuantity
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
