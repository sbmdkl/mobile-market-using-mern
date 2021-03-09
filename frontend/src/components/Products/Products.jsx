import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import styles from './Products.module.css';
const data = require('../../utils/MockAPI.json');
function Products(props) {
	const [ products, setProducts ] = useState(data);
	const renderProducts = () => {
		let ps = [ ...products ];
		if (props.sortBy === 'priceLowToHigh') {
			ps = ps.sort((a, b) => a.price - b.price);
		} else if (props.sortBy === 'priceHighToLow') {
			console.log('high');
			ps = ps.sort((a, b) => b.price - a.price);
		} else {
			ps = [ ...products ];
		}
		return ps
			.filter((product) => product.name.toLowerCase().includes(props.searchText.toLowerCase()))
			.map((product, i) => {
				return (
					<div key={i} className='col-md-4'>
						<Product product={product} />
					</div>
				);
			});
	};
	return (
		<React.Fragment>
			<div className={`row ${styles['products']}`}>{!!products.length && renderProducts()}</div>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	searchText: state.home.searchText,
	sortBy: state.home.sortBy
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
