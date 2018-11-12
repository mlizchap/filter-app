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
            <StyledCustomBackroundSection isExpanded={(this.state.selectedType === "None") ? false : true}>
                <div className="header">BACKGROUND</div>
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
                    <div className="blendModeSolid">
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
                    <div className="controlRows">
                        <GradientColorControls gradientName="inner" min={0} max={40} {...this.props} />
                        <GradientColorControls gradientName="outer" min={-90} max={-50} {...this.props} />
                    </div>

                    <div className="controlRow">
                        <div style={{ width: '50%' }}>
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
                                onChange={(e) => this.props.handleChangeBackground("gradient", "opacity",  1 - e.target.value)}
                            />
                        </div>
                  

                        <div className="blendModeGradient">
                            <div className="blendModeGradientTitle">blend mode:</div>
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
                                handleSelect={(selected) => this.props.handleChangeBackground("gradient", "blendMode", selected)}
                            />
                        </div>
                    </div>
                </div>
            </StyledCustomBackroundSection>
        );
    }
}

export default CustomBackground;

const StyledCustomBackroundSection = styled.div`
    font-family: ${props => props.theme.titleFont};
    background-color: #eceaf2;
    height: 250px;
    border: 2px solid #533bdb;
    .header {
        text-align: center;
        padding: 8px;
        background-color: #533bdb;
        color: #b2a6f4;
        font-size: 8pt;
    }
    .bgContent {
        // background-color: #533bdb;
    }
    .section {
        // margin-top: 10px;
        margin-bottom: 10px;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        background-color: #e4e0fc;
        margin-right: 10px;
        margin-left: 10px;
    }
    .buttons {
        display: flex;
        justify-content: space-around;
        padding-top: 15px;
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
    .blendModeSolid {
        display: flex;
        flex-direction: column;
    }
    .blendModeGradient {
        display: flex;
        font-size: 10pt;
        margin-top: auto;
    }
    .blendModeGradientTitle {
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 5px;
    }
    .controlRow {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    button {
        padding: 6px;
        border: none;
        border-radius: 3px 3px ${props => (!props.isExpanded) ? `3px` : `0px`} ${props => (!props.isExpanded) ? `3px` : `0px`};
        font-family: inherit;
        width: 100px;
        display: block;
    }
    .selected {
        background-color: #e4e0fc;
        color: #533bdb;
    }
    .notSelected {
        background-color: #533bdb;
        color: white;
    }
`