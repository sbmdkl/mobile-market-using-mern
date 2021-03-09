import React from 'react';
import { connect } from 'react-redux';
import { addProductToCart, decreaseProductQuantity } from '../../redux/actions';
import styles from './Product.module.css';
function Product(props) {
	return (
		<div className={styles['product']}>
			<img className={styles['productImage']} src={props.product.image} alt='' />
			<div className={styles['section']}>
				<p className={styles['name']}>{props.product.name}</p>
				<p className={styles['price']}>
					<strong>Rs. {props.product.price}</strong>
				</p>
				<p className={styles['price']}>
					{props.product.stock > 0 ? `Available Stock: ${props.product.stock}` : 'Currently out of stock'}
				</p>
			</div>
			<div className={styles['addCart']}>
				<button
					onClick={() => {
						props.addProductToCart(props.product);
						props.decreaseProductQuantity(props.product.id);
					}}
					className='btn btn-outline-secondary'
					disabled={props.product.stock > 0 ? false : true}
				>
					ADD TO CART
				</button>
			</div>
		</div>
	);
}
const mapStateToProps = (state) => ({
	products: state.products
});

const mapDispatchToProps = {
	addProductToCart,
	decreaseProductQuantity
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
