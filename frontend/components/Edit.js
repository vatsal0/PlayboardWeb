import React, { Component } from "react";
import posed from "react-pose";
import styled from "styled-components";
import Animator from "../lib/Animator.js";

const Background = styled.div`
    background: #F1C38E;
    width: 100vw;
    height: 90vh;
    left: 0;
    top: 0;
    overflow: hidden;
    background-image: url("../static/nba_court.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
`;

const BottomBar = styled.div`
    background: #C1C38E;
    vertical-align: bottom;
    height: 10vh;
    width: 110vh;
    margin-left: auto;
    margin-right: auto;
`

const Dragger = posed.div({
    draggable: "x",
    dragBounds: {left: "0%", right: "2200%"},
})

const Player = posed.div({
    draggable: true,
    dragBounds: ({bounds}) => bounds,
});

const Container = styled.div`
    height: 75vh;
    width: 100vh;
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
            playerPositions: [],
            update: undefined,
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
            <div style = {{background: '#F1C38E'}}>
                <Background>
                    <Container id="Container" onClick={(e) => {
                        if (this.state.playersPlaced < 5) {
                            let i = this.state.playersPlaced;
                            let rect = document.getElementById("Container").getBoundingClientRect();
                            let ox = (e.clientX - rect.left);
                            let oy = (e.clientY - rect.top);
                            this.setState({
                                playersPlaced: this.state.players.push(
                                    <Player key = {i+1} style={{
                                        width: "5vh",
                                        height: "5vh",
                                        borderRadius: "10vh",
                                        position: "absolute",
                                        left: (ox*100/rect.width)+"%",
                                        top: (oy*100/rect.height)+"%",
                                        background: "#ff1c68",
                                        transformOrigin: "0% 0%"
                                    }} bounds = {{left: -ox, right: rect.width - ox, top: -oy, bottom: rect.height - oy}}
                                    onValueChange={{
                                        x: x => this.state.playerPositions[i].x = (x + ox - rect.left)*100/rect.width,
                                        y: y => this.state.playerPositions[i].y = (y + oy - rect.top)*100/rect.height
                                    }}
                                    onDragStart={(e) => {
                                        this.state.update = setInterval(() => {
                                            let pos = this.state.playerPositions[i]
                                            let frame = Animator.updateFrame(i, pos.x, pos.y);
                                        },200/3)
                                    }}
                                    onDragEnd={(e) => {
                                        clearInterval(this.state.update);
                                    }}>
                                    </Player>
                                )
                            })
                            this.state.playerPositions.push({x: (ox*100/rect.width), y: (oy*100/rect.height)});
                        }
                        }}>
                        {this.state.players}
                    </Container>
                    
                </Background>
                <BottomBar className="footer" id="bottom">
                    <Dragger style={{
                        width: "5vh",
                        height: "5vh",
                        borderRadius: "10vh",
                        position: "absolute",
                        left: 0,
                        top: "92.5vh",
                        background: "#ff1c68",
                        transformOrigin: "50% 50%"
                    }} bounds = {{left: "0%", right: "1000%"}}>

                    </Dragger>
                </BottomBar>
            </div>
        )
    }
}

export default Edit;