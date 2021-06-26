import React, {useState} from "react";

type OnOffType = {

}

export const OnOff = (props: OnOffType) => {

    let [on, setOn] = useState(true)

    const OnStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white'

    }
    const OffStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const IndicatorStyle = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft: '3px',
        backgroundColor: on ? 'green' : 'red'
    }

    return(
        <div>
            <div style={OnStyle} onClick={ ()=>{setOn(true)} }>On</div>
            <div style={OffStyle} onClick={ ()=>{setOn(false)} }>Off</div>
            <div style={IndicatorStyle}> </div>
        </div>
    )
}