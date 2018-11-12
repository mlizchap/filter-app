import React, { Component } from 'react';
import styled from 'styled-components';

import ColorPicker from '../ColorPicker';
import { Slider } from '../styles/Slider';
import DropdownMenu from '../DropdownMenu';
import {blendModes} from '../../data/blendModes';

class GradientColorControls extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    changeGradientAmount = (e) => {
        // console.log(e.target.value)
        this.props.handleChangeGradient(this.props.gradientName, "amount", (this.props.gradientName === "outer") ? `${e.target.value * -1}%` : `${e.target.value}%`)
    }
    selectSolidGradientColor = (color) => {
        // console.log(color)
        this.props.handleChangeGradient(this.props.gradientName, "color", color);
    }
    render() {
        return (
            <StyledGradientColorControls>
                
                    <div className="controls">
                        <div><p className="controlName">{this.props.gradientName} color:</p></div>
                        <div className="colorPicker"><ColorPicker handleSelectColor={this.selectSolidGradientColor}/></div>
                        <div className="sliders">
                            <span className="controlName">amount (%)</span>
                            <Slider 
                                type="range" 
                                thumbColor="#533bdb"
                                thumbBorder="#527f59"
                                trackerColor="#3d3d3d"
                                min={this.props.min}
                                max={this.props.max}
                                defaultValue={(this.props.min + this.props.max) / 2}
                                onChange={this.changeGradientAmount}
                            />
                        </div>
                </div>
            </StyledGradientColorControls>
        );
    }
}

export default GradientColorControls;

const StyledGradientColorControls = styled.div`
    .controls {
        display: flex;
        justify-content: space-around;
    }
    .sliders {
        width: 50%;
    }
    .controlName {
        font-size: 10pt;
    }
    .blendMode {
        display: flex;
        // background-color: blue;
        text-align: center;
    }
    .colorPicker {
        margin-top: auto;
    }
`

