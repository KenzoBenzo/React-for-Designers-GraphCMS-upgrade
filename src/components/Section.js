import React from 'react'
import './Section.css'
import Wave from '../components/Wave'

const Section = props => {
	return (
		<div className="SectionGroup">
			<div className="WaveTop"><Wave /></div>
			<div className="WaveBottom"><Wave /></div>
			<img className="SectionLogo" src={props.logo} />
			<div className="SectionTitleGroup">
				<h1 className="SectionTitle">{props.title}</h1>
				<p className="SectionText">{props.text}</p>
			</div>
		</div>
	);
};

export default Section