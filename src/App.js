import React, { useState } from 'react';
import Header from './Components/Layout/Header';
import Cart from './Components/Cart/Cart';
import Products from './Components/Products/Products';
import OrderProvider from './store/OrderProvider';
import Footer from './Components/Footer/Footer';
import ProductDescription from './Components/ProductDescription/ProductDescription';
import { ProductsData } from './store/ProductsData';

function App() {
	const [cartOpen, setCartOpen] = useState(false);

	const toggleCartHandler = () => {
		const currState = cartOpen;
		setCartOpen(!currState);
	};

	return (
		<OrderProvider>
			{cartOpen && <Cart onCloseFn={toggleCartHandler} />}
			{/* <ProductDescription /> */}
			<Header onOpenCart={toggleCartHandler}></Header>
			<Products />
			<ProductsData />
			<Footer />
		</OrderProvider>
	);
}

export default App;
