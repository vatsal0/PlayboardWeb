import React, { Component } from 'react';
import styled from "styled-components";

const Nav = styled.nav`
    background: #f9c852;
    padding: 5px;
    margin: 0 !important;
`;

const Brand = styled.a`
    color: #fafafa !important;
    font-family: 'Faster One', arial;
    font-size: 2.5em;
    text-align: center;
    width: 100%;
    position: relative;
`;

class Navbar extends Component {

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Faster+One&display=swap" rel="stylesheet"/>

                <Nav className="navbar navbar-light">
                    <Brand className="navbar-brand">
                        Play<span style={{color: "#2274A5"}}>Board</span>
                    </Brand>
                </Nav>
            </div>
        )
    }

}

export default Navbar;