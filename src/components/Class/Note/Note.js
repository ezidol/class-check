import React from 'react';

const note = (props) => {
    return (
        <div className="Note">
            <p><input type="text" placeholder="이름" value={props.activeNote.name} onChange={(e) => props.handleEditNote(e, "name")} /></p>
            <p><input type="text" placeholder="점수" value={props.activeNote.score} onChange={(e) => props.handleEditNote(e, "score")}/></p>
        </div>
    )
}

export default note;