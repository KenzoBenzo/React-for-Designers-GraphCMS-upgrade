import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to <br />
          code &#38; query GraphQL apps
        </h1>
        <p>
          Complete courses about the best tools and design systems. Next up -{' '}
          <a href="https://graphcms.com/">GraphCMS</a>.
        </p>
        <Link to="/video" className="videolink">
          Watch the video
        </Link>
        <div className="Logos">
          <img
            src="https://cl.ly/4420070385e1/download/GraphCMS%20icon.png"
            width="50"
          />
          <img
            src="https://cl.ly/ab73a9362948/download/GraphQL%20icon.png"
            width="50"
          />
          <img
            src="https://cl.ly/4ce68ea98f6c/download/logo-react.png"
            width="50"
          />
          <img
            src="https://cl.ly/2eca45d5bf02/download/Gatsby%20icon.png"
            width="50"
          />
          <img
            src="https://cl.ly/e23d6af15225/download/logo-figma.png"
            width="50"
          />
          <img
            src="https://cl.ly/d27f5149f6b0/download/logo-framer.png"
            width="50"
          />
        </div>
        <Wave />
      </div>
    </div>

    <div className="Cards">
      <h2>6 Tutorials, More coming!</h2>
      <div className="CardGroup">
        <Card
          link="https://docs.graphcms.com/tutorials/users/setting_up_the_project"
          title="Blog Tutorial"
          text="6 min read"
          image="https://cl.ly/ab1cd4a01e8c/download/paint.jpg"
        />
        <Card
          link="https://docs.graphcms.com/tutorials/developers/beginners_guide_with_react"
          title="Beginners Guide-React"
          text="15 min read"
          image="https://cl.ly/e1af0c4e60a8/download/pink.jpg"
        />
        <Card
          link="https://docs.graphcms.com/tutorials/developers/beginners_guide_with_vue"
          title="Beginners Guide-Vue"
          text="8 min read"
          image="https://cl.ly/62888d9427e7/download/window.jpg"
        />
        <Card
          link="https://docs.graphcms.com/tutorials/developers/gatsby_and_graphcms"
          title="New Gatsby Tutorial"
          text="5 min read"
          image="https://cl.ly/116fdbb973bb/download/wall.jpg"
        />
        <Card
          link="https://docs.graphcms.com/tutorials/developers/manually_uploading_assets"
          title="Manually uploading Assets"
          text="5 min read"
          image="https://cl.ly/495b7452379a/download/purple.jpg"
        />
        <Card
          link="https://docs.graphcms.com/tutorials/developers/website_localization"
          title="Localization Tutorial"
          text="7 min read"
          image="https://cl.ly/461e0c0107db/download/glass.jpg"
        />
      </div>
    </div>

    <Section
      logo="https://cl.ly/4ce68ea98f6c/download/logo-react.png"
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
    <h2 className="SectionCaption">1 Technology - Endless Possibilities</h2>
    <div className="SectionCellGroup">
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </div>
  </div>
)

export default IndexPage
