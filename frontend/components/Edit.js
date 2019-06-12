import React, { Component } from "react";
import posed from "react-pose";
import styled from "styled-components";
import Animator from "../lib/Animator.js";

const Background = styled.div`
    background: #F1C38E;
    width: 100vw;
    height: 80vh;
    left: 0;
    top: 0;
    overflow: hidden;
    background-image: url("../static/nba_court.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
`

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
    dragBounds: ({bounds}) => bounds(),
    //open: {x: ({pos}) => pos/10}
})

const Player = posed.div({
    draggable: true,
    dragBounds: ({bounds}) => bounds,
})

const Container = styled.div`
    height: 75vh;
    width: 100vh;
    margin-left: auto;
    margin-right: auto;
    display: block;
    top: 10%;
    position: relative;
`


class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playersPlaced: 0,
            players: [],
            playerPositions: [],
            update: undefined,
            currentFrame: 0
        };
    }

    componentDidMount() {
        console.log("Mounted");
        setInterval(() => {
            if (this.state.dragging) {
                let pos = this.state.playerPositions[this.state.i]
                this.setState({currentFrame: Animator.updateFrame(this.state.i, pos.x, pos.y)});
            }
        },200/3)
    }

    componentWillUnmount() {
        
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
                                        this.state.i = i;
                                        this.state.dragging = true;
                                    }}
                                    onDragEnd={(e) => {
                                        this.state.dragging = false;
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
                    
                    <Dragger id="dragger" style={{
                        width: "5vh",
                        height: "5vh",
                        borderRadius: "10vh",
                        position: "relative",
                        left: (this.state.currentFrame*110/360) + "vh",
                        top: "25%",
                        background: "#ff1c68",
                        transformOrigin: "0% 0%"
                    }}
                    onValueChange = {{
                        x: x => {
                            let rect = document.getElementById("bottom").getBoundingClientRect();
                            let drect = document.getElementById("dragger").getBoundingClientRect();
                        }
                    }}
                    onDragEnd={(e) => {
                        let rect = document.getElementById("bottom").getBoundingClientRect();
                        let drect = document.getElementById("dragger").getBoundingClientRect();
                        this.setState({currentFrame: (360*(drect.left - rect.left)/rect.width)})
                    }}
                    bounds = {() => {
                        let rect = document.getElementById("bottom").getBoundingClientRect();
                        let drect = document.getElementById("dragger").getBoundingClientRect();
                        console.log({left: rect.left - drect.left, right: rect.right - drect.right})
                        return {left: rect.left - drect.left, right: rect.right - drect.right}
                    }}
                    >

                    </Dragger>
                </BottomBar>
            </div>
        )
    }
}

export default Edit;