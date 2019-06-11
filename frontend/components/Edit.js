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
    dragBounds: { left: '0%', right: '800%', top: '0%', bottom: '800%' },
    init: { scale: 1 },
    hover: { scale: 1.2 },
    drag: { scale: 1.1 },
    normal: {x: ({angle}) => Math.cos(angle/100)*100 + 100, y: ({angle}) => Math.sin(angle/100)*100 + 100},
})

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxVisible: true,
            x:0,
            y: 0,

        };
    }

    componentDidMount() {
        console.log("Mounted");
        let angle = 0;
        this.update = setInterval(() => {
            angle++;
            console.log("Setting...");
            this.setState({angle: angle});
        }, 50);
    }

    componentWillUnmount() {
        clearInterval(this.update);
    }

    render() {
        return (
            <div>
                {/* <Background>
                    
                </Background> */}
                <Box style={{
                    width: "100px",
                    height: "100px",
                    background: "#ff1c68",
                    transformOrigin: "50% 50%"
                }}
                onDragEnd={e => console.log(e)}
                className = "Box" pose = "idk" poseKey={this.state.angle} angle = {this.state.angle}>
                </Box>
            </div>
        )
    }
}

export default Edit;