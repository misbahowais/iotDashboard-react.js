import React, { Component } from 'react'
import '../index.css'
import GaugeChart from 'react-advanced-gauge-chart'

export default class Power extends Component {
    render() {
        return (
            <div className="guageChart">
                    <GaugeChart id="gauge-chart2" 
                        percent={0.86}
                    />
                    <span style={{color: 'white'}}>Power Consumption</span>
            </div>
        )
    }
}
