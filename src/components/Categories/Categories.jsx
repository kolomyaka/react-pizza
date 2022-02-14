import React, {useState} from 'react'


function Categories({ items, onClickItem }) {

  const [isActiveItem, setActiveItem] = useState(0);
  
  return (
    <div className="categories">
    <ul>      
      {
        items && items.map((item, index) => 
          <li className={isActiveItem === index ? 'active' : ''} onClick={() => setActiveItem(index)} key={`${item}_${index}`}>
            {item}
          </li>  
        )
      }
    </ul>
  </div>
  )
}

export default Categories