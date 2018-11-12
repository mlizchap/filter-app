import React, { Component } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import ImageDisplay from './ImageDisplay';
import CodeDisplay from './CodeDisplay';
import PresetSection from './PresetSection';
import {theme} from '../globalStyles';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filters: []
         };
    }
    displayPreset = (content) => {
        this.setState({ filters: content.filters})
    }
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledApp>
                    <div className="leftSection">
                        <ImageDisplay filters={this.state.filters}/>
                    </div>
                    <div className="rightSection">
                        <CodeDisplay />
                        <PresetSection 
                            handleDisplayPreset={this.displayPreset}
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