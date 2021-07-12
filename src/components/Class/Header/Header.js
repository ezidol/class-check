import React from 'react';
import './Header.css';
import Timer from '../Timer/Timer';

const Header = (props) => {
    return (
        <div className="header">
            <div className="view-header">
                <p>신나는 수업시간</p>
                {props.timerShow ? <Timer /> : null}
                <div>
                    <div className="button">
                        {/* <span className="onoff">출석: {props.studentList.length}명</span> */}
                        <span className="timer">
                            <button onClick={props.toggleTimerShow}>
                                {props.timerShow ? <p>타이머 숨기기</p> : <p>타이머</p>}
                            </button>
                        </span>
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