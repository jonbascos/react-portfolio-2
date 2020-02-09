import React from 'react';

import Hero from './Hero';

function Header(props) {
	return (
		<div className='header-hero-container'>
			<header className='header-container'>
				<h1>
					<a href='#home'>Jon Bascos</a>
				</h1>
				<nav>
					<ul className='nav-items'>
						<li>
							<a href='#about'>About Me</a>
						</li>
						<li>
							<a href='#projects'>Projects</a>
						</li>
						<li>
							<a href='#contact'>Contact</a>
						</li>
					</ul>
				</nav>
			</header>
			<div className='hero-container'>
				<Hero />
			</div>
		</div>
	);
}

export default Header;
