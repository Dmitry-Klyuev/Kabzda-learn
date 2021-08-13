import React, {useState} from "react";

type UnControlledAccordionType = {
    title: string
}

export function UnControlledAccordion(props:UnControlledAccordionType ) {
    const [collapsed, setCollapsed] = useState(true)

    console.log('UnControlledAccordion rendering')
    return (
        <div onClick={ ()=>{setCollapsed(!collapsed)} }>
            <AccordionTittle title={props.title}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTittlePropsType = {
    title: string
}

function AccordionTittle(props: AccordionTittlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}