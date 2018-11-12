import React, { Component } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import ImageDisplay from './ImageDisplay';
import CodeDisplay from './CodeDisplay';
import PresetSection from './PresetSection';
import {theme} from '../globalStyles';
import CustomFilters from './CustomFilters';
import CustomBackground from './CustomBackgroundSection';
import { filterData } from '../data/filters';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filterObjects: filterData,
            filters: [],
            background: { 
                solid: { 
                    color: "rgba(215, 215, 224, 1)",
                    opacity: .5,
                    blendMode: "normal"
                },
                gradient: {
                    inner: {
                        color: "rgba(215, 215, 224, 1)",
                        amount: "20%"
                    },
                    outer: {
                        color: "rgba(89, 89, 91,1)",
                        amount: "80%"
                    },
                    opacity: .5
                }, 
                none: {
                    color: "white",
                    opacity: 1,
                    blendMode: "normal"
                },
                currentSelectedBgType: "none"                
            },
         };
    }
    changeFilterValue = (content) => {
        const regExp =  /^[^\(]+/; // to get text before parens (this filter name)
        const stateFilterNames = (this.state.filters.length >  0) ? this.state.filters.map(filter => regExp.exec(filter)[0]) : []
        const contentFilterName = regExp.exec(content)[0]

        if (!stateFilterNames.includes(contentFilterName)) {
            this.setState({
                filters: [...this.state.filters, content]
            })
        } else {
            const filters = this.state.filters.map(filter => {
                return (regExp.exec(filter)[0] === regExp.exec(content)[0]) ? content : filter
            })
            this.setState({ filters })
        }
    }
    displayPreset = (content) => {
        this.setState({ 
            filters: content.filters,
            background: content.background,
        })
    }
    changeBGProps = (bgType, propName, value) => {
        // console.log(bgType, propName, value)
        this.setState({
            background: {
                ...this.state.background,
                [bgType]: {
                    ...this.state.background[bgType],
                    [propName]: [value]
                }
            }
        })
    }
    changeGradientProps = (name, prop, value) => {
        this.setState({ 
            background: {
                ...this.state.background,
                gradient: {
                    ...this.state.background.gradient,
                    [name]: {
                        ...this.state.background.gradient[name],
                        [prop]: [value]
                    }
                }
                
            }
        }, () => console.log(this.state))
    }

    renderGradientCSS = () => {
        const string="";
        const { outer, inner } = this.state.background.gradient;
        return `background-image: radial-gradient(${inner.color} ${inner.amount} ${outer.color} ${inner.amount})`
    }
    changeBackgroundType = (selectedType) => {
        const currentSelectedBgType = (selectedType === "Solid Color" ? "solid" : selectedType.toLowerCase())
        this.setState({ background: {...this.state.background, currentSelectedBgType} })
    }
    getCurrentAndDefaultFilters = () => {
        const parsedActiveFilterObjects = this.parseActiveFilters();
        const parsedActiveFilterNames = this.parseActiveFilters().map(i => i.name);

        const updatedFilters = this.state.filterObjects.map(filter => {
            if (parsedActiveFilterNames.includes(filter.name)) {
                return {
                    ...filter,
                    value: parsedActiveFilterObjects.filter(obj => obj.name === filter.name)[0].value
                }
            } else {
                return filter
            }
        })

        console.log(updatedFilters);


    }
    parseActiveFilters = () => {
        const filters =  (this.state.filters.length > 0) ? this.state.filters[0].split(" ") : null;

        return (filters) ? filters.map(i => {
            return { 
                name: i.split('(')[0],
                value: i.split('(')[1].slice(0, -1)
            }
        }) : []
    }
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledApp>
                    <div className="leftSection">
                        <ImageDisplay 
                            filters={this.state.filters} 
                            bgType={this.state.background[this.state.background.currentSelectedBgType]}
/>
                        <CodeDisplay 
                            background={this.state.background}
                            filters={this.state.filters}
                            currentSelectedBgType={this.state.background.currentSelectedBgType}
                        />
                    </div>
                    <div className="rightSection">
                       
                        <PresetSection 
                            handleDisplayPreset={this.displayPreset}
                        />

                        <div>
                        <CustomBackground 
                            handleChangeBackground={this.changeBGProps}
                            handleChangeGradient={this.changeGradientProps}
                            handleChangeBackgroundType={this.changeBackgroundType}
                        />
                        </div>

                        <div>
                        <CustomFilters 
                            handleChangeFilterValue={this.changeFilterValue}
                            currentAndDefaultFilters={this.getCurrentAndDefaultFilters()}
                        />
                        </div>
                    </div>
                </StyledApp>
            </ThemeProvider>
        );
    }
}

export default App;

const StyledApp = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    display: flex;
    .leftSection {
        width: 100%;
        // background-color: #c9dce8;
    }
    .rightSection {
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        width: 100%;
        // background-color: #c7bad6;
    }
    .rightSection > div {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`