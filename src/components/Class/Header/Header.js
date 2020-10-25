import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            <div className="view-header">
                <p>동구로초등학교 6-2</p>
                <div>
                    <div className="button">
                        <span>출석: {props.studentList.length}명</span>
                        <span className="rank">
                            <button onClick={props.toggleRankShow}>
                                {props.rankShow ? <p>순위숨기기</p> : <p>순위보기</p>}
                            </button>
                        </span>
                        <span className="control">
                            <button onClick={props.added}><p>add</p></button>
                            <button onClick={props.deleted}><p>delete</p></button>
                        </span>
                            
                    </div>
                </div>
                
            
            </div>
            <hr />
        </div>
        
    );
}

export default Header;