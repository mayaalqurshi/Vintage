import React from 'react';
import LinkButton from '../components/buttons/LinkButton.js';
import MainButton from '../components/buttons/MainButton.js';
import TextField from '../components/fields/TextField.js';
import './css/Signup.css';

const Signup = () => {
	return (
		<div className='signup'>
			<h2>Sign Up</h2>
			<div className='signup_container'>
				<div className='signup_fields'>
					<TextField fieldType={'text'}>Full Name</TextField>
					<TextField fieldType={'text'}>Username</TextField>
					<TextField fieldType={'email'}>Email Address</TextField>
					<TextField fieldType={'password'}>Password</TextField>
				</div>
				<div className='signup_agree'>
					<input type='checkbox' name='' id='' />
					<p>By continuing, I agree to the terms and conditions</p>
				</div>
				<MainButton url='#'>Sign Up</MainButton>
				<p className='signup_login_account'>
					Already have an account? <LinkButton url='/login'>Log In</LinkButton>
				</p>
			</div>
		</div>
	);
};

export default Signup;
