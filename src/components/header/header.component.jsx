import React, { useState } from 'react';
import './header.styles.scss';
import gsap from 'gsap'

import { ReactComponent as CloseIcon } from '../../assets/svg/close-icon.svg'
import { ReactComponent as OpenIcon } from '../../assets/svg/open-icon.svg'

const Header = (props) => {

    const [smoothHover, setSmoothHover] = useState(false)

    const handleMenuOpen = () => {
        gsap.to('.header-open', { duration: .3, opacity: 0})
        gsap.to('.header-close', { delay: .3, display: 'block'})
        gsap.to('.header-close', { delay: .3, duration: .3, opacity: '1'})
        
        gsap.to('.header-nav-container', { display: 'flex'})

        gsap.to('.header-nav-item', {
            duration: 1.5,
            y: 0,
            ease: 'power4.out',
            stagger: {
                each: 0.1,
                from: 'end'
            }
        })

        gsap.to('.header-nav-item', {
            duration: 1,
            opacity: 1,
            stagger: {
                each: 0.1,
                from: 'end'
            }
        })


        setTimeout(() => {
            setSmoothHover(true)
        }, 1500)
    }

    const handleMenuClose = () => {
        gsap.to('.header-close', { duration: .3, opacity: 0})
        gsap.to('.header-close', { delay: .3, display: 'none'})
        gsap.to('.header-open', { delay: .3, duration: .3, opacity: '1'})

        setSmoothHover(false)

        gsap.to('.header-nav-container', { delay: 1.1, display: 'none'})

        gsap.to('.header-nav-item', {
            duration: 1.5,
            y: 200,
            ease: 'power4.inOut',
            stagger: {
                each: 0.1,
                from: 'start'
            }
        })
        gsap.to('.header-nav-item', {
            duration: 1,
            opacity: 0,
            stagger: {
                each: 0.1,
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
                <span className={`${smoothHover ? 'smooth-hover' : null} header-nav-item`}>resume</span>
                <span className={`${smoothHover ? 'smooth-hover' : null} header-nav-item`}>contact</span>
                <OpenIcon className='header-open' onClick={() => {handleMenuOpen()}}/>
                <CloseIcon className='header-close' onClick={() => {handleMenuClose()}}/>
            </div>
        </div>
    )
}

export default Header