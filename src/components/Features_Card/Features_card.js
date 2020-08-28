import React from "react"

import "./Features_card.scss"

const FeaturesCard = ({icon, heading, content}) => {
  return (
    <div className="card">
      <div className="card__icon">
        <i className={`${icon} card__icon-t`}/>
      </div>
      <div className="card__heading">
        <h3>{heading}</h3>
      </div>
      <div className="card__content">
        {content}
      </div>
    </div>
  )
}

export default FeaturesCard
