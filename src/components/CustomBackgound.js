import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import styled from 'styled-components';

import ColorSelect from './ColorSelect';

class CustomBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {  
        };
    }
    render() {
        return (
            <StyledCustomBackroundSection>
                <div>Customize Background</div>
                <ColorSelect />
            </StyledCustomBackroundSection>
        );
    }
}

export default CustomBackground;

const StyledCustomBackroundSection = styled.div`

    .colorPopUp {
        position: 'absolute',
        zIndex: '2',
    }
    .colorContainer {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
    }
`