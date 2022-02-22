import React from 'react';
import classNames from 'classnames'

const Button = ({onClick, className, outline, textForButton, children}) => {
    
    return (
        <button 
            onClick={onClick} 
            className={classNames('button', className,
            {  // С помощью библиотеки проверяем наличие класса у компоненты
                'button--outline' : outline,
            })}>{textForButton}{children}
        </button>
    )
    
}

export default Button;