import React from 'react'
import ContentLoader from "react-content-loader" 

const PizzaLoadingBlock = () => {

  return (
    <ContentLoader 
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="151" r="140" /> 
    <rect x="0" y="302" rx="5" ry="5" width="280" height="26" /> 
    <rect x="0" y="338" rx="8" ry="8" width="280" height="84" /> 
    <rect x="0" y="438" rx="5" ry="5" width="89" height="27" /> 
    <rect x="127" y="431" rx="20" ry="20" width="150" height="34" />
  </ContentLoader>
  )
}

export default PizzaLoadingBlock