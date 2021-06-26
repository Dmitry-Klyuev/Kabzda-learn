import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

function UnControlledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTittle title={'Hello, i am uncontrolled'} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTittlePropsType = {
    title: string
    setCollapsed: (collapsed:boolean)=>void
    collapsed: boolean
}

function AccordionTittle(props: AccordionTittlePropsType) {
    return (
        <h3 onClick={ ()=>{props.setCollapsed(!props.collapsed)} }>{props.title}</h3>
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

export default UnControlledAccordion;