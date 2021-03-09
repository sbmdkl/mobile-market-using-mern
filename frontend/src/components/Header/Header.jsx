import React from 'react';
import Cart from '../Cart/Cart';
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
						<Cart />
					</div>
				</nav>
			</div>
		</div>
	);
}
