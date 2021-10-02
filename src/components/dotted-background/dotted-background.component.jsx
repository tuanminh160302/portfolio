import React, { useState, useEffect, useRef } from 'react';

import ReactDOM from 'react-dom'

import './dotted-background.styles.scss'

const DottedBackground = ({runOnce}) => {

    const dottedDivRef = useRef()

    const getDots = (width, height) => {
        const vDots = Math.floor((height - 15) / (15 + 60)) + 1
        const hDots = Math.floor((width - 15) / (15 + 80)) + 1
        const node_list = document.getElementsByClassName('dotted-background')
        for (let n=0; n < node_list.length; n++) {
            const node = node_list[n]
            const nativeDottedDiv = ReactDOM.findDOMNode(node)
            for (let i = 0; i < vDots; i++) {
                const dotListHorizontal = document.createElement("div")
                dotListHorizontal.classList.add('dot-list-horizontal')
                for (let k = 0; k < hDots; k++) {
                    const dot = document.createElement("div")
                    dot.classList.add('dot')
                    dotListHorizontal.appendChild(dot)
                }
                nativeDottedDiv.appendChild(dotListHorizontal)
            }
        }
    }

    useEffect(() => {
        const dottedDiv = dottedDivRef.current
        const dottedDivHeight = dottedDiv.clientHeight
        const dottedDivWidth = dottedDiv.clientWidth
        if (runOnce === true) {
            getDots(dottedDivWidth, dottedDivHeight)
        }
    }, [runOnce])

    return (
        <div ref={dottedDivRef} className='dotted-background'>

        </div>
    )
}

export default DottedBackground