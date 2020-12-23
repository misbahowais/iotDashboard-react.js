import React, { Component } from 'react'
import {RadialGauge} from 'react-canvas-gauges'

export default class Ac extends Component {
    constructor (props) {
        super(props);
        this.state = {
            acTemp: 20,
        }
    }
    plus = () => {
        if (this.state.acTemp < 30) {
        this.setState({acTemp: this.state.acTemp + 1})
        }
    }
    minus = () => {
        if (this.state.acTemp > 18) {
            this.setState({acTemp: this.state.acTemp - 1})
            }
    }
    render() {
        return (
            <div>
                <div className='thermometerContainer'>
                    <h2>AC</h2>
                    <div className='temp'>
                        <RadialGauge
                            units='°C'
                            title='Temperature'
                            value={this.state.acTemp}
                            minValue={18}
                            maxValue={30}
                            majorTicks={['18', '20', '22', '24', '26', '28', '30']}
                            minorTicks={2}
                        />
                    </div>
                    <div className='tempWrite'>
                        <span>{this.state.acTemp}&#176;C</span>
                    </div>
                    <div className='buttonAc'>
                        <div className="buttonPlus">
                            <button className='buttonPlus' onClick={() => {this.plus();}}><span style={{color: 'green', fontSize: '20px'}}>+</span></button>
                        </div>
                        <div className="buttonMinus">
                            <button className="buttonMinus" onClick={this.minus}><span style={{color: 'red', fontSize: '20px'}}>-</span></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
