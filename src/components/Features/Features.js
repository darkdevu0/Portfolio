import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import FeaturesCard from "../Features_Card/Features_card"

import "./Features.scss"

const query = graphql`
query {
  file(relativePath: {eq: "nat-4.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

const Features = () => {
  const { file: { childImageSharp: fluid } } = useStaticQuery(query)
  console.log(fluid)

  const data = [
    {
      id: 1,
      icon: `icon-basic-webpage`,
      heading: `web development`,
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.`
    },
    {
      id: 2,
      icon: `icon-basic-webpage`,
      heading: `web development`,
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.`
    },
    {
      id: 3,
      icon: `icon-basic-webpage`,
      heading: `web development`,
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.`
    },
    {
      id: 4,
      icon: `icon-basic-webpage`,
      heading: `web development`,
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.`
    }
  ];

  return (
    <section className="features">
      <BackgroundImage fluid={fluid.fluid} className={"features__bgImage"}/>
      <div className="cards">
        <div className="cards-center">
          {data.map(item => (
            <FeaturesCard key={item.id} icon={item.icon} heading={item.heading} content={item.content} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
