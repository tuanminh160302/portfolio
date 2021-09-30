import React, {useState, useEffect} from 'react';

import './taskbar.styles.scss'

import { connect } from 'react-redux';

import { setToggle } from '../../redux/toggle/toggle.actions';

import { ReactComponent as VolumeMute } from '../../assets/svg/volume-mute.svg';
import { ReactComponent as Toggle } from '../../assets/svg/toggle.svg';

import { gsap } from 'gsap'

const Taskbar = ({setToggle, toggleClicked}) => {

    const [volumeClicked, setVolumeClicked] = useState(false)

    const handleClickToggle = () => {
        setToggle()
    }

    const handleClickVolume = () => {
        setVolumeClicked(!volumeClicked)
    }

    useEffect(() => {
        let toggleTl = gsap.timeline()
        toggleTl.to('#circle', { duration: .2, x: '100%', fill: 'white' })
            .to('#sun', { duration: .2, fill: 'white' }, .01)
            .to('#box', { duration: .2, fill: 'black' }, .01)
            .to('.volume-mute path', { duration: .2, fill: 'black'}, .01)
        toggleTl.pause()

        let toggleTlRev = gsap.timeline()
        toggleTlRev.to('#circle', { duration: .2, x: '0', fill: 'black' })
            .to('#sun', { duration: .2, fill: 'black' }, .01)
            .to('#box', { duration: .2, fill: 'white' }, .01)
            .to('.volume-mute path', { duration: .2, fill: 'white' }, .01)
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

    return(
        <div className='taskbar'>
            <VolumeMute className={`${volumeClicked ? 'unmute' : null} volume-mute`} onClick={() => handleClickVolume()} />
            <Toggle className='toggle' onClick={() => handleClickToggle()} />
        </div>
    )
}

const mapStateToProps = ({toggle}) => ({
    toggleClicked: toggle.toggle
})

const mapDispatchToProps = (dispatch) => ({
    setToggle: () => {dispatch(setToggle())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Taskbar)