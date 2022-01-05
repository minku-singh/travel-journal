import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className='card'>
            <img className='card--img' src={props.img} alt='mount-fuji' />
            <div className="right">
                <div className="location">
                    <p>{props.location}</p>
                    <a href={props.map}>view on maps</a>
                </div>
                <h2>{props.title}</h2>
                <p><strong>{props.date}</strong></p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
