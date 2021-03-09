import React from 'react';
import styles from './Cart.module.css';

export default function Cart() {
	return (
		<React.Fragment>
			<div className={styles['cart']}>
				<i className='fas fa-shopping-cart' />
				Cart (0)
				<div className={`${styles['cartDropdown']}`}>
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
				</div>
			</div>
		</React.Fragment>
	);
}
