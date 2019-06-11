import React, { Component } from "react";
import posed from "react-pose";
import styled from "styled-components";

const Background = styled.div`
    background: #F1C38E;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    overflow: hidden;
`

const Box = posed.div({
    hoverable: true,
    draggable: true,
    dragBounds: { left: '0%', right: '800%', top: '0%', bottom: '800%s' },
    init: { scale: 1 },
    hover: { scale: 1.2 },
    drag: { scale: 1.1 }
})

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxVisible: true
        };
    }

    componentDidMount() {
        console.log("Mounted");
        this.update = setInterval(() => {
            console.log("Setting...");
            //this.setState({boxVisible: !this.state.boxVisible});
        }, 8000);
    }

    componentWillUnmount() {
        clearInterval(this.update);
    }

    render() {
        return (
            <div>
                <Background>
                    
                </Background>
                {/* <Box style={{
                    width: "100px",
                    height: "100px",
                    background: "#ff1c68",
                    transformOrigin: "50% 50%"
                }}
                    
                className = "Box" pose = {"none"}>
                </Box> */}
            </div>
        )
    }
}

export default Edit;