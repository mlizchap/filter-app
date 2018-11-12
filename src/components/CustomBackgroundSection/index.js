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
        console.log(e.target.innerHTML)
        this.setState({ selectedType: e.target.innerHTML})
    }
    selectSolidBgColor = (color) => {
        // console.log(color)
        this.props.handleChangeBgColor(color);
    }
    selectOpacityValue = (e) => {
        this.props.handleChangeBgOpacity(e.target.value)
    }
    render() {
        return (
            <StyledCustomBackroundSection>
                <div>Customize Background</div>

                    <div className="section">
                        <button 
                                onClick={this.changeSelectedType}
                                className={`${(this.state.selectedType === "None") ? `selected` : `notSelected`}`}
                            >
                                None
                        </button>
                    </div>

                    <div className="section">
                        <button 
                                onClick={this.changeSelectedType}
                                className={`${(this.state.selectedType === "Solid Color") ? `selected` : `notSelected`}`}
                            >
                                Solid Color
                        </button>
                        <div className="sectionContent">
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
                            <div>
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
                                        handleSelect={(selected) => this.props.handleSelectBgBlendMode(selected)}
                                    />
                                    </div>
                            </div>
                        </div>
                    </div>

                <div className="section">
                    <button 
                        onClick={this.changeSelectedType}
                        className={`${(this.state.selectedType === "Gradient") ? `selected` : `notSelected`}`}
                    >
                        Gradient
                    </button>
                    <GradientColorControls gradientName="inner" {...this.props} />
                    <GradientColorControls gradientName="outer" {...this.props} />
                </div>

            </StyledCustomBackroundSection>
        );
    }
}

export default CustomBackground;

const StyledCustomBackroundSection = styled.div`
    font-family: ${props => props.theme.titleFont};
    .section {
        // background-color: #d2ceea;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .sectionContent {
        padding: 15px;
        display: flex;
        justify-content: space-between;
    }
    .colorSection {
        margin-top: auto;
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