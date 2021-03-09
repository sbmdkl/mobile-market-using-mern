import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Products from '../components/Products/Products';
export default function HomePage() {
	return (
		<React.Fragment>
			<Header />
			<Products />
			<Footer />
		</React.Fragment>
	);
}
