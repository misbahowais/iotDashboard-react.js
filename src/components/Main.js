import React, { Component } from 'react'
import '../index.css'
import 'react-calendar/dist/Calendar.css';
import Room from './Room'
import Room2 from './Room2'
import Info from "./Info";
export class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            temp: 15
        }
    }
    setColor() {
        let color;
        if (this.state.temp < 16) {
            color = 'blue'
        } else if (this.state.temp >= 16 && this.state.temp <= 26) {
            color = "yellow"
        } else if (this.state.temp > 26 && this.state.temp <= 50) {
            color = 'red';
        }
        return {
            color: color
        }
    }
    render() {
        
        return (
            <div>
                <main>
                <Info/>
                <Room2/>
                <Room/>
                </main>
            </div>
        )
    }
}

export default Main;