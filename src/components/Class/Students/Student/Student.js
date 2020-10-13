import React from 'react';
import Aux from '../../../../hoc/Auxs';
import WithClass from '../../../../hoc/withClass';
import classes from './Student.css';

const student = (props) => {
    console.log(props.id);
    return (
        <Aux>
            <div className={classes.Card}
            onClick={props.clicked}>
                <h2>{props.name}</h2>
                <h2>{props.score}</h2>
                {props.id === props.activeId ? <div className="button">
                    <button onClick={props.handlePlusScore}>+</button>
                    <button onClick={props.handleMinusScore}>-</button>
                </div> : null}
                
                
            </div>
        </Aux>
        
    )
}

export default WithClass(student, classes.Student);