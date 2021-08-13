import React from 'react';
import './panel.styles.scss';

const Panel = ({ className, content }) => {
    return (
        <div className={`panel ${className}`}>{content}</div>
    )
}

export default Panel