import React from 'react';
import { Cuisine, cuisineImage } from '../../models/cuisine';

export const CuisineCardComponent = ({ title, price, image = cuisineImage }: Cuisine) => {
    return (
        <div className='card-item'>
            <ins>Cuisine</ins>
            <img src={`assets/images/${image}`} alt={title} title={title} />
            <strong>{title}</strong>
            <br/>
            <small>Price: Rs.{price}</small>
        </div>
    );
}