import React from 'react';
import { Link } from 'react-router-dom';
import './Buttons.css';

const LinkButton = ({ children, url }) => {
	return (
		<div className='link_button'>
			<Link to={url} style={{ textDecoration: 'none' }}>
				<span>{children}</span>
			</Link>
		</div>
	);
};
export default LinkButton;
