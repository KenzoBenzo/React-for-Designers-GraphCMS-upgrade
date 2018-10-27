import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
	<div className="Header">
		<div className="HeaderGroup">
			<Link to="/"><img src="https://cl.ly/58bce134a02c/download/GCMS%20logo.png" height="30px"/></Link>
			<Link to="https://docs.graphcms.com/tutorials/">Tutorials</Link>
			<Link to="https://github.com/KenzoBenzo/React-for-Designers-GraphCMS-upgrade">Source Code</Link>
			<Link to="/page-2">Help</Link>
			<Link to="https://app.graphcms.com/signup"><button>Try Now!</button></Link>
		</div>
	</div>
)

export default Header
