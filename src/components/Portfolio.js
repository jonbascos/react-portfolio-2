import React from 'react';

import ProjectCard from './ProjectCard';

function Portfolio(props) {
	return (
		<div className='portfolio-container'>
			<h1 className='headings' id='portfolio-section'>
				<a name='projects'>Projects</a>
			</h1>
			<br />
			<ul className='card-container'>
				<ProjectCard />
			</ul>
		</div>
	);
}

export default Portfolio;
