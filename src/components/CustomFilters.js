import React, { Component } from 'react';
import styled from 'styled-components';

import { Slider } from './styles/Slider'
import { filters } from '../data/filters';

class CustomFilters extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filterValues: {

            }
        };
    }
    changeSliderValue = (e, filterName) => {
        // console.log(e.target.value, filterName)
        const filterValues = this.state.filterValues.map(filter => {
            return (filter.name === filterName) ? {...filter, value: e.target.value} : filter 
        })
        const currentFilter= this.state.filterValues.filter(i => i.name === filterName)[0]

        this.setState({ filterValues }, 
            () => this.props.handleChangeFilterValue(`${filterName}(${currentFilter.value}${currentFilter.unit})`))
    }
    componentWillMount = () => {
        this.setState({ filterValues: filters}, () => console.log(this.state.filterValues))
    }
    render() {
        return (
            <StyledFilterContainer>
                {this.state.filterValues.map(filter => {
                    
                    return (
                        <div key={filter.name} className="sliderContainer">
                            <span className="sliderName">{filter.name}</span>
                            <Slider 
                                type="range"
                                width="150px"
                                thumbColor="blue"
                                thumbBorder="pink"
                                trackerColor="green"
                                onChange={(e) => this.changeSliderValue(e, filter.name)}
                                min={filter.min}
                                max={filter.max}
                                step={filter.step}
                                value={filter.value}
                            />
                        </div> 
                    )
                })}

            </StyledFilterContainer>
        );
    }
}

export default CustomFilters;

const StyledFilterContainer = styled.div`
    background-color: #fff2c4;
    font-family: ${props => props.theme.titleFont}
    .sliderName {
        font-size: 8pt;
    }
    .sliderContainer {
        background-color: #fffaea;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`