import React, { Component } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import ImageDisplay from './ImageDisplay';
import CodeDisplay from './CodeDisplay';
import PresetSection from './PresetSection';
import {theme} from '../globalStyles';
import CustomFilters from './CustomFilters';
import CustomBackground from './CustomBackgroundSection';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filters: [],
            background: { 
                solid: { 
                    color: "none",
                    opacity: .5,
                    blendMode: "normal"
                },
                gradient: {
                    inner: {
                        color: "",
                        amount: ""
                    },
                    outer: {
                        color: "rgba(208, 208, 208, 1)",
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
        // console.log(content)
        this.setState({ 
            filters: content.filters,
            background: content.background,
        })
    }
    changeSolidBgColor = (content) => {
        // console.log(content)
        this.setState({
            background: {
                ...this.state.background,
                solid: {
                    ...this.state.background.solid,
                    color: content
                }
                
            }
        })
    }
    changeSolidBgOpacity = (content) => {
        this.setState({
            background: {
                ...this.state.background,
                solid: {
                    ...this.state.background.solid,
                    opacity: content
                }
                
            }
        })
    }
    changeSolidBlendMode = (content) => {
        // console.log(content)
        this.setState({ 
            background: {
                ...this.state.background,
                solid: {
                    ...this.state.background.solid,
                    blendMode: content
                }
                
            }
        })
    }
    changeGradientColor = (name, color) => {
        // console.log(name, color)
        this.setState({ 
            background: {
                ...this.state.background,
                gradient: {
                    ...this.state.background.gradient,
                    [name]: {
                        ...this.state.background.gradient[name],
                        color: color
                    }
                }
                
            }
        })
    }
    changeGradientAmount = (name, amount) => {
        this.setState({ 
            background: {
                ...this.state.background,
                gradient: {
                    ...this.state.background.gradient,
                    [name]: {
                        ...this.state.background.gradient[name],
                        amount: `${amount}%`
                    }
                }
                
            }
        }, () => console.log(this.state.background.gradient))
    }
    changeBackgroundType = (selectedType) => {
        const currentSelectedBgType = (selectedType === "Solid Color" ? "solid" : selectedType.toLowerCase())
        this.setState({ background: {...this.state.background, currentSelectedBgType} }, () => console.log(this.state.background.currentSelectedBgType))
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
                    </div>
                    <div className="rightSection">
                        <CodeDisplay />
                        <PresetSection 
                            handleDisplayPreset={this.displayPreset}
                        />
                        <CustomFilters handleChangeFilterValue={this.changeFilterValue}/>
                        <CustomBackground 
                            handleChangeBgOpacity={this.changeSolidBgOpacity}
                            handleChangeBgColor={this.changeSolidBgColor}
                            handleSelectBgBlendMode={this.changeSolidBlendMode}
                            handleChangeGradientAmount={this.changeGradientAmount}
                            handleGradientColorChange={this.changeGradientColor}
                            handleChangeBackgroundType={this.changeBackgroundType}
                        />
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
        // justify-content: space-around;
        width: 100%;
        // background-color: #c7bad6;
    }
    .rightSection > div {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`