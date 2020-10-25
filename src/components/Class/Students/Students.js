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
            {student_list.length > 10 ? <div className="list"><div className="list1">{student_list.slice(0,10)}</div><div className="list2">{student_list.slice(10,20)}</div></div>
            : student_list}
            
        </div>
    )
}

export default students;