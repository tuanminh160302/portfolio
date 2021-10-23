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

    // const headerNavItemBorder = useRef('')

    const [headerNavItemBorder, setHeaderNavItemBorder] = useState(location.replace('/', ''))

    const isInitRender = useRef(true)

    const menuToggle = useRef(false)

    useEffect(() => {
        if (location === '/') {
            // headerNavItemBorder.current = 'home'
            setTimeout(() => {
                setHeaderNavItemBorder('')
            }, 1000)
        } else if (location === '/work') {
            // headerNavItemBorder.current = 'work'
            setTimeout(() => {
                setHeaderNavItemBorder('work')
            }, 1000)
        }
    }, [location])

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
    }

    const handleMenuClose = () => {
        let menuClose = gsap.timeline()
        menuClose.to('.menu', { duration: 1.2, y: '-100vh', ease: 'slide' })
            .to('.menu', { duration: .7, scale: .9, ease: 'power4.inOut' }, .2)
    }

    const autoHandleMenu = () => {
        gsap.to('.menu', { scale: 0.9, y: '-100vh' })
    }

    return (
        <div className='header'>
            <span className='header-logo'>steve</span>
            <div className='header-nav-container'>
                <OpenIcon className='header-open apply-toggle' onClick={() => { handleMenu() }} />
            </div>
            <div className={`${headerNavItemBorder}-active menu`}>
                <div className='nav-container'>
                    <Link to='/' className='nav-item'>Home</Link>
                    <Link to='/work' className='nav-item'>Work</Link>
                    <Link to='/' className='nav-item'>Skills</Link>
                    <Link to='/' className='nav-item'>Resumé</Link>
                    <Link to='/' className='nav-item'>Contact</Link>
                </div>
                <div className='nav-decor'></div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ toggle, location }) => ({
    toggleClicked: toggle.toggle,
    location: location.location
})

export default withRouter(connect(mapStateToProps)(Header))