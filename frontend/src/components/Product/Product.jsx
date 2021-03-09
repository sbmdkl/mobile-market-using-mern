import React from 'react';
import { connect } from 'react-redux';
import { addProductToCart } from '../../redux/actions';
import styles from './Product.module.css';
function Product(props) {
	return (
		<div className={styles['product']}>
			<img className={styles['productImage']} src={props.product.image} alt='' />
			<div className={styles['section']}>
				<p className={styles['name']}>{props.product.name}</p>
				<p className={styles['price']}>
					<strong>Rs. {props.product.price}</strong>
				</p>
				<p className={styles['price']}>Available Stock: {props.product.stock}</p>
			</div>
			<div className={styles['addCart']}>
				<button onClick={() => props.addProductToCart(props.product)} className='btn btn-outline-secondary'>
					ADD TO CART
				</button>
			</div>
		</div>
	);
}

const mapDispatchToProps = {
	addProductToCart
};

export default connect(null, mapDispatchToProps)(Product);
