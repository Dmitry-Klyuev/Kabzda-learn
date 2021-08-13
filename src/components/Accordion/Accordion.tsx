import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: true | false
    setCollapsed: (value: boolean) => void
}

function Accordion(props: AccordionPropsType) {
    console.log('UnControlledAccordion rendering')
    return (
        <div>
            <AccordionTittle title={props.title} onClick={ ()=>{props.setCollapsed(!props.collapsed)} }/>

            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTittlePropsType = {
    title: string
    onClick: ()=>void
}

function AccordionTittle(props: AccordionTittlePropsType) {
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
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

export default Accordion;