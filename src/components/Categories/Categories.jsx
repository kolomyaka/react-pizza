import React, {useEffect, useState} from 'react'


const Categories = React.memo(function Categories({ items, onClickItem }) {

  // Состояние для активной кнопки фильтра.
  const [isActiveItem, setActiveItem] = useState(null);
  
  const onSelectItem = (index) => {
    setActiveItem(index);  // Сохраняем значение активной кнопки для фильтра.
    onClickItem(index);
  } 

  console.log('render');

  return (
    <div className="categories">
    <ul>   
      <li className={isActiveItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>   
      {
        items && items.map((item, index) => 
          <li className={isActiveItem === index ? 'active' : ''} onClick={() => onSelectItem(index)} key={`${item}_${index}`}>
            {item}
          </li>  
        )
      }
    </ul>
  </div>
  )
})

export default Categories