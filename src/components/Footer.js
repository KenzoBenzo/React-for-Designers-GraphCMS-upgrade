import React from 'react'
import './footer.css'

const Footer = ({data, children}) => {
		<div className='FooterGroup'>
			<p className='FooterText'>Tweet GraphCMS for a chance to win 3 free months of the Standard Plan. This includes Webhooks, Content Localization, 1 M API operations, and 100GB of Asset Traffic.</p>
			<button href="https://twitter.com/GraphCMS" target="_blank">Tweet</button>
			<div className='LinkGroup'>{data.allContentfulLink.edges.map(edge => (
				<a href={edge.node.url}>{edge.node.title}</a>
			))}</div>
			<p className='Copyright'>{children}</p>
		</div>
}

export default Footer