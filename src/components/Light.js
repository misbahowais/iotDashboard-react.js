
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/fontawesome-free-solid'

export class Light extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle : 'on',
            color: 'green'
        };
    }
    toggleButton = () => {
        console.log(this.state.toggle);
        if (this.state.toggle === 'on') {
            this.setState({toggle:  'off',color: 'red'})
        } else if (this.state.toggle === 'off') {
            this.setState({toggle:"on",color: 'green'})
        }
    }
    render() {
        return (
                <div className='button'>
                    <button className="buttonPower" onClick={this.toggleButton}>
                        <FontAwesomeIcon icon={faPowerOff} style={{color: this.state.color, fontSize: this.props.size }}></FontAwesomeIcon>
                    </button>
                    <span style={{color: this.state.color}}>{this.state.toggle}</span>
                </div>

        )
    }
}

export default Light;