import React, { Component } from 'react';
import styled from 'styled-components';

import ColorPicker from './ColorPicker';
import { Slider } from './styles/Slider'


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
                            <div className="colorSection"><ColorPicker handleSelectColor={this.selectSolidBgColor}/></div>
                            <div>opacity
                                <Slider 
                                    type="range" 
                                    thumbColor="#533bdb"
                                    thumbBorder="#527f59"
                                    trackerColor="#3d3d3d"
                                />
                            </div>
                            <div>Blend Mode</div>
                        </div>
                    </div>

                <div className="section">
                    <button 
                        onClick={this.changeSelectedType}
                        className={`${(this.state.selectedType === "Gradient") ? `selected` : `notSelected`}`}
                    >
                        Gradient
                    </button>
                    <div className="sectionContent">
                        <div className="gradientPickers">
                            <div style={{ fontSize: '8pt', marginRight: '15px'}}>Outer:<ColorPicker /></div>
                            <div style={{ fontSize: '8pt'}}>Inner:<ColorPicker /></div>
                        </div>
                        <div>opacity
                            <Slider 
                                type="range" 
                                thumbColor="#533bdb"
                                thumbBorder="#527f59"
                                trackerColor="#3d3d3d"
                            />
                        </div>
                        <div>Blend Mode</div>
                    </div>
                </div>
            </StyledCustomBackroundSection>
        );
    }
}

export default CustomBackground;

const StyledCustomBackroundSection = styled.div`
    font-family: ${props => props.theme.titleFont};
    .section {
        background-color: #d2ceea;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .sectionContent {
        padding: 15px;
        display: flex;
        justify-content: space-between;
    }
    .sectionContent > div {
        // margin-right: 15px;
    }
    .gradientPickers {
        display: flex;
        justify-content: space-around;
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