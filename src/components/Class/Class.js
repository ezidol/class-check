import React, {Component} from 'react';
import Students from './Students/Students';
import Note from './Note/Note';
import Header from './Header/Header';
import Rank from './Rank/Rank';
import './Class.css';

let id = 1
class Class extends Component {
    state = {
        studentList: [
            {
                id: 1,
                name: "이름",
                score: 0
            },
            
    
        ],
        activeId: id,
        rankShow: false

    }
    toggleRankShow = () => {
        this.setState({
            rankShow: !this.state.rankShow
        })
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
        id++
        this.setState({
            studentList: [
                ...studentList,
                {
                    id: id,
                    name: '이름',
                    score: 0
                }
            ],
            activeId: id
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
        console.log(this.state);
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
                    rankShow={this.state.rankShow}
                    toggleRankShow={this.toggleRankShow}
                    studentList={this.state.studentList} 
                    />
                </div>
                <div className="main">
                    <Students
                    studentList={this.state.studentList}
                    handleActiveId={this.handleActiveId}
                    handlePlusScore={this.handlePlusScore}
                    handleMinusScore={this.handleMinusScore}
                    activeId={this.state.activeId} />
                    <div className="right-main">
                        <div className="note-view">
                            {this.state.studentList.length === 0 ? 
                            null : <Note 
                            activeNote={activeNote} 
                            handleEditNote={this.handleEditNote}
                            
                             />}
                        </div>
                        <div className="rank-view">
                            {this.state.rankShow ? 
                            <Rank 
                            studentList={this.state.studentList} /> :
                            null}
                        </div>
                        
                    </div>           
                        
                </div>
                
                
            </div>
        )
            
    }
}



export default Class;