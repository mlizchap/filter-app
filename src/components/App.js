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
        this.setState({ savedStyle: presetInfo})
    }
    renderFilters = () => {

    }
    objectIsEmpty(obj) {
        return (Object.keys(obj).length === 0 && obj.constructor === Object) ? true : false
    }
    changeFilterValue = (content) => {
        if (Object.keys(this.state.savedStyle).length === 0 && this.state.savedStyle.constructor === Object) {
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
            let indexToChange;
            const filters = this.state.savedStyle.filters.map(filter => {
                // if the filter of the slider being changed exists in state, replace the values
                return (regExp.exec(filter)[0] === regExp.exec(content)[0]) ? content : filter
            })
            this.setState({ savedStyle: {...this.state.savedStyle, filters }})
            // this.setState({ savedStyle: {}})
            // this.state.savedStyle.filters.forEach((filter,index) => {
            //     if (regExp.exec(filter)[0] === regExp.exec(content)[0]) {
            //         
            //         this.state.savedStyle.filters.map(filter => {
            //             return ()
            //         })
            //     }                
            // })
            
            //const contentFilter = regExp.exec(content)[0]


            
            //filtersInState.includes(content)
            // var matches = regExp.exec("before(fasdfasd)");
            // console.log(matches[0])
            //console.log(this.state.savedStyle.filters.includes(content))
        }
        
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

                        <CustomBackground />
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
        background-color: #c9dce8;
    }
    .rightSection {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        background-color: #c7bad6;
    }
`
