import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Raiting/Rating";


// function sum(a,b)

function App() {
    return (
        <div>
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'My friend'}/>

            Article 1
            <Rating value={1} />
            <Accordion title={'Hello'} collapsed={true}/>
            <Accordion title={'My dear fried'} collapsed={false} />
            Article 2
            <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
        </div>
    );
}

function PageTitle (props: any){
    return (
        <h1>{props.title}</h1>
    );
}



export default App;
