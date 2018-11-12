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
            currentPreset: {},
            savedStyle: {}
         };
    }
    previewPreset = (presetInfo) => {
        this.setState({ currentPreset: presetInfo })
    }
    setPreset = (presetInfo) => {
        this.setState({ savedStyle: presetInfo})
    }
    renderFilters = () => {

    }
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                <Header />
                <StyledApp>
                    <div className="leftSection">
                        <ImageDisplay imageStyle={(this.state.currentPreset == {}) ? this.state.savedStyle : this.state.currentPreset} />                    
                    </div>
                    <div className="rightSection">
                        <CodeDisplay />
                        <Presets handlePreviewPreset={this.previewPreset} handleSetPreset={this.setPreset}/>
                        <CustomBackground />
                        <CustomFilters />
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
