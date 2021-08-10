import React, { useState, useEffect } from 'react';
import './landing-page.styles.scss'
import { ReactComponent as BlurryBg1 } from '../../assets/svg/blurry-bg-1.svg';
import { ReactComponent as Blob } from '../../assets/svg/blob.svg';
import { ReactComponent as VolumeMute } from '../../assets/svg/volume-mute.svg';
import { ReactComponent as Toggle } from '../../assets/svg/toggle.svg';
import Button from '../../components/button/button.component';
import Panel from '../../components/panel/panel.component';

import gsap from 'gsap'

const LandingPage = (props) => {

    const [buttonClicked, setButtonClicked] = useState(false)
    const [volumeClicked, setVolumeClicked] = useState(false)
    const [toggleClicked, setToggleClicked] = useState(false)

    const handleClickVolume = () => {
        setVolumeClicked(!volumeClicked)
    }

    const handleClickToggle = () => {
        setToggleClicked(!toggleClicked)
    }

    const handleClickButton = () => {
        setButtonClicked(!buttonClicked)
        let buttonClickTl = gsap.timeline()
        buttonClickTl.to('.section-1-panel-2', {scaleX: 0, duration: .8, ease: 'power4.inOut'})
                     .to('.section-1-panel', { scaleX: 1, duration: .8, ease: 'power4.inOut'}, .8)
                     .to('.section-1-panel', { scaleY: 1, duration: 1.2, ease: 'power4.out'}, 1.3)
                     .to('.section-1-panel', { x: '100%', duration: 2, ease: 'power4.out'}, 1.4)
                     .to('.section-1-panel', { transformOrigin: 'right bottom', duration: 0}, 1.55)
                     .to('.section-1-panel', { scaleX: .8, duration: 1, ease: 'power4.inOut'}, 1.55)
                     .to('.section-1-blob', { duration: .7, opacity: 0, ease: 'power4.out'}, .9)
    }

    useEffect(() => {
        let toggleTl = gsap.timeline()
        toggleTl.to('#circle', {duration: .2, x: '100%', fill: 'white'})
                .to('#sun', {duration: .2, fill: 'white'}, .1)
                .to('#box', {duration: .2, fill: 'black'}, .01)
                .to('.landing-section-1', {duration: .2, background: '#ebebeb'}, .01)
                .to('.section-1-volume-mute path', {duration: .2, fill: 'black'}, .01)
                .to('.apply-toggle', {duration: .2, color: 'black', fill: 'black'}, .01)
                .to('.slogan-2-diff', {duration: .2, border: '1px solid black'}, .01)
        toggleTl.pause()

        let toggleTlRev = gsap.timeline()
        toggleTlRev.to('#circle', {duration: .2, x: '0', fill: 'black'})
                .to('#sun', {duration: .2, fill: 'black'}, .1)
                .to('#box', {duration: .2, fill: 'white'}, .01)
                .to('.landing-section-1', {duration: .2, background: 'black'}, .01)
                .to('.section-1-volume-mute path', {duration: .2, fill: 'white'}, .01)
                .to('.apply-toggle', {duration: .2, color: 'white', fill: 'white'}, .01)
                .to('.slogan-2-diff', {duration: .2, border: '1px solid white'}, .01)
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

    return (
        <div className='landing-page'>
            <section className='landing-section-1'>
                <BlurryBg1 className='section-1-background'/>
                <span className='section-1-slogan-1 apply-toggle'>a <span className='slogan-1-sig'>&nbsp;well-rounded</span> <span className='slogan-1-diff apply-toggle'>&nbsp;&#60;DEVELOPER /&#62;</span></span>
                <span className='section-1-slogan-2 apply-toggle'>that has a <span className='slogan-2-sig'>&nbsp;passion</span> &nbsp;for&nbsp;&nbsp;&nbsp;<span className='slogan-2-diff apply-toggle'>design</span></span>
                <Button onClick={() => {handleClickButton()}} className='section-1-button' content='hit me up' />
                <Blob className='section-1-blob'/>
                <Panel className='section-1-panel'/>
                <Panel className='section-1-panel-2 apply-toggle'/>
                <VolumeMute className={`${volumeClicked ? 'unmute' : null} section-1-volume-mute`} onClick={() => handleClickVolume()}/>
                <Toggle className='section-1-toggle' onClick={() => handleClickToggle()}/>
            </section>
        </div>
    )
}

export default LandingPage
