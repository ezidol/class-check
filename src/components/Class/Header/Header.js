import React from 'react';
import './Header.css';

const header = (props) => {
    return (
        <div className="Header">
            <p>동구로초등학교 6학년 2반</p>
            <div className="Button">
                    <button onClick={props.added}>add</button>
                    <button onClick={props.deleted}>delete</button>
            </div>
        </div>
    );
}

export default header;