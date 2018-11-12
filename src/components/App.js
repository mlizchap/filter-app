import React, { Component } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import {theme} from '../globalStyles';
import ImageDisplay from './ImageDisplay';
import Header from './Header';
import CustomBackground from './CustomBackgound';
import CustomFilters from './CustomFilters';
import Presets from './Presets';
import CodeDisplay from './CodeDisplay';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentStyle: {},
            savedStyle: {}
         };
    }
    previewPreset = (presetInfo) => {
        this.setState({ currentStyle: presetInfo })
    }
    setPreset = (presetInfo) => {
        this.setState({ 
            savedStyle: presetInfo,
            currentStyle: {}
        }, () => console.log(this.state.savedStyle))
    }
    renderFilters = () => {

    }
    objectIsEmpty(obj) {
        return (Object.keys(obj).length === 0 && obj.constructor === Object) ? true : false
    }
    changeFilterValue = (content) => {
        console.log(this.state.currentStyle)
        if (this.objectIsEmpty(this.state.savedStyle)) {
            //console.log("no state")
            this.setState({ 
                savedStyle: {
                    name: "custom", 
                    filters: [`${content}`],
                    background: {}
                }
            })
        } else {
            const regExp =  /^[^\(]+/; // to get text before parens (this filter name)
            const stateFilterNames = this.state.savedStyle.filters.map(filter => regExp.exec(filter)[0])
            const contentFilterName = regExp.exec(content)[0]
            
            // if the filter exists in the state, edit the filter
            if (stateFilterNames.includes(contentFilterName)) {
                const filters = this.state.savedStyle.filters.map(filter => {
                    return (regExp.exec(filter)[0] === regExp.exec(content)[0]) ? content : filter
                })
                this.setState({ savedStyle: {...this.state.savedStyle, filters }})
            } else {
                // if the filter doesn't exists - add it
                console.log(this.state.savedStyle.filters)
                this.setState({ 
                    savedStyle: { ...this.state.savedStyle,  filters: [...this.state.savedStyle.filters, content] }}, 
                    () => console.log(this.state.savedStyle))
            }
        }
        
    }
    changeBgColor = (color) => {
        // console.log(color)
        // console.log(this.state.savedStyle)
        if (this.objectIsEmpty(this.state.savedStyle)) {
            this.setState({ 
                savedStyle: {
                    background: {
                        backgroundColor: `${color};`,
                        opacity: 0.5
                    } 
                } 
            })
        } else {
            this.setState({ 
                savedStyle: { ...this.state.savedStyle, background: {...this.state.savedStyle.background, backgroundColor: `${color};`}}
            })
        }
    }
    changeBgOpacity = (opacityValue) => {
        this.setState({ 
            savedStyle: { ...this.state.savedStyle, background: {...this.state.savedStyle.background, opacity: `${1 - Number(opacityValue)};` }}
        }, () => console.log(this.state))
    }
    render() {
        //console.log(this.state.currentStyle)
        return (
            <ThemeProvider theme={theme}>
                <div>
                <Header />
                <StyledApp>
                    <div className="leftSection">
                        <ImageDisplay imageStyle={(this.objectIsEmpty(this.state.currentStyle)) ? this.state.savedStyle : this.state.currentStyle} />                    
                    </div>
                    <div className="rightSection">
                        <CodeDisplay />
                        <Presets handlePreviewPreset={this.previewPreset} handleSetPreset={this.setPreset}/>
                        <CustomFilters handleChangeFilterValue={this.changeFilterValue}/>

                        <CustomBackground 
                            handleChangeBgColor={this.changeBgColor}
                            handleChangeBgOpacity={this.changeBgOpacity}
                        />
                    </div>
                </StyledApp>
                </div>
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
