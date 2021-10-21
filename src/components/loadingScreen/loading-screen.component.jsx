import React, {forwardRef} from 'react';

import './loading-screen.styles.scss';
import { ReactComponent as DesLogo } from '../../assets/svg/deslogo.svg';

const LoadingScreen = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='loading-screen'>
            <DesLogo className='loading-screen-logo' />
        </div>
    )
})

export default LoadingScreen