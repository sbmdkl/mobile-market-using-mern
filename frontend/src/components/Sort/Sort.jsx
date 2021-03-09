import React from 'react';
import { connect } from 'react-redux';
import { sortByPrice } from '../../redux/actions';
import styles from './Sort.module.css';
function Sort(props) {
	return (
		<div className={styles['sort']}>
			<p>Sort By:</p>
			<select onChange={(e) => props.sortByPrice(e.target.value)} name='' id=''>
				<option value='priceBestMatch'>Best Match</option>
				<option value='priceLowToHigh'>Price low to high</option>
				<option value='priceHighToLow'>Price high to low</option>
			</select>
		</div>
	);
}

const mapDispatchToProps = {
	sortByPrice
};
export default connect(null, mapDispatchToProps)(Sort);
