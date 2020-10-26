import React from 'react';
import './Note.css';

const note = (props) => {
    return (
        <div className="note">
            <h3>이름</h3>
            <p><input type="text" placeholder="이름을 적으세요" value={props.activeNote.name} onChange={(e) => props.handleEditNote(e, "name")} /></p>
            <h3>점수</h3>
            <p><input type="number" placeholder="점수를 적으세요" value={props.activeNote.score} onChange={(e) => props.handleEditNote(e, "score")}/></p>
            
            
        </div>
    )
}

export default note;