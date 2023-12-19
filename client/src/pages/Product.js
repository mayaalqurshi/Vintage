import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/breadcrum/Breadcrum.js';
import ProductDisplay from '../components/product_display/ProductDisplay.js';
import RelatedProducts from '../components/related_products/RelatedProducts.js';
import { ShopContext } from '../context/ShopContext.js';

const Product = () => {
	const { all_product } = useContext(ShopContext);
	const { productID } = useParams();
	const product = all_product.find((e) => e.id === Number(productID));

	return (
		<div>
			<Breadcrum product={product} />
			<ProductDisplay product={product} />
			<RelatedProducts />
		</div>
	);
};
export default Product;
