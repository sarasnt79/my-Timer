import React from 'react';
import ReactDOM from 'react-dom';

import './style.css'


var interval;
class Timer extends React.Component{
constructor (){
    super();

    this.state ={
        hour :0 ,
        minutes :0 ,
        second :0 ,
        isStart : false
    }
}


setinterval=() =>{
    if(this.state.isStart ==false){
        this.setState({
            isStart: true
          })
   
    interval=setInterval(() =>{
        this.setState({
            second :this.state.second +1
        })
        if(this.state.second ==60){
            this.setState({
                second: 0,
                minutes: this.state.minutes + 1
              })
        }

        if(this.state.minutes ==60){
            this.setState({
                minutes :0 ,
                hour :this.state.hour +1
            })
        }
    } , 1000)
    }
}

stopinterval =()=>{
    this.setState({
      isStart :false
    })
    clearInterval(interval);
}

reset =()=>{
    this.stopinterval();
    this.setState({
        hour :0 ,
        minutes :0 ,
        second :0
    })
}


render (){
    let h =this.state.hour
    let m =this.state.minutes
    let s=this.state.second


    return(
        <>
        <h2 className='perpelBox timer'>{`${h>9 ? h :"0"+h}:${ m>9 ? m :"0" + m }:${ s>9 ? s : "0" + s }`}</h2>
        <div className='boxbtn'>
        <span className='perpelBox button' onClick={this.setinterval}>START</span>
        <span className='perpelBox button' onClick={this.stopinterval}>STOP</span>
        <span className='perpelBox button' onClick={this.reset}>RESET</span>
        </div>
        </>
    )
}



}


export default Timer;