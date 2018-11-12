import React, { Component } from 'react';
import styled from 'styled-components';

import { presetData } from '../data/presets';
import DropDownMenu from './DropdownMenu';

class PresetSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: [],
            background: {
                solid: {},
                gradient: {}
            }
        }
    }
    previewPreset = (preset) => {
        const presetDetail = presetData.filter(item => item.name === preset)[0];
        this.setState({
            filters: presetDetail.filters
        // }, () => console.log(this.state.filters))
        }, () => this.props.handlePreviwPreset(this.state.filters))
    }
    render() {
        return (
            <div>
                <DropDownMenu 
                    contentItems={presetData.map(preset => preset.name)}
                    defaultValue="presets"
                    handlePreview={this.previewPreset}
                    {...this.props}
                />
            </div>
        )
    }

}

export default PresetSection;