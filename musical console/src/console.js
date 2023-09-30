import './console.css';
import React from 'react';
import Heater1 from './Heater-1.mp3';
import Heater2 from './Heater-2.mp3';
import Heater3 from './Heater-3.mp3';
import Heater4 from './Heater-4_1.mp3';
import Heater6 from './Heater-6.mp3';
import Dsc_Oh from './Dsc_Oh.mp3';
import Kick_n_Hat from './Kick_n_Hat.mp3';
import Kick from './RP4_KICK_1.mp3';
import Cev_H2 from './Cev_H2.mp3';

export default class Console extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.handleKey=this.handleKey.bind(this);
    }
    handleClick(e){
        if(e.target.className=='q' || e.target.className=='w' || e.target.className=='e' || e.target.className=='a' || e.target.className=='s' || e.target.className=='d' || e.target.className=='z' || e.target.className=='x' || e.target.className=='c'){
            document.getElementById(e.target.className).play();
            document.getElementById('traces').innerHTML=document.getElementById(e.target.className).className;
        }
    }
    handleKey(e){
        if(e.key=='q' || e.key=='w' || e.key=='e' || e.key=='a' || e.key=='s' || e.key=='d' || e.key=='z' || e.key=='x' || e.key=='c'){
            document.getElementById(e.key).play();
            document.getElementById('traces').innerHTML=document.getElementById(e.key).className;
        }
    }
    render(){
    return(
        <div id='divider'>
            <div id='keyboard'>
                <div className="row">
                    <audio src={Heater1} id='q' className='Heater1'/>
                    <input type='button' value='Q' className='q' onClick={this.handleClick} onKeyPress={this.handleKey}/>
                    <audio src={Heater2} id='w' className='Heater2'/>
                    <input type="button" value='W' className='w' onClick={this.handleClick} onKeyPress={this.handleKey}/>
                    <audio src={Heater3} id='e' className='Heater3'/>
                    <input type='button' value='E' className='e' onClick={this.handleClick} onKeyPress={this.handleKey}/>
                </div>
                <div className="row">
                    <audio src={Heater4} id='a' className='Heater4'/>
                    <input type='button' value='A' className='a' onClick={this.handleClick} onKeyPress={this.handleKey}/>
                    <audio src={Heater6} id='s' className='Heater6'/>
                    <input type='button' value='S' className='s' onClick={this.handleClick} onKeyPress={this.handleKey}/>
                    <audio src={Dsc_Oh} id='d' className='Dsc_Oh'/>
                    <input type='button' value='D' className='d' onClick={this.handleClick} onKeyPress={this.handleKey}/>
                </div>
                <div className="row">
                    <audio src={Kick_n_Hat} id='z' className='Kick_n_Hat'/>
                    <input type='button' value='Z' className='z' onClick={this.handleClick} onKeyPress={this.handleKey}/>
                    <audio src={Kick} id='x' className='Kick'/>
                    <input type='button' value='X' className='x' onClick={this.handleClick} onKeyPress={this.handleKey}/>
                    <audio src={Cev_H2} id='c' className='Cev_H2'/>
                    <input type='button' value='C' className='c' onClick={this.handleClick} onKeyPress={this.handleKey}/>
                </div>
            </div>
            <div id='display'>
                <div id='traces'></div>
            </div>
        </div>
    );
    }
}
