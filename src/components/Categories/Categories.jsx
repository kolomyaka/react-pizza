import React, {useEffect, useState} from 'react'


const Categories = React.memo(function Categories({ activeCategory, items, onClickItem }) {

  
  return (
    <div className="categories">
    <ul>   
      <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickItem(null)}>Все</li>   
      {
        items && items.map((item, index) => 
          <li className={activeCategory === index ? 'active' : ''} onClick={() => onClickItem(index)} key={`${item}_${index}`}>
            {item}
          </li>  
        )
      }
    </ul>
  </div>
  )
})

export default Categories