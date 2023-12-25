import React from 'react';
import './PopUp.css';

const PopUp = (props) => {
	return props.trigger ? (
		<div className='pop_up_card'>
			<div className='pop_up_inner'>
				<button className='close_button' onClick={() => props.setTrigger(false)}>
					<div className='circle'>
						<span className='box'></span>
					</div>
				</button>
				<div className='pop_up_content'>{props.children}</div>
			</div>
		</div>
	) : (
		''
	);
};
export default PopUp;
