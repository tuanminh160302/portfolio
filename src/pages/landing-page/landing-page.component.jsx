import React, { useState, useEffect } from 'react';
import './landing-page.styles.scss'

import { connect } from 'react-redux';
import { setToggle } from '../../redux/toggle/toggle.actions';

import { ReactComponent as Blob } from '../../assets/svg/blob.svg';
import { ReactComponent as VolumeMute } from '../../assets/svg/volume-mute.svg';
import { ReactComponent as Toggle } from '../../assets/svg/toggle.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';
import { ReactComponent as GmailIcon } from '../../assets/svg/gmail.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/svg/linkedin.svg';
import { ReactComponent as FavIcon1 } from '../../assets/svg/fav-panel-1.svg';
import { ReactComponent as FavIcon2 } from '../../assets/svg/fav-panel-2.svg';
import { ReactComponent as FavIcon3 } from '../../assets/svg/fav-panel-3.svg';
import { ReactComponent as NextIcon } from '../../assets/svg/next-icon.svg';

import Gif from '../../assets/img/gif.gif'
import Avt from '../../assets/img/avt.jpg'
import Hands from '../../assets/img/hands-emoji.png'

import Button from '../../components/button/button.component';
import Panel from '../../components/panel/panel.component';

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Fragment } from 'react';
gsap.registerPlugin(ScrollTrigger)

const LandingPage = ({ toggleClicked, setToggle }) => {

    const [buttonClicked, setButtonClicked] = useState(false)
    const [volumeClicked, setVolumeClicked] = useState(false)
    const [panelDetails, setPanelDetails] = useState(0)
    // const [toggleClicked, setToggleClicked] = useState(false)

    const handleClickVolume = () => {
        setVolumeClicked(!volumeClicked)
    }

    const handleClickToggle = () => {
        // setToggleClicked(!toggleClicked)
        setToggle()
    }

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
        gsap.to('.section-1-fav-details', { duration: 1.2, scaleX: 1, ease: 'power4.inOut'})
    }

    useEffect(() => {
        let toggleTl = gsap.timeline()
        toggleTl.to('#circle', { duration: .2, x: '100%', fill: 'white' })
            .to('#sun', { duration: .2, fill: 'white' }, .01)
            .to('#box', { duration: .2, fill: 'black' }, .01)
            .to('.landing-section-1', { duration: .2, background: '#eaeaea' }, .01)
            .to('.section-1-volume-mute path', { duration: .2, fill: 'black' }, .01)
            .to('.apply-toggle', { duration: .2, color: 'black', fill: 'black' }, .01)
            .to('.slogan-2-diff', { duration: .2, border: '1px solid black' }, .01)
            .to('.section-1-panel-2', { duration: .2, background: 'black' }, .01)
            .to('.apply-toggle-background', { duration: .2, background: 'black' }, .01)
            .to('.section-1-github-icon', { duration: .2, fill: 'white' }, .01)
            .to('.section-1-gmail-icon', { duration: .2, fill: 'white' }, .01)
            .to('.section-1-linkedin-icon', { duration: .2, fill: 'white' }, .01)
        toggleTl.pause()

        let toggleTlRev = gsap.timeline()
        toggleTlRev.to('#circle', { duration: .2, x: '0', fill: 'black' })
            .to('#sun', { duration: .2, fill: 'black' }, .01)
            .to('#box', { duration: .2, fill: 'white' }, .01)
            .to('.landing-section-1', { duration: .2, background: '#333333' }, .01)
            .to('.section-1-volume-mute path', { duration: .2, fill: 'white' }, .01)
            .to('.apply-toggle', { duration: .2, color: 'white', fill: 'white' }, .01)
            .to('.slogan-2-diff', { duration: .2, border: '1px solid white' }, .01)
            .to('.section-1-panel-2', { duration: .2, background: 'white' }, .01)
            .to('.apply-toggle-background', { duration: .2, background: 'white' }, .01)
            .to('.section-1-github-icon', { duration: .2, fill: 'black' }, .01)
            .to('.section-1-gmail-icon', { duration: .2, fill: '#CC3D2F' }, .01)
            .to('.section-1-linkedin-icon', { duration: .2, fill: '#0A66C2' }, .01)
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
            .to('.section-1-panel', { x: '100%', duration: 2, ease: 'power4.out' })
            .to('.section-1-panel', { transformOrigin: 'right bottom', duration: 0 })
            .to('.stage-2', { display: 'none' })
            .to('.section-1-avt', { duration: 0, opacity: 0, y: '150px' })
            .to('.section-1-panel', { scaleX: .65, duration: 1, ease: 'power4.inOut' })
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
            <VolumeMute className={`${volumeClicked ? 'unmute' : null} section-1-volume-mute`} onClick={() => handleClickVolume()} />
            <Toggle className='section-1-toggle' onClick={() => handleClickToggle()} />
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
                            <NextIcon className='fav-panel-next next-1' onClick={(e) => {handleClickNextIcon(e)}}/>
                        </Fragment>
                    } />
                    <Panel className='section-1-fav-panel fav-panel-2' content={
                        <Fragment>
                            <FavIcon2 className='fav-panel-icon' />
                            <span className='fav-panel-text'>sleek animations</span>
                            <NextIcon className='fav-panel-next next-2' onClick={(e) => {handleClickNextIcon(e)}}/>
                        </Fragment>
                    } />
                    <Panel className='section-1-fav-panel fav-panel-3' content={
                        <Fragment>
                            <FavIcon3 className='fav-panel-icon' />
                            <span className='fav-panel-text'>robust design prototypes</span>
                            <NextIcon className='fav-panel-next next-3' onClick={(e) => {handleClickNextIcon(e)}}/>
                        </Fragment>
                    } />
                </div>
                <Button className='section-1-fav-button stage-3' content='find out more' />

                <div className='section-1-fav-details stage-3'>
                    <span className={`${panelDetails === '1' ? 'details-should-display' : 'details-should-hide'} fav-details`}>1</span>
                    <span className={`${panelDetails === '2' ? 'details-should-display' : 'details-should-hide'} fav-details`}>2</span>
                    <span className={`${panelDetails === '3' ? 'details-should-display' : 'details-should-hide'} fav-details`}>3</span>
                </div>
            </section>

            {/* <section className='landing-section-2'>

            </section> */}
        </div>
    )
}

const mapStateToProps = ({ toggle }) => ({
    toggleClicked: toggle.toggle
})

const mapDispatchToProps = (dispatch) => ({
    setToggle: () => { dispatch(setToggle()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
