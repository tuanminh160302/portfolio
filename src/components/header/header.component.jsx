import React, { useState, useEffect, useRef } from 'react';
import './header.styles.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import gsap from 'gsap'

import { ReactComponent as OpenIcon } from '../../assets/svg/open-icon.svg'
import { ReactComponent as MenuLogo } from '../../assets/svg/menulogo.svg';

const Header = ({ toggleClicked, setToggle, history }) => {

    let location = history.location.pathname

    const isInitRender = useRef(true)

    const menuToggle = useRef(false)

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
            }, 1100)
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
        menuOpen.to('.menu', { duration: 1.2, y: 0, ease: 'slide' })
            .to('.nav-item', { duration: .5, x: 0, stagger: .1}, .3)
            .to('.nav-item', { duration: .3, opacity: 1, stagger: .1}, .6)
            .to('.nav-decor', { duration: .5, scaleX: 1, ease: 'back.out(2.5)'}, .6)
    }

    const handleMenuClose = () => {
        let menuClose = gsap.timeline()
        menuClose.to('.menu', { duration: 1.2, y: '-100vh', ease: 'slide' })
            .to('.nav-item', { duration: .2, opacity: 0}, .01)
            .to('.nav-item', { x: '-50px'}, .2)
            .to('.nav-decor', { duration: .5, scaleX: 0, ease: 'back.in(2.5)'}, .01)
    }

    const autoHandleMenu = () => {
        gsap.to('.menu', { y: '-100vh' })
        gsap.to('.nav-item', { opacity: 0, x: '-50px'})
        gsap.to('.nav-decor', { scaleX: 0})
    }

    return (
        <div className='header'>
            <span className='header-logo'>steve</span>
            <div className='header-nav-container'>
                <OpenIcon className='header-open apply-toggle' onClick={() => { handleMenu() }} />
            </div>
            <div className={`menu`}>
                <MenuLogo className='menu-logo'/>
                <div className='nav-decor'>
                    <Link to='/' className='nav-item'>Home</Link>
                    <Link to='/work' className='nav-item'>Work</Link>
                    <Link to='/' className='nav-item'>Skills</Link>
                    <Link to='/' className='nav-item'>Resumé</Link>
                    <Link to='/' className='nav-item'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ toggle, location }) => ({
    toggleClicked: toggle.toggle,
    location: location.location
})

export default withRouter(connect(mapStateToProps)(Header))