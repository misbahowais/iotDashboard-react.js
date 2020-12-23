import React, { Component } from 'react'
import Power from './Light'
import Ac from './Ac'
import '../index.css'
export default class Room2 extends Component {
    render() {
        return (
            <div className='roomContainer'>
                <h1>Room 2</h1>
                <Ac/>
                <div className='switchContainer'>
                    <div className='direction'>
                        <h2>Light 1</h2>
                        <Power size={90}></Power>
                    </div>
                    <div className='direction'>
                        <h2>Lamp</h2>
                        <Power size={90}></Power>
                    </div>
                    <div className='direction'>
                        <h2>Light 2</h2>
                        <Power size={90}></Power>
                    </div>
                </div>
            </div>
        )
    }
}
