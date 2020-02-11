import React, { useState, useEffect, createRef } from 'react';
import {setSmurf} from '../actions';
import { connect } from 'react-redux';

const Smurf = ({smurf, setSmurf}) => {
    const nameRef = createRef();
    const [nameSelected, setNameSelected] = useState(false);
    const [nameInForm, setNameInForm] = useState(smurf.name);

    useEffect(() => {
        if (nameSelected) {
            nameRef.current.focus();
        }
    }, [nameSelected]);

    return (
        <div className="smurf">
            { nameSelected ? 
                <input
                    ref={nameRef}
                    type="text"
                    value={nameInForm}
                    onChange={ev => setNameInForm(ev.target.value)}
                    onKeyDown={ev => {
                        if (ev.key === "Enter") {
                            setSmurf(smurf.id, nameInForm, smurf.age, smurf.height);
                            setNameSelected(false);
                        } else if (ev.key === "Escape") {
                            setNameInForm(smurf.name);
                            setNameSelected(false);
                        }
                    }}
                    onBlur={() => {
                        setNameInForm(smurf.name);
                        setNameSelected(false);
                    }}
                />    
            :
                <h2 key="name" onDoubleClick={() => {setNameSelected(true)}}>{smurf.name}</h2>
            }
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
        </div>
    )
}

export default connect(
    null, {
        setSmurf
    }
)(Smurf);