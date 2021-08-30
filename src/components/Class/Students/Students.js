import React from 'react';
import Student from './Student/Student';
import './Students.css';

const students = (props) => {
    
    let student_list = 
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
    const max_students = 30;
    student_list = student_list.slice(0, max_students);
    let student_list10;
    if (student_list.length > 10 && student_list.length <= 20) {
        student_list10 = <div className="list"><div className="list1">{student_list.slice(0,10)}</div><div className="list2">{student_list.slice(10,20)}</div></div>;
    } else if (student_list.length > 20) {
        student_list10 = <div className="list"><div className="list1">{student_list.slice(0,10)}</div><div className="list2">{student_list.slice(10,20)}</div><div className="list3">{student_list.slice(20,30)}</div></div>;
    } else (
        student_list10 = student_list
    )

    return (
        <div className="Students">
            {student_list10}            
        </div>
    )
}

export default students;
