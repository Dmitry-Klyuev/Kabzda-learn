import React, {useState} from "react";

export const UnControlledRating = () => {
    const [state, setState] = useState(true)

    const clickStar = () => {
        setState(!state)
    }

    return (
        <div>
            <Star state={state} />
            <Star state={state} clickStar={clickStar}/>
            <Star state={state} clickStar={clickStar}/>
            <Star state={state} clickStar={clickStar}/>
            <Star state={state} clickStar={clickStar}/>
        </div>
    )
}

type StarType = {
    state: boolean
    clickStar: () => void
}

function Star(props: StarType) {


    return(
        <>
        {props.state ? <span onClick={props.clickStar}>star </span> : <span><b>star </b></span>}
        </>
    )
}
