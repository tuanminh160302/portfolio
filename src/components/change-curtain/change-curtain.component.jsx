import React from 'react';

import './change-curtain.styles.scss';

const ChangeCurtain = React.forwardRef((props, ref) => (
    <div ref={ref} className='change-curtain'></div>
))

export default ChangeCurtain