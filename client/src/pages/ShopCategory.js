import React, { useContext } from 'react';
import dropDownIcon from '../components/assets/Icons/Drop_Down_Arrow.png';
import Item from '../components/item/Item.js';
import { ShopContext } from '../context/ShopContext.js';
import './css/ShopCategory.css';

const ShopCategory = (props) => {
	const { all_product } = useContext(ShopContext);

	return (
		<div className='shop_category'>
			<div className='shop_category_index_sort'>
				<p>
					<span>Showing 1-12</span> out of 36 products.
				</p>
				<div className='shop_category_sort'>
					Sort by <img src={dropDownIcon} alt='Drop Down' />
				</div>
			</div>
			<div className='shop_category_products'>
				{all_product.map((item, i) => {
					if (props.category === item.category) {
						return (
							<Item
								key={i}
								id={item.id}
								name={item.name}
								image={item.image}
								new_price={item.new_price}
								old_price={item.old}
							/>
						);
					} else {
						return null;
					}
				})}
			</div>
		</div>
	);
};

export default ShopCategory;
