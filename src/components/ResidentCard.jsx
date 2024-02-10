import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import './styles/residentCard.css'

const ResidentCard = ({url}) => {

    const [resident, getResident] = useFetch();

    useEffect(() => {
      getResident(url);
    }, []);
    
  return (
    <article className='resident'>
      <figure className='resident_photo'>
        <img src={resident?.image} alt="resident image" />
        <figcaption className='resident_status'>
          <div className={`resident_circle ${resident?.status}`}></div>
          <p>{resident?.status}</p>
        </figcaption>
      </figure>
      <h3 className='resident_name'>{resident?.name}</h3>
      <hr />
      <ul className='resident_list'>
        <li className='resident_item'><span>Specie</span><span>{resident?.species}</span></li>
        <li className='resident_item'><span>Origin</span><span>{resident?.origin.name}</span></li>
        <li className='resident_item'><span>Eppisodes where appear</span><span>{resident?.episode.length}</span></li>
      </ul>
    </article>
  )
}

export default ResidentCard;