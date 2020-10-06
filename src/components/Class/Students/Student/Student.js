import React from 'react';

const student = (props) => {
    return (
        <div className="stuent"
        onClick={props.clicked}>
            <h1>{props.name}</h1>
            <h2>{props.score}</h2>
        </div>
    )
}

export default student;