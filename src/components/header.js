import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			hasScrolled: false
		}	
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}

	handleScroll = (event) => {
		const scrollTop = window.pageYOffset

		if (scrollTop > 50) {
			this.setState({ hasScrolled: true })
		} else {
			this.setState({ hasScrolled: false })
		}
	}

	render() {
		return (
			<div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
				<div className="HeaderGroup">
					<Link to="/"><img src="https://cl.ly/58bce134a02c/download/GCMS%20logo.png" height="30px"/></Link>
					<a href="https://docs.graphcms.com/tutorials/" target="_blank">Tutorials</a>
					<a href="https://github.com/KenzoBenzo/React-for-Designers-GraphCMS-upgrade" target="_blank">Source Code</a>
					<Link to="/page-2">Help</Link>
					<button><a href="https://app.graphcms.com/signup" target="_blank">Try Now!</a></button>
				</div>
			</div>
		)
	}
}
export default Header
