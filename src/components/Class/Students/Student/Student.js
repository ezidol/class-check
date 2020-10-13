import React from 'react';
import Aux from '../../../../hoc/Aux';
import WithClass from '../../../../hoc/withClass';
import classes from './Student.css';

const student = (props) => {
    console.log(props.id);
    return (
        <Aux>
            <div
            onClick={props.clicked}>
                <h3>{props.name}</h3>
                <h3>{props.score}</h3>
                {props.id === props.activeId ? <div className="button">
                    <button onClick={props.handlePlusScore}>+</button>
                    <button onClick={props.handleMinusScore}>-</button>
                </div> : null}
                
                
            </div>
        </Aux>
        
    )
}

export default WithClass(student, classes.Student);