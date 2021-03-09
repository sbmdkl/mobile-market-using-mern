import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import styles from './Products.module.css';
const data = require('../../utils/MockAPI.json');
export default function Products() {
	const [ products, setProducts ] = useState(data);
	const renderProducts = () => {
		return products.map((product, i) => {
			return (
				<div key={i} className='col-md-4'>
					<Product name={product.name} price={product.price} stock={product.stock} image={product.image} />
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
