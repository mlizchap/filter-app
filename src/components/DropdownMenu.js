import React, { Component } from 'react';
import styled from 'styled-components';

class DropDownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            display: "none",
            currentContent: "",
            touched: false
         };
    }
    showContent = () => {
        this.setState({ display: "block"})
    }
    hideContent = () => {
        this.setState({ display: "none"})
    }
    selectContent = (e) => {
        this.setState(
            { currentContent: e.target.innerHTML, touched: true }, 
            () => this.props.handleSelect(this.state.currentContent)
        )
    }
    hoverItem = (e) => {
        this.props.handlePreview(e.target.innerHTML)
    }
    render() {
        return (
            <DropDownMenuStyle contentDisplay={this.state.display} {...this.props}>
                <div onClick={this.showContent} onMouseLeave={this.hideContent} className="dropDownContainer">
                    <button>
                        <span className="currentContent">{(this.state.currentContent && this.props.displayCurrentOnTop) ? this.state.currentContent : this.props.defaultValue}</span>
                        <span className="arrow">&#9660;</span>
                    </button>
                    <div className="content">
                        {this.props.contentItems.map(item => {
                            if (item.toString() === this.state.currentContent || (item === this.props.defaultValue && this.state.touched === false)) {
                                return (
                                    <div key={item} className="item nonActiveItem" onClick={this.selectContent}>
                                        {item}
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={item} className="item activeItem" onClick={this.selectContent} onMouseEnter={this.hoverItem} onMouseLeave={this.props.handleRemovePreview}>
                                        {item}
                                    </div>
                                )
                            } 
                        })}
                    </div>
                </div>
            </DropDownMenuStyle>
        );
    }
}

export default DropDownMenu;

const DropDownMenuStyle = styled.div`
    font-family: inherit;
    display: inline-block;
    .dropDownContainer {
        width: ${props => props.width}px;
    }
    .currentContent {
        display: inline-block;
    }
    button {
        padding: ${props => props.padding};
        width: ${props => props.width}px;
        background-color: ${props => props.buttonColor};
        font-size: ${props => props.fontSize};
        color: ${props => props.buttonFontColor}
        outline: none;
        border: none;
        font-family: ${props => props.font};
        letter-spacing: ${props => props.letterSpacing};

    }
    .content {
        position: absolute;
        z-index: 2;
        width: ${props => props.width}px;
        display: ${props => props.contentDisplay};
        background-color: ${props => props.contentColor}
        color: ${props => props.contentFontColor};
        font-size: ${props => props.fontSize};
        font-family: ${props => props.font}
        z-index: 5;
        max-height: 200px;
        overflow: scroll;
    }
    .activeItem {
        &:hover {
            background-color: ${props => props.contentHighlight};
            cursor: pointer;
        }
    }
    .nonActiveItem {
        background-color: ${props => props.greyedOutBg};
        color: ${props => props.greyedOutColor};
    }
    .item {
       padding: 5px;

    }
    .arrow {
        float: right;
        padding-right: 5px;
    }
`

DropDownMenu.defaultProps = {
    contentItems: ["item1", "item2", "item3"],
    defaultValue: "select",
    displayCurrentOnTop: true,
    handleSelect: (selected) => console.log("you have chosen", selected),
    handlePreview: (content) => console.log("previewed", content),
    handleRemovePreview: () => console.log("remove preview")

}
DropDownMenuStyle.defaultProps = {
    width: '150',
    fontSize: '9pt',
    buttonColor: '#5e7999',
    buttonFontColor: `#edf5ff`,
    contentColor: `#dce6f7`,
    contentFontColor: `#545454`,
    contentHighlight: `#f7faff`,
    padding: `3px`,
    font: 'arial',
    greyedOutBg: '#a5a5a5',
    greyedOutColor: '#dbdbdb',
    letterSpacing: `.05rem`,
}