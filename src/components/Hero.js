import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faLinkedin,
	faGithub
} from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import resume from '../resume.pdf';
import headshot from '../static/images/headshot.jpg';

function Hero(props) {
	return (
		<div className='hero-container'>
			<div className='intro-container'>
				<a name='home'>
					<h1>My name is Jon!</h1>
				</a>
				<h2>And I'm a Full Stack Web Developer</h2>
				<ul className='social-media'>
					<li>
						<a
							href='https://www.twitter.com/medictodev'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon
								icon={faTwitter}
								size='2x'
								style={{ color: 'teal' }}
							/>
						</a>
					</li>
					<li>
						<a
							href='https://www.linkedin.com/in/jonbascos'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								size='2x'
								style={{ color: 'teal' }}
							/>
						</a>
					</li>

					<li>
						<a
							href='https://www.github.com/jonbascos'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon
								icon={faGithub}
								size='2x'
								style={{ color: 'teal' }}
							/>
						</a>
					</li>
					<li>
						<a
							href={resume}
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon
								icon={faFilePdf}
								size='2x'
								style={{ color: 'teal' }}
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default Hero;
