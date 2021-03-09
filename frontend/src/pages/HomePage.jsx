import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Products from '../components/Products/Products';
import Sort from '../components/Sort/Sort';
export default function HomePage() {
	return (
		<React.Fragment>
			<Header />
			<Sort />
			<Products />
			<Footer />
		</React.Fragment>
	);
}
