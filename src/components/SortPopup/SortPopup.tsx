import React, {useState, useEffect, useRef} from 'react'
import { SortItem } from '../../types/types';


type PropsType = {
    items : Array<SortItem>
    activeSortType : number
    onClickItem : (index: number, type : string) => void
}


// Благодаря memo проверяем ссылку на props и мы можем не делать лишний рендер
// Альтернатива в класс. компон. shouldComponentUpdate
const SortPopup: React.FC<PropsType>= React.memo(function SortPopup({ items, onClickItem, activeSortType }) {
    
    const [visiblePopup, setVisiblePopup] = useState(false)
    const sortRef = useRef();  // Сохраняем ссылку на DOM-el

    const toggleVisiblePop = (e:any) => {
        setVisiblePopup(!visiblePopup)
    
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, []) // К кв. скобках можем указать зависимость для отрисовки
    // Если оставим их пустыми, то хук будет срабатывать только при первой отрисовки
    
    const handleOutsideClick = (e:any) => {
        // Для работы в fireFox
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(sortRef.current)) {
            setVisiblePopup(false);
        }
    }

   
    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <svg
                    className={visiblePopup ? 'rotated' : ''}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={toggleVisiblePop}>{items[activeSortType].name}</span>
            </div>
            {visiblePopup && <div className="sort__popup">
                <ul onClick={(e) => toggleVisiblePop(e)}>
                {
                    items && items.map((obj, index) => 
                    <li className={activeSortType === index ? 'active' : ''} onClick={() => onClickItem(index, obj.type)} key={`${obj.type}_${index}`}>
                        {obj.name}
                    </li>  
                    )
                 }
                </ul>
            </div>}
    </div>
    )
})

export default SortPopup;