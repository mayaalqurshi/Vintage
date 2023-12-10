import React from 'react';
import new_collections from '../assets/new_collections.js';
import Item from '../item/Item.js';
import './NewCollections.css';

const NewCollections = () => {
	return (
		<div className='new_collections'>
			<h1>New Collections</h1>
			<div className='new_collections_items'>
				{new_collections.map((item, i) => {
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
export default NewCollections;
