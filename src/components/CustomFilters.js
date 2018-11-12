import React, { Component } from 'react';
import styled from 'styled-components';

import { Slider } from './styles/Slider'
import { filterData } from '../data/filters';

class CustomFilters extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filterValues: filterData,

        };
    }
    // changeSliderValue = (e, filterName) => {
    //     // console.log(e.target.value, filterName)
    //     const filterValues = this.state.filterValues.map(filter => {
    //         return (filter.name === filterName) ? {...filter, value: e.target.value} : filter 
    //     })
    //     const currentFilter= this.state.filterValues.filter(i => i.name === filterName)[0]

    //     this.setState({ filterValues }, 
    //         () => this.props.handleChangeFilterValue(`${filterName}(${currentFilter.value}${currentFilter.unit})`))
    // }
    // toggleFilters = () => {
    //     this.setState({ filterDisplay: (this.state.filterDisplay === "none") ? "block" : "none"})
    // }
    // checkForPresetVal = (filter) => {
    //     const presetFiltersFound = this.state.presetFilters.filter(filterObj => filterObj.name === filter.name).map(i => i.value);
    //     return (presetFiltersFound.length > 0) ?  parseInt(presetFiltersFound[0]) : filter.value
    // }
    render() {
        // console.log(this.props.activeFilters)
        return (
            <StyledFilterContainer displayFilters={this.state.filterDisplay}>
                <div className="heading" onClick={this.toggleFilters}>FILTERS</div>
                <div className="filters">
                    {this.state.filterValues.map(filter => {
                        return (
                            <div key={filter.name} className="sliderContainer">
                                <span className="sliderName">{filter.name}</span>
                                <Slider 
                                    type="range"
                                    width="150px"
                                    thumbColor="#61c670"
                                    thumbBorder="#527f59"
                                    trackerColor="#3d3d3d"
                                    onChange={(e) => this.changeSliderValue(e, filter.name)}
                                    min={filter.min}
                                    max={filter.max}
                                    step={filter.step}
                                    value={filter.value}
                                    value={filter.value}
                                />
                            </div> 
                        )
                    })}
                </div>

            </StyledFilterContainer>
        );
    }
}

export default CustomFilters;

const StyledFilterContainer = styled.div`
    background-color: #eeffed;
    
    font-family: ${props => props.theme.titleFont};
    .heading {
        background-color: #61c670;
        color: #b4edbc;
        text-align: center;
        padding: 8pt;
        font-size: 9pt;
    }
    .sliderName {
        font-size: 8pt;
    }
    .filters {
        display: ${(props => props.displayFilters)};
    
    }
    .sliderContainer {
        // background-color: #fffaea;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }

`