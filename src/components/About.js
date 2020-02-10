import React from 'react';
import Skills from './Skills';
import headshot from '../static/images/headshot.jpg';

function About(props) {
	return (
		<div>
			<section className='about-container'>
				<h1 className='headings'>
					<a name='About'>About Me</a>
				</h1>

				<div className='about-contents'>
					<img
						src={headshot}
						alt='Jon Bascos, Web Developer'
						className='portfolio-picture'
					/>
					<p>
						I am a Web Developer born and raised in the Silicon
						Valley and moved to the Portland area in 2005. I enjoy
						learning about new tech especially when it comes to
						consumer electronics (I love my Apple products) and also
						mining crypto. I was first introduced to Web Development
						in high school. We learned about HTML and created web
						pages in class.
					</p>
					<br />
					<p>
						I'm a graduate of the PDX Code Guild hands-on 14-week
						Bootcamp. During the Bootcamp, we focused on being full
						stack Python-based web developers. My current (and ever
						evolving knowledge) includes Python, Django, Django REST
						Framework, VueJS, HTML, CSS, and Javascript. I'm
						currently learning ReactJS to add to my toolbelt.
					</p>
				</div>
			</section>
			<Skills />
		</div>
	);
}
export default About;
