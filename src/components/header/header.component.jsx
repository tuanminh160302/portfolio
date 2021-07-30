import React, { useState } from 'react';
import './header.styles.scss';
import gsap from 'gsap'

import { ReactComponent as CloseIcon } from '../../assets/svg/close-icon.svg'
import { ReactComponent as OpenIcon } from '../../assets/svg/open-icon.svg'

const Header = (props) => {

    const [smoothHover, setSmoothHover] = useState(false)

    const handleMenuOpen = () => {
        gsap.to('.header-nav-item', {
            duration: 1.2,
            y: 0,
            opacity: 1,
            ease: 'power4.out',
            stagger: {
                each: 0.1,
                from: 'left'
            }
        })

        setTimeout(() => {
            setSmoothHover(true)
        }, 1000)
    }

    const handleMenuClose = () => {

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