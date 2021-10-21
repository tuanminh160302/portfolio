import React, { useState, useEffect, useRef } from 'react';
import './header.styles.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import gsap from 'gsap'

import { ReactComponent as CloseIcon } from '../../assets/svg/close-icon.svg'
import { ReactComponent as OpenIcon } from '../../assets/svg/open-icon.svg'

const Header = ({ toggleClicked, setToggle, history }) => {

    let location = history.location.pathname

    const isInitRender = useRef(true)

    const menuToggle = useRef(false)

    const [smoothHover, setSmoothHover] = useState(false)

    useEffect(() => {
        let toggleTl = gsap.timeline()
        toggleTl.to('.header', { duration: .2, background: '#eaeaea' }, .01)
        toggleTl.pause()

        let toggleTlRev = gsap.timeline()
        toggleTlRev.to('.header', { duration: .2, background: '#333333' }, .01)
        toggleTlRev.pause()

        toggleClicked ? (
            toggleTl.play()
        ) : (
            toggleTlRev.play()
        )

    }, [toggleClicked])

    useEffect(() => {
        isInitRender.current ? (
            isInitRender.current = !isInitRender.current
        ) : (
            setTimeout(() => {
                autoHandleMenu()
                changeMenuToggle()
            }, 1200)
        )
    }, [location])

    const changeMenuToggle = () => {
        menuToggle.current = !menuToggle.current
    }

    const handleMenu = () => {
        changeMenuToggle()
        menuToggle.current ? (
            handleMenuOpen()
        ) : (
            handleMenuClose()
        )
    }

    const handleMenuOpen = () => {
        let menuOpen = gsap.timeline()
        menuOpen.to('.menu', { duration: 1.2, y: '0', ease: 'slide' })
            .to('.menu', { duration: .7, scale: 1, ease: 'power4.inOut' }, .35)
            .to('.header-open', { duration: .7, fill: 'black' }, .6)
    }

    const handleMenuClose = () => {
        let menuClose = gsap.timeline()
        menuClose.to('.menu', { duration: 1.2, y: '-100vh', ease: 'slide' })
            .to('.menu', { duration: .7, scale: .9, ease: 'power4.inOut' }, .2)
            .to('.header-open', { duration: .7, fill: 'white' }, .55)
    }

    const autoHandleMenu = () => {
        gsap.to('.menu', { scale: 0.9, y: '-100vh' })
        gsap.to('.header-open', { fill: 'white' })
    }

    return (
        <div className='header'>
            <span className='header-logo'>steve</span>
            <div className='header-nav-container'>
                <OpenIcon className='header-open apply-toggle' onClick={() => { handleMenu() }} />
            </div>
            <div className='menu'>
                <Link to='/' className={`${smoothHover ? 'smooth-hover' : null} ${toggleClicked ? 'toggle-clicked' : null} header-nav-item apply-toggle`}>home</Link>
                <Link to='/work' className={`${smoothHover ? 'smooth-hover' : null} ${toggleClicked ? 'toggle-clicked' : null} header-nav-item apply-toggle`}>work</Link>
                <Link to='/' className={`${smoothHover ? 'smooth-hover' : null} ${toggleClicked ? 'toggle-clicked' : null} header-nav-item apply-toggle`}>skills</Link>
                <Link to='/' className={`${smoothHover ? 'smooth-hover' : null} ${toggleClicked ? 'toggle-clicked' : null} header-nav-item apply-toggle`}>resumé</Link>
                <Link to='/' className={`${smoothHover ? 'smooth-hover' : null} ${toggleClicked ? 'toggle-clicked' : null} header-nav-item apply-toggle`}>contact</Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({ toggle, location }) => ({
    toggleClicked: toggle.toggle,
    location: location.location
})

export default withRouter(connect(mapStateToProps)(Header))