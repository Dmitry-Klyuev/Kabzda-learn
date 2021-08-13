import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Raiting/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {OnOffNew} from "./components/OnOff/OnOffNew";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRaiting/UnControlledRating";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <OnOffNew/>
            <OnOff />
            <OnOff />
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'My friend'}/>


            ---------====== Controlled Accodrion =====------
            <Accordion title={'My dear fried'} collapsed={collapsed} setCollapsed={setCollapsed}/>

            -----===== Uncontrolled Accordion ==========----
            <UnControlledAccordion title={'Menu -=click me=-'}/>
            {/*<UnControlledAccordion title={'Users'}/>*/}

            ------==== UnControlledRating=====-----
            <UnControlledRating/>

            ------=====Controlled Rating===--------
            <Rating value={ratingValue}
                    setRating={setRatingValue}
            />
            {/*<Rating value={1} />*/}
            {/*<Rating value={2} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}
        </div>
    );
}

function PageTitle (props: any){
    return (
        <h1>{props.title}</h1>
    );
}



export default App;
