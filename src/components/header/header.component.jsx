import React, { useState } from 'react';
import './header.styles.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import gsap from 'gsap'

import { ReactComponent as CloseIcon } from '../../assets/svg/close-icon.svg'
import { ReactComponent as OpenIcon } from '../../assets/svg/open-icon.svg'

const Header = ({toggleClicked}) => {

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
                <Link to='/' className={`${smoothHover ? 'smooth-hover' : null} ${toggleClicked ? 'toggle-clicked' : null} header-nav-item apply-toggle`}>home</Link>
                <Link to='/work' className={`${smoothHover ? 'smooth-hover' : null} ${toggleClicked ? 'toggle-clicked' : null} header-nav-item apply-toggle`}>work</Link>
                <Link to='/' className={`${smoothHover ? 'smooth-hover' : null} ${toggleClicked ? 'toggle-clicked' : null} header-nav-item apply-toggle`}>skills</Link>
                <Link to='/' className={`${smoothHover ? 'smooth-hover' : null} ${toggleClicked ? 'toggle-clicked' : null} header-nav-item apply-toggle`}>resumé</Link>
                <Link to='/' className={`${smoothHover ? 'smooth-hover' : null} ${toggleClicked ? 'toggle-clicked' : null} header-nav-item apply-toggle`}>contact</Link>
                {/* <span className={`${smoothHover ? 'smooth-hover' : null} header-nav-item apply-toggle`}>contact</span> */}
                <OpenIcon className='header-open apply-toggle' onClick={() => {handleMenuOpen()}}/>
                <CloseIcon className='header-close apply-toggle' onClick={() => {handleMenuClose()}}/>
            </div>
        </div>
    )
}

const mapStateToProps = ({toggle}) => ({
    toggleClicked: toggle.toggle
})

export default connect(mapStateToProps)(Header)