import React from 'react';
import Hero from '../components/hero/Hero.js';
import NewCollections from '../components/new_collections/NewCollections.js';
import NewsLetter from '../components/news_letter/NewsLetter.js';
import Offers from '../components/offers/Offers.js';
import Popular from '../components/popular/Popular.js';

const Shop = () => {
	return (
		<div>
			<Hero />
			<Popular />
			<Offers />
			<NewCollections />
			<NewsLetter />
		</div>
	);
};

export default Shop;
