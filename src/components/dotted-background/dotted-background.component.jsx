import React, { useState, useEffect, useRef } from 'react';

import ReactDOM from 'react-dom'

import './dotted-background.styles.scss'

const DottedBackground = () => {

    const dottedDivRef = useRef()

    const getDots = (width, height) => {
        const vDots = Math.floor((height - 15) / (15 + 300)) + 1
        const hDots = Math.floor((width - 15) / (15 + 50)) + 1
        const node_list = document.getElementsByClassName('dotted-background')
        for (let i=0; i < 5; i++) {
            const node = node_list[i]
            const nativeDottedDiv = ReactDOM.findDOMNode(node)
            for (let i = 0; i < vDots; i++) {
                const dotListHorizontal = document.createElement("div")
                dotListHorizontal.classList.add('dot-list-horizontal')
                for (let i = 0; i < hDots; i++) {
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
        getDots(dottedDivWidth, dottedDivHeight)

    }, [])

    return (
        <div ref={dottedDivRef} className='dotted-background'>

        </div>
    )
}

export default DottedBackground