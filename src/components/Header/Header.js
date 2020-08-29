import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import BackgroundImage from "gatsby-background-image"

import './Header.scss'

const query = graphql`
query {
  file(relativePath: {eq: "hero.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

const Header = () => {
  const {file: {childImageSharp: fluid}} = useStaticQuery(query);

  return (
    <header className={'header'}>
      <BackgroundImage fluid={fluid.fluid} className={'header__background'} />
      <div className={'header__box'}>
        <h1 className={'heading'}>
          <span className={'heading-1'}>I'm</span>
          <span className={'heading-2'}>Devashish</span>
          <span className={'heading-3'}>freelance web developer</span>
        </h1>
        <button className={'btn animated'}>Contact Me</button>
      </div>
    </header>
  )
}

export default Header
