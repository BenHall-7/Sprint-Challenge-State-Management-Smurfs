import React from 'react';

const Smurf = ({smurf}) => {
    return (
        <div className="smurf">
            <h2>{smurf.name}</h2>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
        </div>
    )
}

export default Smurf;