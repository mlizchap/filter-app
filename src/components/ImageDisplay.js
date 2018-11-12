import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const pic1 = require('../static/pic1.jpg')
// const pic2 = require('../static/pic2.jpg')
// const pic3 = require('../static/pic3.jpg')
// const pic4 = require('../static/pic4.jpg')
// const pic5 = require('../static/pic5.jpg')


class ImageDisplay extends Component {
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

const innerColor = (props) => (!_.isEmpty(props.background.gradient)) ? props.background.gradient.inner.color : null;
const outerColor = (props) => (!_.isEmpty(props.background.gradient)) ? props.background.gradient.outer.color : null;



const StyledImageDisplay = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;

    .container {
        width: 300px;
        background: ${props => (props.background) ? props.background.solid.color : null};
        background-image: radial-gradient(${innerColor} 20%, ${outerColor} 80%);
    }

    img {
        width: 100%;
        filter: ${props => props.filters};
        opacity: ${props => (props.isSolidBg) ? (1 - props.background.solid.opacity) : (1 - props.background.gradient.opacity)};
        mix-blend-mode: ${props => (props.isSolidBg) ? props.background.solid.blendMode : props.background.gradient.blendMode}
    }

`

        // background: ${props => props.background.solid.color};

// const outerColor = (props) => (props.imageStyle.background && props.imageStyle.background.radialGradient && props.imageStyle.background.radialGradient.outer) ? props.imageStyle.background.radialGradient.outer.color : `gray`;
// const outerAmount = (props) => (props.imageStyle.background && props.imageStyle.background.radialGradient && props.imageStyle.background.radialGradient.outer) ? props.imageStyle.background.radialGradient.outer.amount : `80%`;

// const innerColor = (props) => (props.imageStyle.background && props.imageStyle.background.radialGradient && props.imageStyle.background.radialGradient.inner) ? props.imageStyle.background.radialGradient.inner.color : `gray`;
// const innerAmount = (props) => (props.imageStyle.background && props.imageStyle.background.radialGradient && props.imageStyle.background.radialGradient.inner) ? props.imageStyle.background.radialGradient.inner.amount : `20%`;

// .container {
//     width: 300px;
//     background: ${props => (props.imageStyle.background) ? props.imageStyle.background.backgroundColor : 'none'};
//     background-image: radial-gradient(${(props) => innerColor(props)} ${(props) => innerAmount(props)}, ${(props) => outerColor(props)} ${(props) => outerAmount(props)});
// }

// img {
//     // display:
//     width: 50%;
//     filter: ${props => props.imageStyle.filters};
//     opacity: ${props => (props.imageStyle.background) ? props.imageStyle.background.opacity : 'none'};
//     mix-blend-mode: ${props => (props.imageStyle.background) ? props.imageStyle.background.mixBlendMode : 'none'};
// }
