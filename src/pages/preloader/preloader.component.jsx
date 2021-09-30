import React, { useEffect } from 'react';
import './preloader.styles.scss';

import { connect } from 'react-redux';
import { ReactComponent as DesLogo } from '../../assets/svg/deslogo.svg';

import { gsap } from 'gsap';


const Preloader = ({loaded}) => {

    const process_preloader = () => {
        let preloaderTl = gsap.timeline()
        preloaderTl.to('.loading-bar', { duration: 4, scaleX: 1, ease: 'power4.inOut'})
    }

    const preloader_fade_out = () => {
        let preloaderTl = gsap.timeline()
        preloaderTl.to('.preloader-element', { duration: 1, opacity: 0, ease: 'power2.inOut'})
            .to('.preloader', { duration: .7, background: '#E73F7F', ease: 'power3.inOut'}, .01)
            .to('.preloader', { duration: 1.2, x: '-100%', ease: 'slide'})
            .to('html', { duration: 0, overflow: 'visible'})
    }

    useEffect(() => {
        loaded ? (
            preloader_fade_out()
        ) : (
            process_preloader()
        )
    }, [loaded])

    return(
        <div className='preloader'>
            <DesLogo className='preloader-logo preloader-element'/>
            <div className='loading-bar-container preloader-element'>
                <div className='loading-bar'></div>
            </div>
        </div>
    )
}

const mapStatesToProps = ({loaded}) => ({
    loaded: loaded.loaded
})

export default connect(mapStatesToProps)(Preloader)