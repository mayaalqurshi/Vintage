import React from 'react';
import LinkButton from '../components/buttons/LinkButton.js';
import MainButton from '../components/buttons/MainButton.js';
import TextField from '../components/fields/TextField.js';
import './css/Login.css';

const Login = ({setButtonPopUp}) => {
	return (
		<div className='login'>
			<h2>Log In</h2>
			<div className='login_container'>
				<div className='login_fields'>
					<TextField fieldType={'email'}>Email Address</TextField>
					<TextField fieldType={'password'}>Password</TextField>
				</div>
				<MainButton url='#'>Log in</MainButton>
				<p className='login_create_account'>
					You don't have an account yet? <LinkButton url='/signup' onClick={() => setButtonPopUp(true)}>Sign Up</LinkButton>
				</p>
			</div>
		</div>
	);
};

export default Login;
