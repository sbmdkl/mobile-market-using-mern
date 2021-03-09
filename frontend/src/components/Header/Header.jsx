import React from 'react';
import styles from './Header.module.css';
export default function Header() {
	return (
		<div>
			<div>
				<nav className='container mt-2'>
					<div className={styles['navbarContainer']}>
						<div className={styles['navbarBrand']}>
							<a href='#'>Store</a>
							<input type='text' className={styles['searchBar']} placeholder='Search Mobiles' />
						</div>
						<div className={styles['cart']}>
							<i className='fas fa-shopping-cart' />
							Cart (0)
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}
