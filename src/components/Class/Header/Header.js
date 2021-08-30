import React, {useState} from 'react';
import './Header.css';
import Timer from '../Timer/Timer';

const Header = (props) => {
    const [title, setTitle] = useState('');
    const [input, setInput] = useState(true);
    const [inputButtonName, setInputButtonName] = useState('입력');
    let titleComponent = '';
    const handleEditTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleInputButton = () => {
        if (input) {
            setInput(false);
            setInputButtonName('수정');
        } else {
            setInput(true);
            setInputButtonName('입력');
        }
        
    }
    if (input) {
        titleComponent = <input type="text" placeholder="주제를 적으세요" value={title} onChange={(e) => handleEditTitle(e)} />
    } else {
        titleComponent = title;
    }

    return (
        <div className="header">
            <div className="view-header">
                <div className="title-view">
                    {titleComponent}
                    <span className="input-button">
                        <button onClick={() => handleInputButton()}>{inputButtonName}</button>
                    </span>
                    
                </div>
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