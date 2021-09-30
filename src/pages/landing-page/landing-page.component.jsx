import React, { useState, useEffect, Fragment } from 'react';
import './landing-page.styles.scss'

import { connect } from 'react-redux';

import { ReactComponent as Blob } from '../../assets/svg/blob.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';
import { ReactComponent as GmailIcon } from '../../assets/svg/gmail.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/svg/linkedin.svg';
import { ReactComponent as FavIcon1 } from '../../assets/svg/fav-panel-1.svg';
import { ReactComponent as FavIcon2 } from '../../assets/svg/fav-panel-2.svg';
import { ReactComponent as FavIcon3 } from '../../assets/svg/fav-panel-3.svg';
import { ReactComponent as NextIcon } from '../../assets/svg/next-icon.svg';
import { ReactComponent as CloseIconLine} from '../../assets/svg/close-icon-line.svg'

import {ICON_DATA_WEB, ICON_DATA_ANIM, ICON_DATA_DES} from '../../assets/data/icon.data';

import Gif from '../../assets/img/gif.gif'
import Avt from '../../assets/img/avt.jpg'
import Hands from '../../assets/img/hands-emoji.png'

import Button from '../../components/button/button.component';
import Panel from '../../components/panel/panel.component';

import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, CustomEase)

const LandingPage = ({ toggleClicked }) => {

    useEffect(() => {
        CustomEase.create('slide', "M0,0 C0.29,0 0.345,0.015 0.416,0.1 0.485,0.183 0.478,0.358 0.498,0.502 0.512,0.602 0.517,0.794 0.58,0.888 0.655,0.999 0.704,1 1,1 ")
    }, [])

    const [buttonClicked, setButtonClicked] = useState(false)
    const [panelDetails, setPanelDetails] = useState(0)
    // const [toggleClicked, setToggleClicked] = useState(false)

    const handleClickButton = () => {
        setButtonClicked(!buttonClicked)
        let buttonClickTl = gsap.timeline()
        buttonClickTl.to('.section-1-panel-2', { scaleX: 0, duration: .8, ease: 'power4.inOut' })
            .to('.section-1-panel', { scaleX: 1, duration: .8, ease: 'power4.inOut' }, .8)
            .to('.section-1-panel', { scaleY: 1, duration: 1.2, ease: 'power4.out' }, 1.3)
            .to('.section-1-panel', { x: '100%', duration: 2, ease: 'power4.out' }, 1.4)
            .to('.section-1-panel', { transformOrigin: 'right bottom', duration: 0 }, 1.55)
            .to('.section-1-panel', { scaleX: .8, duration: 1, ease: 'power4.inOut' }, 1.55)
            .to('.section-1-blob', { duration: .7, opacity: 0, ease: 'power4.out' }, .9)
        buttonClickTl.pause()
    }

    const handleClickNextIcon = (e) => {
        const panelDetailsNum = e.target.className.baseVal.slice(-1)
        setPanelDetails(panelDetailsNum)

        let favDetailsTl = gsap.timeline()
        favDetailsTl.to('.landing-section-1', { pointerEvents: 'none' })
                    .to('.fav-details-close', { duration: 0, pointerEvents: 'auto'}, 3)
                    .to('.section-1-fav-details', { duration: 1.5, scaleX: 1, ease: 'slide' }, .01)
                    .to('.landing-section-1', { duration: 1.5, scale: 1.05, webkitFilter: 'blur(4px)', ease: 'power4.inOut' }, .01)
                    .to('body', { overflow: 'hidden' }, .01)
                    .to('.fav-details-panel', { duration: 1.2, scaleX: 1, ease: 'slide'}, .6)
                    .to('.fav-details-panel-items-set-1', { 
                        opacity: 1, 
                        x: '0px', 
                        ease: 'power4.out',
                        duration: .75,
                        stagger: {
                            each: .15
                        }}, 1.35)
                    .to('.fav-details-panel-items-set-2', { 
                        opacity: 1, 
                        x: '0px', 
                        ease: 'power4.out',
                        duration: .75,
                        stagger: {
                            each: .15
                        }}, 1.35)
                    .to('.fav-details-panel-items-set-3', { 
                        opacity: 1, 
                        x: '0px', 
                        ease: 'power4.out',
                        duration: .75,
                        stagger: {
                            each: .15
                        }}, 1.35)
    }

    const handleClickFavClose = () => {
        let favDetailsTl = gsap.timeline()
        favDetailsTl.to('.fav-details-close', { duration: 0, pointerEvents: 'none'})
                    .to('.fav-details-panel-items-set-1', { opacity: 0, duration: .3,}, .01)
                    .to('.fav-details-panel-items-set-2', { opacity: 0, duration: .3,}, .01)
                    .to('.fav-details-panel-items-set-3', { opacity: 0, duration: .3,}, .01)
                    .to('.fav-details-panel-items-set-1', { x: '-50px', duration: 0,}, 1)
                    .to('.fav-details-panel-items-set-2', { x: '-50px', duration: 0,}, 1)
                    .to('.fav-details-panel-items-set-3', { x: '-50px', duration: 0,}, 1)
                    .to('.fav-details-panel', { duration: 1.2, scaleX: 0, ease: 'slide'}, .01)
                    .to('.section-1-fav-details', { duration: 1.5, scaleX: 0, ease: 'slide' }, .5)
                    .to('.landing-section-1', { duration: 1.5, scale: 1, webkitFilter: 'blur(0px)', ease: 'power4.inOut' }, .5)
                    .to('.landing-section-1', { pointerEvents: 'auto' }, 1.5)
                    .to('body', { overflow: 'visible' }, 2)
    }

    useEffect(() => {
        let toggleTl = gsap.timeline()
        toggleTl.to('.landing-section-1', { duration: .2, background: '#eaeaea' }, .01)
            .to('.apply-toggle', { duration: .2, color: 'black', fill: 'black' }, .01)
            .to('.slogan-2-diff', { duration: .2, border: '1px solid black' }, .01)
            .to('.section-1-panel-2', { duration: .2, background: 'black' }, .01)
            .to('.apply-toggle-background', { duration: .2, background: 'black' }, .01)
            .to('.section-1-github-icon', { duration: .2, fill: 'white' }, .01)
            .to('.section-1-gmail-icon', { duration: .2, fill: 'white' }, .01)
            .to('.section-1-linkedin-icon', { duration: .2, fill: 'white' }, .01)
            .to('.section-1-github-icon-container', { duration: .2, border: '1px solid rgba(0, 0, 0, 0.2)'})
            .to('.section-1-gmail-icon-container', { duration: .2, border: '1px solid rgba(0, 0, 0, 0.2)'})
            .to('.section-1-linkedin-icon-container', { duration: .2, border: '1px solid rgba(0, 0, 0, 0.2)'})
        toggleTl.pause()

        let toggleTlRev = gsap.timeline()
        toggleTlRev.to('.landing-section-1', { duration: .2, background: '#333333' }, .01)
            .to('.apply-toggle', { duration: .2, color: 'white', fill: 'white' }, .01)
            .to('.slogan-2-diff', { duration: .2, border: '1px solid white' }, .01)
            .to('.section-1-panel-2', { duration: .2, background: 'white' }, .01)
            .to('.apply-toggle-background', { duration: .2, background: 'white' }, .01)
            .to('.section-1-github-icon', { duration: .2, fill: 'black' }, .01)
            .to('.section-1-gmail-icon', { duration: .2, fill: '#CC3D2F' }, .01)
            .to('.section-1-linkedin-icon', { duration: .2, fill: '#0A66C2' }, .01)
            .to('.section-1-github-icon-container', { duration: .2, border: '1px solid rgba(255, 255, 255, 0.2)'})
            .to('.section-1-gmail-icon-container', { duration: .2, border: '1px solid rgba(255, 255, 255, 0.2)'})
            .to('.section-1-linkedin-icon-container', { duration: .2, border: '1px solid rgba(255, 255, 255, 0.2)'})
        toggleTlRev.pause()

        toggleClicked ?
            (
                toggleTl.play()
            )
            :
            (
                toggleTlRev.play()
            )
    }, [toggleClicked])

    useEffect(() => {
        let scrollTl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.landing-section-1',
                pin: true,
                start: 'top top',
                scrub: true,
                end: '+=1200%',
            }
        })
        scrollTl1.to('.section-1-slogan-1', { opacity: 0 })
            .to('.section-1-slogan-2', { opacity: 0 })
            .to('.section-1-button', { opacity: 0 })
            .to('.section-1-blob', { duration: .7, opacity: 0, ease: 'power4.out' })
            .to('.stage-1', { display: 'none' })
            .to('.section-1-panel-2', { scaleX: 0, duration: .8, ease: 'power4.inOut' })
            .to('.section-1-panel', { scaleX: 1, duration: .8, ease: 'power4.inOut' })
            .to('.section-1-intro-h1', { opacity: 1 })
            .to('.section-1-intro-p-1', { opacity: 1 })
            .to('.section-1-intro-p-2', { opacity: 1 })
            .to('.section-1-avt', { opacity: 1, y: 0 })
            .to('.section-1-icons', { opacity: 1 })
            .to('.stage-2', { duration: 1, pointerEvents: 'auto' })
            .to('.section-1-icons', { opacity: 0 })
            .to('.section-1-intro-h1', { opacity: 0 })
            .to('.section-1-intro-p-1', { opacity: 0 })
            .to('.section-1-intro-p-2', { opacity: 0 })
            .to('.stage-2', { pointerEvents: 'none' })
            .to('.section-1-panel', { scaleY: 1, duration: 1.2, ease: 'power4.out' })
            .to('.section-1-panel', { x: '100%', duration: 1.3, ease: 'power4.out' })
            .to('.section-1-panel', { transformOrigin: 'right bottom', duration: 0 })
            .to('.stage-2', { display: 'none' })
            .to('.section-1-avt', { duration: 0, opacity: 0, y: '150px' })
            .to('.section-1-panel', { scaleX: .65, duration: 1, ease: 'power4.inOut' })
            .to('.stage-3', {
                y: '0px',
                opacity: 1,
                pointerEvents: 'auto',
                stagger: {
                    each: .2
                }
            })
            .to('.section-1-gif', { opacity: 1 })
            .to('.section-1-panel', { background: 'black' })

        // let scrollTl2 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '.landing-section-1',
        //         pin: true,
        //         start: 'bottom 500px'
        //     }
        // })
    }, [])

    return (
        <div className='landing-page'>
            <div className='section-1-fav-details'>
                <div className={`${panelDetails === '1' ? 'details-should-display' : 'details-should-hide'} fav-details`}>
                    <Panel className='fav-details-panel' content={
                        <Fragment>
                            <span className='fav-details-panel-text fav-details-panel-items-set-1'>Main focus</span>
                            <div className='fav-details-panel-icons-con fav-details-panel-items-set-1'>
                                {ICON_DATA_WEB.map((icon) => (
                                    <img key={icon.id} className='fav-details-panel-icon fav-details-panel-items-set-1' src={icon.src} alt={icon.name}/>
                                ))}
                            </div>
                            <Button className='fav-details-panel-button fav-details-panel-items-set-1' content='See all skills'/>
                        </Fragment>
                    }>
                    </Panel>
                    <CloseIconLine onClick={() => {handleClickFavClose()}} className='fav-details-close fav-details-panel-items-set-1'/>
                </div>
                <div className={`${panelDetails === '2' ? 'details-should-display' : 'details-should-hide'} fav-details`}>
                    <Panel className='fav-details-panel' content={
                        <Fragment>
                            <span className='fav-details-panel-text fav-details-panel-items-set-2'>Main focus</span>
                            <div className='fav-details-panel-icons-con fav-details-panel-items-set-2'>
                                {ICON_DATA_ANIM.map((icon) => (
                                    <img key={icon.id} className='fav-details-panel-icon fav-details-panel-items-set-2' src={icon.src} alt={icon.name}/>
                                ))}
                            </div>
                            <Button className='fav-details-panel-button fav-details-panel-items-set-2' content='See all skills'/>
                        </Fragment>
                    }>
                    </Panel>
                    <CloseIconLine onClick={() => {handleClickFavClose()}} className='fav-details-close fav-details-panel-items-set-2'/>
                </div>
                <div className={`${panelDetails === '3' ? 'details-should-display' : 'details-should-hide'} fav-details`}>
                    <Panel className='fav-details-panel' content={
                        <Fragment>
                            <span className='fav-details-panel-text fav-details-panel-items-set-3'>Main focus</span>
                            <div className='fav-details-panel-icons-con fav-details-panel-items-set-3'>
                                {ICON_DATA_DES.map((icon) => (
                                    <img key={icon.id} className='fav-details-panel-icon fav-details-panel-items-set-3' src={icon.src} alt={icon.name}/>
                                ))}
                            </div>
                            <Button className='fav-details-panel-button fav-details-panel-items-set-3' content='See all skills'/>
                        </Fragment>
                    }>
                    </Panel>
                    <CloseIconLine onClick={() => {handleClickFavClose()}} className='fav-details-close fav-details-panel-items-set-3'/>
                </div>
            </div>

            <section className='landing-section-1'>
                {/* STAGE 1 */}
                <span className='section-1-slogan-1 apply-toggle stage-1'>a <span className='slogan-1-sig'>&nbsp;well-rounded</span> <span className='slogan-1-diff apply-toggle'>&nbsp;&#60;DEVELOPER /&#62;</span></span>
                <span className='section-1-slogan-2 apply-toggle stage-1'>that has a <span className='slogan-2-sig'>&nbsp;passion</span> &nbsp;for&nbsp;&nbsp;&nbsp;<span className='slogan-2-diff apply-toggle'>design</span></span>
                <Button onClick={() => { handleClickButton() }} className='section-1-button stage-1' content='contact me' />
                <Blob className='section-1-blob stage-1' />
                <Panel className='section-1-panel ' content={<img className='section-1-gif' src={Gif} alt="" />} />
                <Panel className='section-1-panel-2 apply-toggle' />

                {/* STAGE 2 */}
                <span className='section-1-intro-h1 stage-2'>Hi, <img className='section-1-intro-hands' src={Hands} alt="" /></span>
                <span className='section-1-intro-p-1 apply-toggle stage-2'>I'm currently a sophomore at Union College, NY</span>
                <span className='section-1-intro-p-2 apply-toggle stage-2'>I'm majoring in
                    <span className='section-1-intro-p-sig-yellow'> Computer Science </span>
                    and minoring in
                    <span className='section-1-intro-p-sig-yellow'> Math </span>
                    and
                    <span className='section-1-intro-p-sig-yellow'> Digital Media </span></span>
                <img className='section-1-avt stage-2' src={Avt} alt="" />
                <div className='section-1-icons section-1-github-icon-container stage-2'>
                    <a href="https://github.com/tuanminh160302" target='_blank' rel="noreferrer">
                        <GithubIcon className='section-1-github-icon apply-toggle-background' />
                    </a>
                </div>
                <div className='section-1-icons section-1-gmail-icon-container stage-2'>
                    <a href="mailto: canhtuan09@gmail.com">
                        <GmailIcon className='section-1-gmail-icon apply-toggle-background' />
                    </a>
                </div>
                <div className='section-1-icons section-1-linkedin-icon-container stage-2'>
                    <a href="https://www.linkedin.com/in/steve-nguyen-a33607153/" target='_blank' rel="noreferrer">
                        <LinkedinIcon className='section-1-linkedin-icon apply-toggle-background' />
                    </a>
                </div>

                {/* {STAGE 3} */}
                <span className='section-1-fav-1 apply-toggle stage-3'>I love to <span className='fav-1-sig'>&nbsp;create</span></span>
                <div className='section-1-fav-panel-container stage-3'>
                    <Panel className='section-1-fav-panel fav-panel-1' content={
                        <Fragment>
                            <FavIcon1 className='fav-panel-icon' />
                            <span className='fav-panel-text'>pixel-perfect web applications</span>
                            <NextIcon className='fav-panel-next next-1' onClick={(e) => { handleClickNextIcon(e) }} />
                        </Fragment>
                    } />
                    <Panel className='section-1-fav-panel fav-panel-2' content={
                        <Fragment>
                            <FavIcon2 className='fav-panel-icon' />
                            <span className='fav-panel-text'>sleek animations</span>
                            <NextIcon className='fav-panel-next next-2' onClick={(e) => { handleClickNextIcon(e) }} />
                        </Fragment>
                    } />
                    <Panel className='section-1-fav-panel fav-panel-3' content={
                        <Fragment>
                            <FavIcon3 className='fav-panel-icon' />
                            <span className='fav-panel-text'>robust design prototypes</span>
                            <NextIcon className='fav-panel-next next-3' onClick={(e) => { handleClickNextIcon(e) }} />
                        </Fragment>
                    } />
                </div>
                <Button className='section-1-fav-button stage-3' content='find out more' />


            </section>

            {/* <section className='landing-section-2'>

            </section> */}
        </div>
    )
}

const mapStateToProps = ({ toggle }) => ({
    toggleClicked: toggle.toggle
})

export default connect(mapStateToProps)(LandingPage)
