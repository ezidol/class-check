import React from 'react';
import Aux from '../../../../hoc/Auxs';
import './Student.css';

const student = (props) => {
    console.log(props.id);
    return (
        <Aux>
            <div className="Student"
            onClick={props.clicked}>
                <div className="Name"><h2>{props.name}</h2></div>
                <div className="Score"><h2>{props.score}</h2> </div>
                
                {props.id === props.activeId ? <div className="Button">
                    <button onClick={props.handlePlusScore}>+</button>
                    <button onClick={props.handleMinusScore}>-</button>
                </div> : null}
                
                
            </div>
        </Aux>
        
    )
}

export default student;