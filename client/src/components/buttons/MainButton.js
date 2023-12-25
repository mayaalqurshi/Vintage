import React from 'react';
import { Link } from 'react-router-dom';
import './Buttons.css';

// List of different button sizes for className styles
const SIZES = ['button-small', 'button-medium', 'button-large'];

const MainButton = ({ url, children, buttonSize, onClick }) => {
	// Check the buttonSize
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
	return (
		<div>
			<Link to={url} onClick={onClick} style={{ textDecoration: 'none' }}>
				<button className={`button_style ${checkButtonSize} `}>{children}</button>
			</Link>
		</div>
	);
};
export default MainButton;
