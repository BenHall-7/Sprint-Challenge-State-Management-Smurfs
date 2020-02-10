import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchSmurfs} from '../actions';
import Smurf from './Smurf';

const SmurfList = ({smurfs, is_fetching, error, fetchSmurfs}) => {
    useEffect(() => {
        fetchSmurfs();
    }, []);

    if (is_fetching) {
        return <div className="smurfs">Fetching data...</div>
    }

    if (error) {
        return <div className="smurfs">Error fetching data.</div>
    }

    return (
        <div className="smurfs">
            {smurfs.map((smurf, index) => <Smurf smurf={smurf} key={index}/>)}
        </div>
    )
}

export default connect(
    ({smurfs, is_fetching, error}) => ({
        smurfs,
        is_fetching,
        error
    }), {
        fetchSmurfs
    }
)(SmurfList);