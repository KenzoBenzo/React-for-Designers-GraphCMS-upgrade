import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
	<div>
		<div className="Hero">
			<div className="HeroGroup">
				<h1>Learn to <br />design and code React apps</h1>
				<p>Complete courses about the best tools and design systems. Next up - <a href="https://graphcms.com/">GraphCMS</a>.</p>
				<Link to="/page-2/">Go to page 2</Link>
				<Link to="/video">Watch the video</Link>
			</div>
		</div>
	</div>
)

export default IndexPage
