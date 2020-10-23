import React from 'react';
import Student from './Student/Student';
import './Students.css';

const students = (props) => {
    
    const student_list = 
        props.studentList ? props.studentList.map(student => {
        return <Student 
                key={student.id}
                id={student.id}
                name={student.name}
                score={student.score}
                activeId={props.activeId} 
                clicked={() => props.handleActiveId(student.id)}
                handlePlusScore={props.handlePlusScore}
                handleMinusScore={props.handleMinusScore} />
    }) : null;

    return (
        <div className="Students">
            {student_list}
        </div>
    )
}

export default students;