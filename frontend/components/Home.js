import React, { Component } from "react";
import styled from "styled-components";

const Welcome = styled.h1`
    font-size: 5em;
    color: white;
    font: 'Trebuchet MS', sans-serif;
    text-align: center;
`;
const Background = styled.div`
    background: black;
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