import React, { Component } from 'react'
import Thermo from 'react-thermometer-component'

export default class Thermometer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            tempSensor: 10 ,
        }
    }
    render() {
        return (
            <div>
                <div className="thermometerContainer">
                    <div className='thermometer'>
                        <Thermo
                            theme="dark"
                            value={this.state.tempSensor}
                            max="50"
                            steps="1"
                            format="°C"
                            size="large"
                            height="300"
                        />
                    </div>
                    <div className = 'themometerWrite'>
                        <span>Temp from sensor: {this.state.tempSensor}&#176;C</span>
                    </div>
                </div>
            </div>
        )
    }
}
