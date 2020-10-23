import React, {Component} from 'react';
import Students from './Students/Students';
import Note from './Note/Note';
import Header from './Header/Header';
import './Class.css';

class Class extends Component {
    state = {
        studentList: [
            {
                id: 1,
                name: "이름",
                score: 0
            },
    
        ],
        activeId: 1

    }

    handleActiveId = (id) => {
        this.setState({
            activeId: id
        })
    }

    handleEditNote = (event, type) => {
        const studentList = [...this.state.studentList];
        const activeStudent = studentList.find(student => 
            student.id === this.state.activeId);
        activeStudent[type] = event.target.value;
        this.setState({
            studentList
        })
    }

    handleAddStudent = () => {
        const studentList = [...this.state.studentList];
        this.setState({
            studentList: [
                ...studentList,
                {
                    id: this.state.studentList.length +1,
                    name: '이름',
                    score: 0
                }
            ],
            activeId: this.state.studentList.length +1
        })
    }

    handleDeleteStudent = (id) => {
        let studentList = [...this.state.studentList];
        studentList = studentList.filter(student => 
            student.id !== this.state.activeId
        )
        this.setState({
            studentList,
            activeId: studentList.length === 0 ? null : studentList[0].id
        })
    }
    
    handlePlusScore = () => {
        const studentList = [...this.state.studentList];
        const activeStudent = studentList.find(student => 
            student.id === this.state.activeId);
        activeStudent.score += 1;
        this.setState({
            studentList
        })
    }

    handleMinusScore = () => {
        const studentList = [...this.state.studentList];
        const activeStudent = studentList.find(student => 
            student.id === this.state.activeId);
        activeStudent.score -= 1;
        this.setState({
            studentList
        })
    }

    render() {
        const activeNote = this.state.studentList.find(student => 
        student.id === this.state.activeId    
        )
        console.log(activeNote)
        return(
            <div className="Class">
                <div className="Header">
                    <Header 
                    added={()=>this.handleAddStudent()} 
                    deleted={()=>this.handleDeleteStudent(this.state.activeId)} 
                    />
                </div>
                <div className="StudentList">
                    <Students
                    studentList={this.state.studentList}
                    handleActiveId={this.handleActiveId}
                    handlePlusScore={this.handlePlusScore}
                    handleMinusScore={this.handleMinusScore}
                    activeId={this.state.activeId} />
                </div>           
                <div className="Note">
                    {this.state.studentList.length === 0 ? null : <Note activeNote={activeNote} handleEditNote={this.handleEditNote}/>}
                </div>
                
                
            </div>
            
        )
    }
}



export default Class;