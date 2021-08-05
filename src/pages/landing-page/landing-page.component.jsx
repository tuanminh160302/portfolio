import React, { useState, useEffect } from 'react';
import './landing-page.styles.scss'
import { ReactComponent as BlurryBg1 } from '../../assets/svg/blurry-bg-1.svg';

import Button from '../../components/button/button.component';
import Panel from '../../components/panel/panel.component';

import gsap from 'gsap'

const LandingPage = (props) => {

    const [buttonClicked, setButtonClicked] = useState(false)

    const handleClickButton = () => {
        setButtonClicked(!buttonClicked)
        let buttonClickTl = gsap.timeline()
        buttonClickTl.to('.section-1-panel', { scaleX: 1, duration: .8, ease: 'power4.inOut'})
                     .to('.section-1-panel', { scaleY: 1, duration: 1.2, ease: 'power4.out'}, 0.5)
                     .to('.section-1-panel', { x: '100%', duration: 2, ease: 'power4.out'}, 0.6)
                     .to('.section-1-panel', { transformOrigin: 'right bottom', duration: 0}, .75)
                     .to('.section-1-panel', { scaleX: .8, duration: 1, ease: 'power4.inOut'}, .75)
        buttonClickTl.pause()
        buttonClickTl.play()

        // buttonClickTl.reverse(0)
    }

    useEffect(() => {
        console.log(buttonClicked)
    }, [buttonClicked])

    return (
        <div className='landing-page'>
            <section className='landing-section-1'>
                <BlurryBg1 className='section-1-background'/>
                <span className='section-1-slogan-1'>a <span className='slogan-1-sig'>&nbsp;well-rounded</span> <span className='slogan-1-diff'>&nbsp;&#60;DEVELOPER /&#62;</span></span>
                <span className='section-1-slogan-2'>that has a <span className='slogan-2-sig'>&nbsp;passion</span> &nbsp;for&nbsp;&nbsp;&nbsp;<span className='slogan-2-diff'>design</span></span>
                <Button onClick={() => {handleClickButton()}} className='section-1-button' content='hit me up' />
                <Panel className='section-1-panel'/>
            </section>
        </div>
    )
}

export default LandingPage
