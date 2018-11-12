import styled, {css} from 'styled-components';

const sliderWidth = "100px"


export const SliderContainer = styled.div `
    width: ${props => props.width}px;
    margin-left: auto;
    margin-right: 0;
    margin-bottom: 10px;
`   // @media (min-width: 500px) and (max-width: ${props => props.theme.largeScreenMin}) {
    //     margin-right: auto;
    // }
    // @media (max-width: ${props => props.theme.mobileMax}px) {
    //     background-color: orange;
    //     width: 90%;
    //     margin-right: auto;
    //     margin-left: 
    // }

    
export const Slider = styled.input`
//width: 80%;
// REMOVE DEFAULT STYLING
&[type=range] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
}

&[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
}

&[type=range]:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

&[type=range]::-ms-track {
    width: 100%;
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent; 
    border-color: transparent;
    color: transparent;
}

// STYLING THE THUMB
&[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    //box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border-radius: 3px;
    border: 1px solid ${props => props.thumbBorder};
    height: 20px;
    width: 20px;
    //border-radius: 3px;
    //border-radius: 50%;
    background: ${props => 
        (props.disabled && props.theme.lightgray)
        || props.thumbColor};
    cursor: pointer;
    margin-top: ${8.4/2 - 20/2}px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
    //box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
}

/* All the same stuff for Firefox */
&[type=range]::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    border-radius: 3px;
    width: 16px;
    //border-radius: 3px;
    border-radius: 50%;
    background: ${props => 
        (props.disabled && props.theme.lightgray)
        || props.thumbColor};
    cursor: pointer;
}

/* All the same stuff for IE */
&[type=range]::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    //border: 1px solid #000000;
    border-radius: 50%;
    border-radius: 3px;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: ${props => 
        (props.disabled && props.theme.lightgray)
        || props.thumbColor};
    cursor: pointer;
}

/* THE TRACKER */
&[type=range]::-webkit-slider-runnable-track {
//width: 100%;
//height: 8.4px;
cursor: pointer;
//box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
background: ${props => 
    (props.disabled && props.theme.lightgray)
    || props.trackerColor};
border-radius: 1.3px;
//border: 0.2px solid #010101;
}

&[type=range]:focus::-webkit-slider-runnable-track {
    background: ${props => 
        (props.disabled && props.theme.lightgray)
        || props.trackerColor};
}

&[type=range]::-moz-range-track {
width: 100%;
height: 8.4px;
cursor: pointer;
//box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
background: ${props => 
    (props.disabled && props.theme.lightgray)
    || props.trackerColor};
border-radius: 1.3px;
//border: 0.2px solid #010101;
}

&[type=range]::-ms-track {
width: 100%;
height: 8.4px;
cursor: pointer;
background: transparent;
border-color: transparent;
border-width: 16px 0;
color: transparent;
}
&[type=range]::-ms-fill-lower {
background: ${props => 
    (props.disabled && props.theme.lightgray)
    || props.trackerColor};
//border: 0.2px solid #010101;
border-radius: 2.6px;
//box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
&[type=range]:focus::-ms-fill-lower {
background: ${props => 
    (props.disabled && props.theme.lightgray)
    || props.trackerColor};
}
&[type=range]::-ms-fill-upper {
background: ${props => 
    (props.disabled && props.theme.lightgray)
    || props.trackerColor};
//border: 0.2px solid #010101;
border-radius: 2.6px;
//box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
&[type=range]:focus::-ms-fill-upper {
background: ${props => 
    (props.disabled && props.theme.lightgray)
    || props.trackerColor};
}

&[type=range]::-webkit-slider-runnable-track {
width: 100%;
height: 8.4px;
cursor: pointer;
//box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
background: ${props => 
    (props.disabled && props.theme.lightgray)
    || props.trackerColor};
border-radius: 1.3px;
//border: 0.2px solid #010101;
}

&[type=range]:focus::-webkit-slider-runnable-track {
background: ${props => 
    (props.disabled && props.theme.lightgray)
    || props.trackerColor};
}

&[type=range]::-moz-range-track {
width: 100%;
height: 8.4px;
cursor: pointer;
//box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
background: ${props => 
    (props.disabled && props.theme.lightgray)
    || props.trackerColor};
border-radius: 1.3px;
//border: 0.2px solid #010101;
}

&[type=range]::-ms-track {
width: 100%;
height: 8.4px;
cursor: pointer;
background: transparent;
border-color: transparent;
border-width: 16px 0;
color: transparent;
}
&[type=range]::-ms-fill-lower {
background: ${props => 
    (props.disabled && props.theme.lightgray)
    || props.trackerColor};
//border: 0.2px solid #010101;
border-radius: 2.6px;
//box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
&[type=range]:focus::-ms-fill-lower {
background: ${props => 
    (props.disabled && props.theme.lightgray)
    || props.trackerColor};
}
&[type=range]::-ms-fill-upper {
background: ${props => 
    (props.disabled && props.theme.lightgray)
    || props.trackerColor};
//border: 0.2px solid #010101;
border-radius: 2.6px;
//box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
&[type=range]:focus::-ms-fill-upper {
background: ${props => 
    (props.disabled && props.theme.lightgray)
    || props.trackerColor};
}

// STYLING THE TRACK
&[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    //box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
background: ${props => 
    (props.disabled && props.theme.lightgray)
    || props.trackerColor};
    border-radius: 1.3px;
    //border: 0.2px solid #010101;
}

&[type=range]:focus::-webkit-slider-runnable-track {
    background: ${props => 
        (props.disabled && props.theme.lightgray)
        || props.trackerColor};
}

&[type=range]::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    //box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: ${props => 
        (props.disabled && props.theme.lightgray)
        || props.trackerColor};
    border-radius: 1.3px;
    //border: 0.2px solid #010101;
}

&[type=range]::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
}
&[type=range]::-ms-fill-lower {
    background: ${props => 
        (props.disabled && props.theme.lightgray)
        || props.trackerColor};
    //border: 0.2px solid #010101;
    border-radius: 2.6px;
    //box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
&[type=range]:focus::-ms-fill-lower {
    background: ${props => 
        (props.disabled && props.theme.lightgray)
        || props.theme.bgColor2};
}
&[type=range]::-ms-fill-upper {
    background: ${props => 
        (props.disabled && props.theme.lightgray)
        || props.trackerColor};
    //border: 0.2px solid #010101;
    border-radius: 2.6px;
    //box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
&[type=range]:focus::-ms-fill-upper {
    background: ${props => 
        (props.disabled && props.theme.lightgray)
        || props.trackerColor};
}
`