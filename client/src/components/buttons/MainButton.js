import React from 'react';
import { Link } from 'react-router-dom';
import './Buttons.css';

// List of different button sizes for className styles
const SIZES = ['button-small', 'button-medium', 'button-large'];

// List of different button colors for className styles
const COLORS = ['button-dark', 'button-light', 'button-transparent'];

const MainButton = ({ url, children, buttonSize, buttonColor }) => {
	// Check the buttonSize
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
	// Check the buttonColor
	const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : COLORS[0];
	return (
		<div>
			<Link to={url} style={{ textDecoration: 'none' }}>
				<button className={`button_style ${checkButtonSize} ${checkButtonColor}`}>{children}</button>
			</Link>
		</div>
	);
};
export default MainButton;
