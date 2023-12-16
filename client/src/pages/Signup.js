import React from 'react';
import './css/Signup.css';

const Signup = () => {
	return (
		<div className='signup'>
			<h2>Sign Up</h2>
			<div className='signup_container'>
				<div className='signup_fields'>
					<input type='text' placeholder='Full name' />
					<input type='email' placeholder='Email Address' />
					<input type='password' placeholder='password' />
				</div>
				<div className='signup_agree'>
					<input type='checkbox' name='' id='' />
					<p>By continuing, I agree to the terms and conditions</p>
				</div>
				<button>Sign Up</button>
				<p className='signup_login_account'>
					Already have an account? <span>Log In</span>
				</p>
			</div>
		</div>
	);
};

export default Signup;
