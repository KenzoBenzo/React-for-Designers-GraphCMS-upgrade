import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
	<div>
		<div className="Hero">
			<div className="HeroGroup">
				<h1>Learn to <br />design and code React apps</h1>
				<p>Complete courses about the best tools and design systems. Next up - <a href="https://graphcms.com/">GraphCMS</a>.</p>
				<Link to="/video" className="videolink">Watch the video</Link>
			</div>
		</div>
	</div>
)

export default IndexPage
