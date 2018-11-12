import React, { Component } from 'react';
import styled from 'styled-components';

class CodeDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    // renderCSS = () => {
    //     return (
            
    //     )
    // }
    round = (value, decimals) => {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
      }
      
    render() {
        return (
            <StyeldCodeDisplay>
                <div className="codeblock">
                    <code>
                        <pre>
                        .container &#123; <br />
                            <span className="codeIndent">
                                <span className="prop">width: </span> 
                                <span className="val">500px;</span>
                            </span>
                            {(this.props.background && this.props.background.currentSelectedBgType === "solid") ? 
                                <span className="codeIndent">
                                    <span className="prop">background: </span> 
                                    <span className="val">{this.props.background.solid.color};</span>
                                </span> 
                                : (this.props.background && this.props.background.currentSelectedBgType === "gradient") ?
                                    <span className="codeIndent">
                                        <span className="prop">background-image: </span> 
                                        <span className="fn">radial-gradient(</span>
                                        <span className="val">{this.props.background.gradient.inner.color} </span>
                                        <span className="val">{this.props.background.gradient.inner.amount}, </span>
                                        <span className="val">{this.props.background.gradient.outer.color} </span>
                                        <span className="val">{this.props.background.gradient.outer.amount}</span>
                                        <span className="fn">);</span>
                                    </span> 
                                : null
                            }

                        &#125;  <br />
                        .img &#123;	<br />
                                <span className="codeIndent">
                                    <span className="prop">width: </span> 
                                    <span className="val">500px;</span>
                                </span>

                                {(this.props.filters.length > 0) ?
                                    <span className="codeIndent">
                                        <span className="prop">filter: </span> 
                                        { this.props.filters.map((filter, index) => {
                                            return (index === this.props.filters.length - 1) ? <span className="val">{filter};</span> : <span className="val">{filter} </span>
                                        }) }
                                    </span> : null }

                                {this.props.background[this.props.background.currentSelectedBgType].opacity && this.props.background[this.props.background.currentSelectedBgType].opacity !== 1 ? 
                                    <span className="codeIndent">
                                        <span className="prop">opacity: </span> 
                                        <span className="val">{this.round(this.props.background[this.props.background.currentSelectedBgType].opacity, 2)};</span>
                                    </span> : null }
                                
                                {(this.props.background[this.props.background.currentSelectedBgType].blendMode && this.props.background[this.props.background.currentSelectedBgType].blendMode !== "normal") ? 
                                    <span className="codeIndent">
                                        <span className="prop">mix-blend-mode: </span>  
                                        <span className="val">{this.props.background[this.props.background.currentSelectedBgType].blendMode}</span>
                                    </span> : null }
                        &#125; 
                        {/* </pre> */}
                        </pre>
                    </code>
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
        font-size: 8pt;
        overflow: scroll;
        background-color: #282a2e;
        color: #81a2be;
        font-family: monospace;
        padding-right: 20px;
        padding-left: 20px;
        width: ${300 - 20 - 20}px;
        margin-top: 20px;
        height: 175px;
        border-radius: 4px;
    }
    .codeIndent {
        padding-left: 30px;
        display: block;
    }
    .prop {
        color: #b294bb;
    }
    .val {
        color: #b5bd68;
    }
    .fn {
        color: #cc6666;
    }
`