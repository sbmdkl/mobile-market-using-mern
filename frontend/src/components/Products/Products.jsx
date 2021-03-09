import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchProducts } from '../../redux/actions';
import Product from '../Product/Product';
import styles from './Products.module.css';
const data = require('../../utils/MockAPI.json');
function Products(props) {
	useEffect(() => {
		axios.get('/api/mobiles').then((res) => {
			props.fetchProducts(res.data);
		});
	}, []);
	const renderProducts = () => {
		let ps = [ ...props.products ];
		if (props.sortBy === 'priceLowToHigh') {
			ps = ps.sort((a, b) => a.price - b.price);
		} else if (props.sortBy === 'priceHighToLow') {
			console.log('high');
			ps = ps.sort((a, b) => b.price - a.price);
		} else {
			ps = [ ...props.products ];
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
			<div className={`row ${styles['products']}`}>{!!props.products.length && renderProducts()}</div>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	searchText: state.home.searchText,
	sortBy: state.home.sortBy,
	products: state.products
});

const mapDispatchToProps = {
	fetchProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
