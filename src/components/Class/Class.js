import React, {Component} from 'react';
import Students from './Students/Students';
import Note from './Note/Note';


class Class extends Component {
    state = {
        studentList: [
            {
                id: 1,
                name: "Jack",
                score: 30
            },
            {
                id: 2,
                name: "Paul",
                score: 50
            },
            {
                id: 3,
                name: "Alex",
                score: 60
            }
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
                    score: '점수'
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
                <Students
                studentList={this.state.studentList}
                handleActiveId={this.handleActiveId}
                handlePlusScore={this.handlePlusScore}
                handleMinusScore={this.handleMinusScore}
                activeId={this.state.activeId} />

                {this.state.studentList.length === 0 ? null : <Note activeNote={activeNote} handleEditNote={this.handleEditNote}/>}
                
                <button onClick={()=>this.handleAddStudent()}>add</button>
                <button onClick={()=>this.handleDeleteStudent(this.state.activeId)}>delete</button>
            </div>
            
        )
    }
}



export default Class;