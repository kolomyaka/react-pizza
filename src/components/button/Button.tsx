import React from 'react';
import classNames from 'classnames'

const Button = (props) => {
    console.log(props);
    
    return (
        <button 
            onClick={props.clickOnButton} 
            className={classNames('button',
            {  // С помощью библиотеки проверяем наличие класса у компоненты
                'button--outline' : props.outline,
            })}>{props.textForButton}
        </button>
    )
    
}

export default Button;