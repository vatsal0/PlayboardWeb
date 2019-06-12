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
    background-image: url("../static/nba_court.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
`;

const Player = posed.div({
    draggable: true,
    dragBounds: ({bounds}) => bounds,
});

const Container = styled.div`
    height: 100vh;
    width: 127vh;
    margin-left: auto;
    margin-right: auto;
    display: block;
    top: 10%;
    position: relative;
`;

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playersPlaced: 0,
            players: [],
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
                <Background>
                    <Container id="Container" onClick={(e) => {
                        if (this.state.playersPlaced < 5) {
                            let rect = document.getElementById("Container").getBoundingClientRect();
                            let x = (e.clientX - rect.left);
                            let y = (e.clientY - rect.top);
                            console.log(x,y)
                            this.setState({
                                playersPlaced: this.state.players.push(
                                    <Player key = {this.state.playersPlaced+1} style={{
                                        width: "5vh",
                                        height: "5vh",
                                        borderRadius: "10vh",
                                        position: "absolute",
                                        left: x+"px",
                                        top: y+"px",
                                        background: "#ff1c68",
                                        transformOrigin: "50% 50%"
                                    }} bounds = {{left: -x, right: rect.width - x, top: -y, bottom: rect.height - y}}>
                                    </Player>
                                )
                            })
                        }
                        }}>
                        {/* <Box style={{
                            width: "100px",
                            height: "100px",
                            background: "#ff1c68",
                            transformOrigin: "50% 50%"
                        }}
                        onDragEnd={e => console.log(e)}
                        className = "Box" pose = "normal" poseKey={this.state.angle} angle = {this.state.angle}>
                        </Box> */}
                        {this.state.players}
                    </Container>
                </Background>
            </div>
        )
    }
}

export default Edit;