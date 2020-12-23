
import React, { Component } from 'react'
import Power from './Light'
import Thermo from './Thermometer'
import Ac from './Ac'
import Tv from './Tv'
import '../index.css'

export default class Room extends Component {
    
    render() {
        return (
        <div className= 'roomContainer'>  
        <h1> Room 1</h1> 
            <div className="tempGauge">
                <Thermo/>
                <Ac/>
                <Tv/>
                <div className='switchContainer'>
                    <div className='direction'>
                        <h2>Light 1</h2>
                        <Power size={90}></Power>
                    </div>
                </div>
            </div>
        </div> 
        )
    }
}
