import React from 'react';
import LinkButton from '../components/buttons/LinkButton.js';
import './css/Login.css';
const Login = () => {
	return (
		<div className='login'>
			<h2>Log In</h2>
			<div className='login_container'>
				<div className='login_fields'>
					<input type='email' placeholder='Email Address' />
					<input type='password' placeholder='Password' />
				</div>
				<button>Log in</button>
				<p className='login_create_account'>
					You don't have an account yet? <LinkButton url='/signup'>Sign Up</LinkButton>
				</p>
			</div>
		</div>
	);
};

export default Login;
