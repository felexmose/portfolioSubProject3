import React from 'react';
import ActorCard from '../components/ActorCard';

function ActorSearchList({ filteredActors }) {
  const filtered = filteredActors.map(actor =>  <ActorCard key={actor.id} actor={actor} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default ActorSearchList;