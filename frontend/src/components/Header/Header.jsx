import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateSearchText } from '../../redux/actions';
import Cart from '../Cart/Cart';
import styles from './Header.module.css';
function Header(props) {
	return (
		<div>
			<div>
				<nav className='container mt-2'>
					<div className={styles['navbarContainer']}>
						<div className={styles['navbarBrand']}>
							<Link to='/'>Mobile Store</Link>
							<input
								onChange={(e) => props.updateSearchText(e.target.value)}
								type='text'
								className={styles['searchBar']}
								placeholder='Search Mobiles'
								defaultValue={props.searchText}
							/>
						</div>
						<Cart />
					</div>
				</nav>
			</div>
		</div>
	);
}
const mapStateToProps = (state) => ({
	searchText: state.home.searchText
});

const mapDispatchToProps = {
	updateSearchText
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
