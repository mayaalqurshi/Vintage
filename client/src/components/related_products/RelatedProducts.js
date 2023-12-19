import React from 'react';
import './RelatedProducts.css';
import data_product from '../assets/data.js';
import Item from '../item/Item.js';

const RelatedProducts = () => {
  return (
    <div className="related_products">
        <h1>Related Products</h1>
        <hr/>
        <div className="related_products_items">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
            })}
        </div>
    </div>
  )
}
export default RelatedProducts;