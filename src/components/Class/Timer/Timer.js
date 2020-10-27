import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {

    state = {
        sec: 10,
        run: false
    }
    componentDidMount () {
        setInterval(() => {
            if (this.state.run) {
                this.setState({sec: this.state.sec - 1});
                console.log(this.state.sec);
            }
            
            if ( this.state.sec === 0) {
                
                this.setState(
                    { run: false }
                )
            }
        }, 1000);
    }
    handleTimerRun = () => {
        this.setState({
            run: !this.state.run,
            sec: this.state.sec === 0 ? 10 : this.state.sec
        })    
    }
    render() {
        let clock = null;
        if (this.state.sec === 10) {
            clock = "시작";
        } else if (this.state.sec === 0) {
            clock = "재시작";
        } else {
            clock = "중지";
        }
        return (
            <div className="timer">
                <div className="clock">
                    {this.state.sec === 0 ? <h2>마감!</h2> : <h2> {this.state.sec}초 </h2>}
                     <button 
                    onClick={this.handleTimerRun}>{clock}</button>
                </div>
                
            </div>
        )
    }
    
}

export default Timer;