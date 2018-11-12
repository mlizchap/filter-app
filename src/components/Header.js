import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <StyledHeader>
                IMAGE FILTER APP
            </StyledHeader>
        );
    }
}

export default Header;

const StyledHeader = styled.div`
    font-family: ${props => props.theme.titleFont};
    background-color: #50555b;
    color: white;
    padding: 15px 0px;
    text-align: center;
    letter-spacing: .1rem;
`