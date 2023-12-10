import React from 'react';
import data_product from '../assets/data.js';
import Item from '../item/Item.js';
import './Popular.css';

const Popular = () => {
	return (
		<div className='popular'>
			<h2>Popular in women</h2>
			<div className='popular_items'>
				{data_product.map((item, i) => {
					return (
						<Item
							key={i}
							id={item.id}
							name={item.name}
							image={item.image}
							new_price={item.new_price}
							old_price={item.old_price}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Popular;
