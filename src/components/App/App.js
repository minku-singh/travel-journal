import React from 'react';
import Card from '../Card/Card';
import './App.css';
import data from './../../data';
import Header from './../Header/Header'

function App() {
    const cards = data.map(item => {
        return(
            <Card 
                key = {item.id}
                img = {item.image}
                location = {item.location}
                title = {item.title}
                date = {item.date}
                description = {item.description}
                map = {item.map}
            />
        )
    })

    return (
        <div>
            <Header />
            {cards}
        </div>
    )
}

export default App
