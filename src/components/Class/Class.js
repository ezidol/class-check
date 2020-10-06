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


    render() {
        const activeNote = this.state.studentList.find(student => 
        student.id === this.state.activeId    
        )
        console.log(activeNote)
        return(
            <div className="Class">
                <Students
                studentList={this.state.studentList}
                handleActiveId={this.handleActiveId} />

                {this.state.studentList ? <Note activeNote={activeNote} handleEditNote={this.handleEditNote}/> : null}
            </div>
            
        )
    }
}

export default Class;