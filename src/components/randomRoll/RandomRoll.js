import React from 'react';
import './RandomRoll.css'
import {Button} from '../Button/Button'

class RandomRoll extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            unitJson: [
                {
                    protossUnit: "placeholder",
                    zergUnit:"placeholder",
                    terranUnit:"placeholder"
                }
            ]
        }
        this.updateUnits();
    }

    updateUnits = () => {
        console.log(process.env.REACT_APP_MTL_API+'randomRoll')
        fetch(process.env.REACT_APP_MTL_API+'randomRoll')
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({unitJson: data});
            console.log(this.unitJson);
        });
    }
    render () {
        return(
            <div className="randomUnitGen">
                Monobattle Random Unit Generator
                <div className="RGU">
                    <h1>{this.state.unitJson.protossUnit}</h1>
                    <h2>{this.state.unitJson.zergUnit}</h2>
                    <h3>{this.state.unitJson.terranUnit}</h3>
                </div>
                <Button onClick={this.updateUnits} type="btn--roll--solid">
                    Roll Units
                </Button>
            </div>
        )
    }
}

export default RandomRoll;