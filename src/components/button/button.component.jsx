import React from 'react';
import './button.styles.scss'

const Button = ({ className, content, onClick }) => {
    return (
        <button 
            onClick={onClick} 
            className={`button ${className}`}
        >
            {content}
        </button>
    )
}

export default Button