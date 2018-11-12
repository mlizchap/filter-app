import React, { Component } from 'react';
import styled from 'styled-components';

import { presetData } from '../data/presets';
import DropDownMenu from './DropdownMenu';
import _ from 'lodash';

class PresetSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewContent: {},
            selectedContent: {},
            preview: true
        }
    }

    selectPreset = (preset) => {
        const presetDetail = presetData.filter(item => item.name === preset)[0];
        this.setState({
            selectedContent: {
                filters: presetDetail.filters
            }
        }, () => this.props.handleDisplayPreset(this.state.selectedContent))
    }
    previewPreset = (preset) => {
        const presetDetail = presetData.filter(item => item.name === preset)[0];
        this.setState({
            previewContent: {
                filters: presetDetail.filters
            }
        }, () => this.props.handleDisplayPreset(this.state.previewContent))
    }
    removePreview = () => {
        // if an iitem is selected, display the selected item, if not, show default values
        const dataToSend = (_.isEmpty(this.state.selectedContent)) ? this.state.previewContent : this.state.selectedContent
        this.setState({
            previewContent: {
                filters: []
            }
        }, () => this.props.handleDisplayPreset(dataToSend))
    }
    render() {
        return (
            <StyledPresetSection>
                <div className="title">Preset:</div>
                <DropDownMenu 
                    contentItems={presetData.map(preset => preset.name)}
                    defaultValue="none"
                    handlePreview={this.previewPreset}
                    handleSelect={this.selectPreset}
                    handleRemovePreview={this.removePreview}
                    {...this.props}
                />
            </StyledPresetSection>
        )
    }

}

export default PresetSection;

const StyledPresetSection = styled.div`
    display: flex;
    justify-content: center;
    .title {
        margin-right: 10px;
    }
`