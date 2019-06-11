import React, { Component } from 'react';

import styled from "styled-components";

const BackgroundContainer = styled.div`
    background: #dfbb85;
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    overflow: hidden;
`;

// TODO: Implement Basketball Court Lines

const MidCourtCircle = styled.div`
    height: 3vh;
    width: 3vw;
    background: black;
    border-radius: 5px;
    text-align: center;
`;

class Background extends Component {

    render() {
        return (
            <BackgroundContainer>
                <MidCourtCircle/>
            </BackgroundContainer>
        )
    }

}

export default Background;