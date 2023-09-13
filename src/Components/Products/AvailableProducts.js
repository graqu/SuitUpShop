import { useState, useEffect } from 'react';
import Card from '../UI/Card';
import ProductCard from './ProductCard';
import styles from './AvailableProducts.module.css';
import SortItem from './SortItem';

const AvailableProducts = () => {
	const [productsToshow, setProductsToShow] = useState([]);

	// FETCHING PRODUCTS DATA

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const response = await fetch(
				'https://suitup-shop-default-rtdb.firebaseio.com/Suits.json'
			);
			const data = await response.json();

			const arr = [];

			for (const key in data) {
				arr.push({
					id: key,
					name: data[key].name,
					picture: data[key].picture,
					price: data[key].price,
					availableAmount: data[key].availableAmount,
					description: data[key].description,
				});
			}
			console.log(arr);
			setProductsToShow(arr);
		} catch (error) {
			setIsError(true);
		}

		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	///SORTING & FILTER LOGIC
	const handleSorting = (e) => {
		const operationType = e.target.value;
		let sortedArray;

		switch (operationType) {
			case 'az':
				sortedArray = [].concat(productsToshow).sort((a, b) => {
					if (a.name < b.name) {
						return -1;
					}
				});
				setProductsToShow(sortedArray);
				break;
			case 'za':
				sortedArray = [].concat(productsToshow).sort((a, b) => {
					if (a.name > b.name) {
						return -1;
					}
				});
				setProductsToShow(sortedArray);
				break;
			case 'priceIncrease':
				sortedArray = []
					.concat(productsToshow)
					.sort((a, b) => a.price - b.price);
				setProductsToShow(sortedArray);

				break;
			case 'priceDecrease':
				sortedArray = []
					.concat(productsToshow)
					.sort((a, b) => b.price - a.price);
				setProductsToShow(sortedArray);
				break;
			default:
				console.log('no choice');
		}
	};

	const handleFilterLogic = (e) => {
		const isTrue = e.target.checked;
		let filteredArray = PRODUCTS_DATA;
		if (isTrue) {
			filteredArray = productsToshow.filter((item) => item.availableAmount > 0);
		}
		setProductsToShow(filteredArray);
	};

	// MANGING PRODUCTS TO SHOW

	const Products = productsToshow.map((product) => (
		<ProductCard
			template={false}
			data={product}
			key={product.id + Math.random()}
			id={product.id}
		/>
	));

	// RETURN JSX

	return (
		<section className={styles.suits}>
			<Card>
				<SortItem onChange={handleSorting} onFilterChange={handleFilterLogic} />
				<div className={styles['products-list']}>
					{isLoading &&
						!isError &&
						[1, 2, 3].map((item) => (
							<ProductCard template={true} data={{}} key={Math.random()} />
						))}
					{!isLoading && !isError && Products}
				</div>
			</Card>
		</section>
	);
};

export default AvailableProducts;
