import React from 'react'


type PropsType = {
  activeCategory : number
  items : any
  onClickItem : (index: number) => void
}

const Categories : React.FC<PropsType> = React.memo(function Categories({ activeCategory, items, onClickItem }) {

  
  return (
    <div className="categories">
    <ul className="categories__list-large">   
      <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickItem(null)}>Все</li>   
      {
        items && items.map((item, index) => 
          <li className={activeCategory === index ? 'active' : ''} onClick={() => onClickItem(index)} key={`${item}_${index}`}>
            <span className='categories__item'>{item.name}</span>
            <img className='categories__icon' src={item.icon} />
          </li>  
        )
      }
    </ul>
    {/* <ul className="categories__list-mobile">
      <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickItem(null)}>Все</li>
      {
        items && items.map((item, index) => 
          <li className={activeCategory === index ? 'active' : ''} onClick={() => onClickItem(index)} key={`${item}_${index}`}>
            {item}
          </li>
        )
      }
    </ul> */}
  </div>
  )
})

export default Categories