import React from 'react';
import Student from './Student/Student';

const students = (props) => {
    
    const student_list = 
        props.studentList ? props.studentList.map(student => {
        return <Student 
                key={student.id}
                id={student.id}
                name={student.name}
                score={student.score} 
                clicked={() => props.handleActiveId(student.id)}/>
    }) : null;

    return (
        <div className="stuents">
            {student_list}
        </div>
    )
}

export default students;