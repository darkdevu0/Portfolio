import React from "react"

import "./ProjectCard.scss"

const ProjectCard = (props) => {

  return (
    <div className="card2">
      <div className="card2__side card2__side-front">
        <div className={`card2__picture card2__picture--${props.item.no}`}>
          &nbsp;
        </div>

        <h4 className="card2__heading">
          <span className={`card2__heading-span card2__heading-span--${props.item.no}`}>{props.item.heading}</span>
        </h4>

        <div className="card2__details">
          <ul>
            {props.item.list.map((i, ind) => (
              <li key={ind}>{i}</li>
            ))}
          </ul>
        </div>

      </div>
      <div className={`card2__side card2__side-back card2__side-back--${props.item.no}`}>
        <div className="centered">
          <div className="item">
            <h2><a href={props.item.github}>View Source code...</a></h2>
          </div>
          <div className="item">
            <h2><a href={props.item.live}>Try live...</a></h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
