import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'
import Section from '../components/Section'
import Wave from '../components/Wave'

const IndexPage = () => (
	<div>
		<div className="Hero">
			<div className="HeroGroup">
				<h1>Learn to <br />design and code React apps</h1>
				<p>Complete courses about the best tools and design systems. Next up - <a href="https://graphcms.com/">GraphCMS</a>.</p>
				<Link to="/video" className="videolink">Watch the video</Link>
				<div className="Logos">
					<img src="https://cl.ly/518b51540596/download/logo-xcode.png" width="50" />
					<img src="https://cl.ly/7b6a0a1078f7/download/logo-swift.png" width="50" />
					<img src="https://cl.ly/4ce68ea98f6c/download/logo-react.png" width="50" />
					<img src="https://cl.ly/e5149ea0ac1e/download/logo-studio.png" width="50" />
					<img src="https://cl.ly/e23d6af15225/download/logo-figma.png" width="50" />
					<img src="https://cl.ly/d27f5149f6b0/download/logo-framer.png" width="50" />
				</div>
				<Wave />
			</div>
		</div>
		
		<div className="Cards">
    		<h2>11 courses, more coming</h2>
    		<div className="CardGroup">
				<Card 
				title="DesignSystem"
				text="10 sections"
				image="https://cl.ly/22de8cf761a2/download/wallpaper4.jpg" />
				<Card 
				title="React for Designers"
				text="11 sections"
				image="https://cl.ly/22de8cf761a2/download/wallpaper4.jpg" />
				<Card 
				title="Sound Design"
				text="5 sections"
				image="https://cl.ly/22de8cf761a2/download/wallpaper4.jpg" />
				<Card 
				title="ARKit 2"
				text="10 sections"
				image="https://cl.ly/22de8cf761a2/download/wallpaper4.jpg" />
			</div>
		</div>

		<Section
			logo="https://cl.ly/4ce68ea98f6c/download/logo-react.png"
			title="React for Designers"
			text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify." />
	</div>
)

export default IndexPage
