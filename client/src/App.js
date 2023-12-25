import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../src/components/footer/Footer.js';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Cart from './pages/Cart.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Product from './pages/Product.js';
import ShopCategory from './pages/ShopCategory.js';
import Signup from './pages/Signup.js';
function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/women' element={<ShopCategory category='women' />} />
					<Route path='/men' element={<ShopCategory category='men' />} />
					<Route path='/kids' element={<ShopCategory category='kid' />} />
					<Route path='/product' element={<Product />}>
						<Route path=':productID' element={<Product />} />
					</Route>
					<Route path='/cart' element={<Cart />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
