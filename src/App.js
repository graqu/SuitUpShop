import React, { useState } from 'react';
import Header from './Components/Layout/Header';
import Cart from './Components/Cart/Cart';
import Products from './Components/Products/Products';
import OrderProvider from './store/OrderProvider';
import Footer from './Components/Footer/Footer';

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

			<Footer />
		</OrderProvider>
	);
}

export default App;
