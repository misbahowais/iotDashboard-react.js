import React, { Component } from 'react'
import Power from './Light'
export default class Tv extends Component {
    constructor (props) {
        super(props);
        this.state = {
            volume: 20,
            channel:20
        }
    }
    volumeUp = ()  => {
        if (this.state.volume < 100) {
            this.setState({volume: this.state.volume + 1})
            }
    }
    volumeDown = () => {
        if (this.state.volume > 0) {
            this.setState({volume: this.state.volume - 1})
            }
    }
    channelDown = () => {
        if (this.state.channel > 0) {
            this.setState({channel: this.state.channel - 1})
            }
    }
    channelUp = () => {
        if (this.state.channel < 100) {
            this.setState({channel: this.state.channel + 1})
            }
    }
    render() {
        return (
            <div>
                <div className='tvContainer'>
                    <h2>Tv</h2>
                    <Power size={40}/>
                    <div className='volumeControl'>
                        <button className='buttonUp' onClick={this.volumeUp}><span style={{color: 'green'}}>+</span></button>
                        <button className='buttonBottom' onClick={this.volumeDown}><span style={{color: 'red'}}>-</span></button>
                    </div>   
                    <span>{this.state.volume}%</span>  
                    <div className='channelControl'>
                        <button className='buttonUp' onClick={this.channelUp}><span style={{color: 'whitesmoke'}}>+</span></button>
                        <div className='buttonSide'>
                            <button className='buttonPlus'><span style={{color: 'whitesmoke'}}></span></button>
                            <button className='buttonMinus'><span style={{color: 'whitesmoke'}}></span></button>
                        </div>
                        <button className='buttonBottom' onClick={this.channelDown}><span style={{color: 'whitesmoke'}}></span></button>
                        <span>channel: {this.state.channel}</span>
                    </div>               
                </div>
            </div>
        )
    }
}
