import React, { useState, useEffect, useCallback } from 'react';
import './preloader.styles.scss';

import { connect } from 'react-redux';
import { ReactComponent as DesLogo } from '../../assets/svg/deslogo.svg';

import { gsap } from 'gsap'

const Preloader = ({loaded}) => {

    const [initRun, setInitRun] = useState(true)

    const process_preloader_init = () => {
        let preloaderTl = gsap.timeline()
        preloaderTl.to('.loading-bar', { duration: 2, scaleX: .5, ease: 'power4.inOut'})
    }

    const preloader_fade_out = () => {
        let preloaderTl = gsap.timeline()
        preloaderTl.to('.loading-bar', { duration: 1, scaleX: 1, ease: 'power4.inOut'})
            .to('.preloader-element', { duration: .6, opacity: 0, ease: 'power2.inOut'}, .4)
            .to('.preloader', { duration: .7, background: '#E73F7F', ease: 'power3.inOut'}, .4)
            .to('.preloader', { duration: 1.2, x: '-100%', ease: 'slide'}, .8)
            .to('html', { duration: 0, overflow: 'visible'})
    }

    const memoizedLoadPage = useCallback(() => {
        const load_page = () => {
            if (loaded === true) {
                preloader_fade_out()
            }
        }
        load_page()
        },
        [loaded]
    )

    useEffect(() => {
        process_preloader_init()
    }, [])

    useEffect(() => {
        initRun ? (
            setInitRun(false)
        ) : (
            memoizedLoadPage()
        )
    }, [loaded, initRun, memoizedLoadPage])

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
