import React from 'react';
import './landing-page.styles.scss'
import { ReactComponent as BlurryBg1 } from '../../assets/svg/blurry-bg-1.svg';

const LandingPage = (props) => {
    return (
        <div className='landing-page'>
            <section className='landing-section-1'>
                <BlurryBg1 className='section-1-background'/>
            </section>
        </div>
    )
}

export default LandingPage
