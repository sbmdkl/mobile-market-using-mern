import React from 'react';
import styles from './Cart.module.css';

export default function Cart() {
	return (
		<div className={styles['cart']}>
			<i className='fas fa-shopping-cart' />
			Cart (0)
		</div>
	);
}
