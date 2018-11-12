import React, { Component } from 'react';
import styled from 'styled-components';

const pic1 = require('../static/pic1.jpg')
// const pic2 = require('../static/pic2.jpg')
// const pic3 = require('../static/pic3.jpg')
// const pic4 = require('../static/pic4.jpg')
// const pic5 = require('../static/pic5.jpg')


class ImageDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <StyledImageDisplay {...this.props}>
                    <div className="container">
                        <img src={pic1} />
                    </div>

                

            </StyledImageDisplay>
        );
    }
}

export default ImageDisplay;

const outerColor = (props) => (props.imageStyle.background && props.imageStyle.background.radialGradient && props.imageStyle.background.radialGradient.outer) ? props.imageStyle.background.radialGradient.outer.color : `none`;
const outerAmount = (props) => (props.imageStyle.background && props.imageStyle.background.radialGradient && props.imageStyle.background.radialGradient.outer) ? props.imageStyle.background.radialGradient.outer.amount : `none`;

const innerColor = (props) => (props.imageStyle.background && props.imageStyle.background.radialGradient && props.imageStyle.background.radialGradient.inner) ? props.imageStyle.background.radialGradient.inner.color : `none`;
const innerAmount = (props) => (props.imageStyle.background && props.imageStyle.background.radialGradient && props.imageStyle.background.radialGradient.inner) ? props.imageStyle.background.radialGradient.inner.amount : `none`;


const StyledImageDisplay = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;

    .container {
        width: 300px;
        background: ${props => (props.imageStyle.background) ? props.imageStyle.background.backgroundColor : 'none'};
        background-image: radial-gradient(${(props) => outerColor(props)} ${(props) => outerAmount(props)}, ${(props) => innerColor(props)} ${(props) => innerAmount(props)});
    }

    img {
        // display:
        width: 50%;
        filter: ${props => props.imageStyle.filters};
        opacity: ${props => (props.imageStyle.background) ? props.imageStyle.background.opacity : 'none'};
        mix-blend-mode: ${props => (props.imageStyle.background) ? props.imageStyle.background.mixBlendMode : 'none'};
    }
`


    // .img {
    //     background-image: url("${pic3}");
    //     background-size: 300px 300px;
    //     filter: ${props => props.imageStyle.filters};
    // }
    // .img:before {
    //     width: 300px;
    //     height: 300px;
    //     display: block;
    //     position: relative;
    //     content: "";
    //     opacity: ${props => (props.imageStyle.background) ? props.imageStyle.background.opacity : 'none'};
    //     background-color: ${props => (props.imageStyle.background) ? props.imageStyle.background.backgroundColor : 'none'};
    //     background-image: radial-gradient(${(props) => color1(props)} ${(props) => color1Amt(props)}, ${(props) => color2(props)} ${(props) => color2Amt(props)});
    //     mix-blend-mode: ${props => (props.imageStyle.background) ? props.imageStyle.background.mixBlendMode : 'none'};
    // }
//filter: ${props => props.imageStyle.filters};

        //opacity: ${props => props.imageStyle.opactiy}      
        //background-image: radial-gradient(${props => props.imageStyle.background.radialGradiant.color1.color} ${props => props.imageStyle.background.radialGradiant.color1.amout}, ${props => props.imageStyle.background.radialGradiant.color2.color}, ${props => props.imageStyle.background.radialGradiant.color2.amount});
        //mix-blend-mode: ${props => props.imageStyle.background.blendMode};
