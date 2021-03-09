import React from 'react';
import styles from './Product.module.css';
export default function Product(props) {
	return (
		<div className={styles['product']}>
			<img className={styles['productImage']} src={props.image} alt='' />
			<div className={styles['section']}>
				<p className={styles['name']}>{props.name}</p>
				<p className={styles['price']}>
					<strong>Rs. {props.price}</strong>
				</p>
				<p className={styles['price']}>Available Stock: {props.stock}</p>
			</div>
			<div className={styles['addCart']}>
				<button className='btn btn-outline-secondary'>ADD TO CART</button>
			</div>
		</div>
	);
}
