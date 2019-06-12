import React, { Component } from 'react';
import styled from "styled-components";

const Nav = styled.nav`
    background: #f9c852;
    padding: 5px;
    position: absolute;
    width: 100%;
    height: 10%;
`;

const Brand = styled.a`
    color: #fafafa !important;
    font-family: 'Faster One', arial;
    font-size: 2.5em;
    text-align: center;
    width: 100%;
`;

class Navbar extends Component {

    render() {
        return (
            <Nav>
                <Brand>This the Navbar</Brand>
            </Nav>
        )
    }

}

export default Navbar;
