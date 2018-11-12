import React, { Component } from 'react';
import styled from 'styled-components';

import { presets } from '../data/presets';
const items = ["item 1", "item 2", "item 3"];

class Presets extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showContent: false,
            currentPreset: {},
            selectedPreset: { name: "none"},
            isHovered: false,
            selected: false
         };
    }
    findPresetSelectedData = (e) => {
       return presets.filter(preset => preset.name === e.target.innerHTML)[0]
    }
    selectItem = (e) => {
        const currentPreset = this.findPresetSelectedData(e);
        this.setState({ 
            showContent: false, 
            selectedPreset: currentPreset,
             selected: true}, 
            () => this.props.handleSetPreset(this.state.currentPreset))
    }
    previewPreset = (e) => {
        const currentPreset = this.findPresetSelectedData(e);        
        this.setState({ currentPreset, isHovered: true }, 
            () => this.props.handlePreviewPreset(this.state.currentPreset))
    }
    resetFilters = (e) => {
        if (this.state.selected === false) {
            this.setState({ currentPreset: {} }, 
                () => this.props.handlePreviewPreset(this.state.currentPreset))
        }
    }
    hideContent = () => {
        this.setState({ showContent: false})
    }
    toggleContent = () => {
        this.setState({ showContent: !this.state.showContent, selected: false })
    }
    render() {
        return (
            <StyledPreset>
                <div className="presetDropDown">
                    <button onClick={this.toggleContent}>
                        <span className="btnTitle">presets</span>
                        <span className="arrow">&#9660;</span>
                    </button>
                    <div 
                        className="content" 
                        onMouseLeave={this.hideContent}
                        style={{ display: (!this.state.showContent) ? 'none' : 'block'}}
                    >
                        {presets.map(item => {
                            return (
                                <div 
                                    key={item.name}
                                    onClick={this.selectItem}
                                    onMouseEnter={this.previewPreset}
                                    onMouseLeave={this.resetFilters}
                                    className={(item.name === this.state.selectedPreset.name) ? "item selected" : "item notSelected"}
                                >
                                    {item.name}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </StyledPreset>
        );
    }
}

export default Presets;

const StyledPreset = styled.div`
    display: flex;
    justify-content: center;
    font-family: ${props => props.theme.titleFont}
    button {
        width: 100px;
        display: flex;
        font-size: 12pt;
        background-color: #287bff;
        color: white;
        font-family: inherit;
        border: none;
        padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 3px;
        &:hover {
            background-color: #6095ea;
            cursor: pointer
        }
    }
    .arrow {
        font-size: 8pt;
        padding-top: 5px;
    }
    .btnTitle {
        flex-grow: 1;
    }
    .content {
        z-index: 1;
        position: absolute;
        width: 100px;
    }
    .content div {
        padding: 3px;
    }
    .selected {
        background-color: #bcbcbc;
        color: #5b5b5b;
    }
    .notSelected {
        background-color: #cee1ff;
        color: #4268a5;
        &:hover {
            background-color: white;
            cursor: pointer;
        }
    }

`