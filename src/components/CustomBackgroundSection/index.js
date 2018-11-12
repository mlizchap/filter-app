import React, { Component } from 'react';
import styled from 'styled-components';

import ColorPicker from '../ColorPicker';
import { Slider } from '../styles/Slider';
import DropdownMenu from '../DropdownMenu';
import {blendModes} from '../../data/blendModes';
import GradientColorControls from './GradientColorControls';

class CustomBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            selectedType: "None",
        };
    }
    changeSelectedType = (e) => {
        if (this.state.selectedType === e.target.innerHTML) {
            this.setState({ selectedType: "None" })
        } else {
            this.setState({ selectedType: e.target.innerHTML}, 
                () => this.props.handleChangeBackgroundType(this.state.selectedType))    
        }
    }
    selectSolidBgColor = (color) => {
        this.props.handleChangeBackground("solid", "color", color);
    }
    selectOpacityValue = (e) => {
        this.props.handleChangeBackground("solid", "opacity", 1 - e.target.value)
    }
    render() {
        return (
            <StyledCustomBackroundSection>
                <div>Customize Background</div>

                <div className="buttons">
                    <button 
                        onClick={this.changeSelectedType}
                        className={`${(this.state.selectedType === "Solid Color") ? `selected` : `notSelected`}`}
                    >Solid Color    
                    </button>
                    <button 
                        onClick={this.changeSelectedType}
                        className={`${(this.state.selectedType === "Gradient") ? `selected` : `notSelected`}`}
                    >Gradient
                    </button>
                    <button 
                        onClick={this.changeSelectedType}
                        className={`${(this.state.selectedType === "None") ? `selected` : `notSelected`}`}
                    >None
                    </button>
                </div>


                <div className="section" style={{ display: (this.state.selectedType === "Solid Color") ? 'flex' : 'none' }}>
                    <div className="colorSection">
                        <ColorPicker handleSelectColor={this.selectSolidBgColor}/>
                    </div>
                    <div>
                        <span style={{fontSize: '10pt'}}>opacity:</span>
                        <Slider 
                            type="range" 
                            thumbColor="#533bdb"
                            thumbBorder="#527f59"
                            trackerColor="#3d3d3d"
                            min={0}
                            max={1}
                            defaultValue={0.5}
                            step={0.01}
                            onChange={this.selectOpacityValue}
                        />
                    </div>
                    <div className="blendMode">
                        <span style={{fontSize: '10pt', marginBottom: '5px'}}>blend mode:</span>
                        <DropdownMenu 
                            width="100"
                            buttonColor="#533bdb"
                            buttonFontColor="white"
                            contentColor="#d0ccea"
                            contentFontColor="#533bdb"
                            contentHighlight="#efedf9"
                            font={props => props.theme.titleFont}
                            contentItems={blendModes}
                            defaultValue="normal"
                            handleSelect={(selected) => this.props.handleChangeBackground("solid", "blendMode", selected)}
                        />
                    </div>
                </div>

                <div className="section gradientSection" style={{ display: (this.state.selectedType === "Gradient") ? 'flex' : 'none' }}>
                    <GradientColorControls gradientName="inner" min={0} max={40} {...this.props} />
                    <GradientColorControls gradientName="outer" min={-90} max={-50} {...this.props} />
                </div>

            </StyledCustomBackroundSection>
        );
    }
}

export default CustomBackground;

const StyledCustomBackroundSection = styled.div`
    font-family: ${props => props.theme.titleFont};
    .section {
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 15px;
        display: flex;
        justify-content: space-between;
    }
    .buttons {
        display: flex;
        justify-content: space-between;
    }
    .colorSection {
        margin-top: auto;
    }
    .gradientSection {
        flex-direction: column;
    }
    .outerGradient {
        display: flex;
    }
    .blendMode {
        display: flex;
        flex-direction: column;
    }
    button {
        padding: 6px;
        border: none;
        border-radius: 3px;
        font-family: inherit;
        width: 100px;
        display: block;
    }
    .selected {
        background-color: #533bdb;
        color: white;
    }
    .notSelected {
        background-color: #c6c6c6; 
        color: #565656;
    }
`