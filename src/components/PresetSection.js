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
        }
    }

    updateStateBasedOnDropDown = (activePreset, stateToUpdate) => {
        const presetDetail = presetData.filter(item => item.name === activePreset)[0];
        this.setState({
            [stateToUpdate]: {
                filters: presetDetail.filters,
                background: presetDetail.background, 
            }
        // }, () => console.log(this.state))
        }, () => this.props.handleDisplayPreset(this.state[stateToUpdate]))

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
                    handlePreview={(presetHovered) => this.updateStateBasedOnDropDown(presetHovered, 'previewContent')}
                    handleSelect={(presetSelected) =>  this.updateStateBasedOnDropDown(presetSelected, 'selectedContent')}
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