import React, { Component } from 'react'
import '../index.css'
import Power from './Power'
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';
import { IgrRadialGauge, } from 'igniteui-react-gauges';

IgrRadialGaugeModule.register();


export  class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            humidity: 80,
            temp: 30,
            co: 30,
            h2o:74
        }
    }
    color() {
        if (this.state.temp < 18) {
            return "dodgerBlue";
        } else if (this.state.temp >= 18 && this.state.temp < 25) {
            return "orange"
        } else {
            return "red"
        }
    }
    render() {
        return (
            <div className='roomContainer'>
            <h1>Essentials</h1>
            <div className='tempGauge'>
                <div className='humidity'>
                <IgrRadialGauge
                    scaleStartAngle={135}
                    scaleEndAngle={45}
                    scaleBrush="DodgerBlue"
                    needleBrush="DodgerBlue"
                    scaleSweepDirection="Clockwise"
                    scaleOversweep={1}
                    scaleOversweepShape="Fitted"
                    scaleStartExtent={0.45}
                    scaleEndExtent={0.575}
                    height="200px" width="200px"
                    minimumValue={0} value={this.state.h2o}
                    maximumValue={80} interval={10} />
                    <span style={{color: 'orange'}}>H2O level: {this.state.h2o}%</span>
                </div>

                <div className='humidity'>
                    <IgrRadialGauge
                        labelExtent={0.65}
                        labelInterval={10}
                        font="11px Verdana"
                        fontBrush="DodgerBlue"
                        needleBrush="orange"
                        height="200px" width="200px"
                        minimumValue={0} value={this.state.humidity}
                        maximumValue={100} interval={5} />
                    <span style={{color: 'orange'}}>humidity: {this.state.humidity}%</span>
                </div>
                <Power/>
                <div className='temp'>
                    <IgrRadialGauge
                        value={this.state.temp}
                        isNeedleDraggingEnabled={true}
                        isNeedleDraggingConstrained={true}
                        needleShape="NeedleWithBulb"
                        needleBrush={this.color()}
                        needleOutline={this.color()}
                        needleEndExtent={0.475}
                        needleStrokeThickness={1}
                        needlePivotShape="CircleOverlay"
                        needlePivotBrush="#9f9fa0"
                        needlePivotOutline="#9f9fa0"
                        needlePivotWidthRatio={0.2}
                        needlePivotStrokeThickness={1}
                        height="200px" width="200px"
                        minimumValue={0}
                        maximumValue={50} interval={4} />
                    <span style={{color: this.color()}}>outside temp: {this.state.temp}&#176;C</span>
                </div>
                <div className='humidity'>
                <IgrRadialGauge
                    labelInterval={10}
                    font="11px Verdana"
                    labelExtent={0.65}
                    fontBrush="DodgerBlue"
                    height="200px" width="200px"
                    minimumValue={0} value={this.state.co}
                    maximumValue={80} interval={10} />
                    <span style={{color: 'orange'}}>CO: {this.state.co}%</span>
                </div>
            </div>
            </div>
        )
    }
}
export default Info;