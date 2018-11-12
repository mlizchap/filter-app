import React, { Component } from 'react';
import styled from 'styled-components';

class CodeDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <StyeldCodeDisplay>
                <div className="codeblock">

                </div>
            </StyeldCodeDisplay>
        );
    }
}

export default CodeDisplay;

const StyeldCodeDisplay = styled.div`
    display: flex;
    justify-content: center;
    .codeblock {
        background-color: #282828;
        width: 80%;
        height: 100px;
        border-radius: 4px;
    }
`