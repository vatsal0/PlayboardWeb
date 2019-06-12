import React from 'react';
import styled, {keyframes} from "styled-components";

const colorChange = keyframes`
0%{
    background: #dfbb85;
}
20%{
    background: #ffc97f;
}
40%{
    background: #e4a562;
}
60%{
    background: #9a4d31;
}
80%{
    background: #fea531;
}
100%{
    background: #dfbb85;
}
`;

const BackgroundContainer = styled.div`
    background: #dfbb85;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    animation: ${colorChange} 20s linear infinite;
`;

export default BackgroundContainer;