import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import animated, { keyframes } from 'styled-components';


const Welcome = styled.h1`
    font-size: 10em;
    color: white;
    font: 'Trebuchet MS', sans-serif;
    width: 10vwh;
    height: 100vw;
    position: fixed;
    left: 25%;
    top: 50%;
`;

const colorchange = keyframes`
0%{
    background: #f9c852;
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
    background: #f9c852;
}
`
const Background = styled.div`
    background: black;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    animation: ${colorchange} 10s linear infinite;
`;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Background>
                <Welcome>Welcome</Welcome>
            </Background>
        )
    }
}

export default Home;