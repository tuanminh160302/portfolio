import React, { useState } from 'react';
import './header.styles.scss';
import gsap from 'gsap'

import { ReactComponent as CloseIcon } from '../../assets/svg/close-icon.svg'
import { ReactComponent as OpenIcon } from '../../assets/svg/open-icon.svg'

const Header = (props) => {

    const [smoothHover, setSmoothHover] = useState(false)

    const handleMenuOpen = () => {
        gsap.to('.header-open', { duration: .5, opacity: 0})
        gsap.to('.header-close', { delay: .5, display: 'block'})
        gsap.to('.header-close', { delay: .5, duration: .5, opacity: '1'})
        
        gsap.to('.header-nav-item', { pointerEvents: 'auto'})

        gsap.to('.header-nav-item', {
            duration: 0.9,
            y: 0,
            ease: 'power4.out',
            stagger: {
                each: 0.06,
                from: 'end'
            }
        })

        gsap.to('.header-nav-item', {
            duration: .7,
            opacity: 1,
            stagger: {
                each: 0.06,
                from: 'end'
            }
        })


        setTimeout(() => {
            setSmoothHover(true)
        }, 910)
    }

    const handleMenuClose = () => {
        gsap.to('.header-close', { duration: .5, opacity: 0})
        gsap.to('.header-close', { delay: .5, display: 'none'})
        gsap.to('.header-open', { delay: .5, duration: .5, opacity: '1'})

        setSmoothHover(false)

        gsap.to('.header-nav-item', { pointerEvents: 'none'})

        gsap.to('.header-nav-item', {
            duration: 0.9,
            y: 200,
            ease: 'power4.in',
            stagger: {
                each: 0.06,
                from: 'start'
            }
        })
        gsap.to('.header-nav-item', {
            delay: .25,
            duration: 0.75,
            opacity: 0,
            stagger: {
                each: 0.06,
                from: 'start'
            }
        })
    }

    return (
        <div className='header'>
            <span className='header-logo'>steve</span>
            <div className='header-nav-container'>
                <span className={`${smoothHover ? 'smooth-hover' : null} header-nav-item`}>home</span>
                <span className={`${smoothHover ? 'smooth-hover' : null} header-nav-item`}>work</span>
                <span className={`${smoothHover ? 'smooth-hover' : null} header-nav-item`}>skills</span>
                <span className={`${smoothHover ? 'smooth-hover' : null} header-nav-item`}>resumé</span>
                <span className={`${smoothHover ? 'smooth-hover' : null} header-nav-item`}>contact</span>
                <OpenIcon className='header-open' onClick={() => {handleMenuOpen()}}/>
                <CloseIcon className='header-close' onClick={() => {handleMenuClose()}}/>
            </div>
        </div>
    )
}

export default Header