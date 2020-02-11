import React, { useState } from 'react';
import { connect } from 'react-redux';
import {addSmurf} from '../actions';

const Form = ({addSmurf}) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");

    return (
        <form>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={ev => setName(ev.target.value)}
            />
            <input
                type="text"
                placeholder="Age"
                value={age}
                onChange={ev => setAge(ev.target.value)}
            />
            <input
                type="text"
                placeholder="Height"
                value={height}
                onChange={ev => setHeight(ev.target.value)}
            />
            <button onClick={ev => {
                ev.preventDefault();
                addSmurf(name, age, height);
            }}>Submit</button>
        </form>
    )
}

export default connect(
    null, {
        addSmurf
    }
)(Form);