import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: true | false
}

function Accordion(props: AccordionPropsType){
    console.log('Accordion rendering')
    if (props.collapsed){
        return (
            <div>
                <AccordionTittle title={props.title} />
            </div>
        )
    }else{
        return(
            <div>
                <AccordionTittle title={props.title} />
                <AccordionBody />
            </div>
        )
    }

}

type AccordionTittlePropsType = {
    title: string
}

function AccordionTittle(props: AccordionTittlePropsType){
    return  (
        <h3>{props.title}</h3>
    )
}


function AccordionBody(){
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
export default Accordion;