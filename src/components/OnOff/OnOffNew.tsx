import React, {useState} from "react"


export const OnOffNew = () => {
    const [onOff, seoOnOff] = useState(false)
    const onStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: onOff ? 'green' : ''
    }

    const offStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid black',
        backgroundColor: !onOff ? 'red' : ''
    }

    const circleStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '30px',
        display: 'inline-block',
        background: onOff ? 'green' : 'red',
        margin: '2px'
    }

    return (
        <div style={{display: 'flex'}}>
            <div style={onStyle} onClick={ ()=> {seoOnOff(true) }}>on</div>
            <div style={offStyle} onClick={ ()=> {seoOnOff(false) }}>off</div>
            <div style={circleStyle}>.</div>
        </div>
    )
}