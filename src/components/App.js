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
                        color: "",
                        amount: ""
                    },
                    opacity: null
                }, 
                currentSelectedBgType: "solid"                
            },
         };
    }
    changeFilterValue = (content) => {
        console.log(content)
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
        console.log(content)
        this.setState({ 
            filters: content.filters,
            background: content.background,
        }, () => console.log(this.state.background))
    }
    changeSolidBgColor = (content) => {
        console.log(content)
        this.setState({
            background: {
                ...this.state.background,
                solid: {
                    ...this.state.background.solid,
                    color: content
                }
                
            }
        }, () => console.log(this.state.background))
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
        }, () => console.log(this.state.background))
    }
    changeSolidBlendMode = (content) => {
        console.log(content)
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
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledApp>
                    <div className="leftSection">
                        <ImageDisplay 
                            filters={this.state.filters} 
                            background={this.state.background}
                            isSolidBg={(this.state.background.currentSelectedBgType === "solid") ? true : false}
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