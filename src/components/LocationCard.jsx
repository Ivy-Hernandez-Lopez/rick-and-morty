import React from 'react';
import './styles/locationCard.css';

const LocationCard = ({location}) => {
  return (
    <section className='location'>
        <h2 className='location_title'>{location?.name}</h2>
        <ul className='location_list'>
            <li className='location_item'><span>Type: </span>{location?.type}</li>
            <li className='location_item'><span>Dimension: </span>{location?.dimension}</li>
            <li className='location_item'><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </section>
  )
}

export default LocationCard;