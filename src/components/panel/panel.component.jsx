import React from 'react';
import './panel.styles.scss';

const Panel = ({ className }) => {
    return (
        <div className={`panel ${className}`}></div>
    )
}

export default Panel