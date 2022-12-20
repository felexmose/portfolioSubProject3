import React from 'react';

function ActorCard({actor}) {
  return(
    <div className="">     
      <div>
        <h2>{actor.primaryName}</h2>
        <p>{actor.birthYear}</p>
        <p>{actor.primaryProfessions}</p>
      </div>
    </div>
  );
}

export default ActorCard;