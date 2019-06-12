import React, { Component } from "react";
import posed from "react-pose";
import styled from "styled-components";
import play_json from "../static/sample_play";

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
`
const ReplayButton = posed.div({
    hoverable: true,
    init: {scale: 1},
    hover: {scale: 1.3},
    normal: {x: ({width}) => {return (width / 2 - 15) + "px" }, y: ({height}) => { return (height - 200) }}
});

const Player = posed.div({
    //theoretically there will be a object of some type with each player and an array of their positions over time, time will be used to index this array
    normal: {x: ({player, time}) => {
        if(time >= player.positions.length)
            return player.positions[player.positions.length-1][0];
        else
            return player.positions[time][1];
    }, y: ({player, time}) => {
        if(time >= player.positions.length)
            return player.positions[player.positions.length-1][1];
        else
            return player.positions[time][1];
    }}
});

class Playback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: play_json,
            time: 0,
        };
        this.advancePlay = this.advancePlay.bind(this);
        this.createPlayers = this.createPlayers.bind(this);
        this.resetTime = this.resetTime.bind(this);
    }

    advancePlay() {
        this.setState({time: this.state.time+1});        
    }

    resetTime() {
        this.setState({time: 0})
    }

    createPlayers() {
        let players = [];
        for(let i = 0; i < this.state.play.players.length; i++) {
            players.push(
                <Player style={{
                    width: "5vh",
                    height: "5vh",
                    borderRadius: "10vh",
                    background: "#ff1c68"
                }}
                className = "Player" pose = "normal" poseKey = {this.state.time} player = {this.state.play.players[i]} time = {this.state.time}>
            </Player>
            )
        }
        return players;
    }

    componentDidMount() {
        var intervalID = setInterval(this.advancePlay, 100);
        this.setState({intervalID : intervalID});
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalID);
    }

    render() {
        return (
            <div>
                <Background>
                    {this.createPlayers()}
                    <ReplayButton style = {{
                        width: "8vh",
                        height: "8vh",
                        borderRadius: "16vh",
                        background: "#6495ed",
                    }} onClick = {this.resetTime}
                    className = "ReplayButton" pose = "normal" width = {1920} height = {937}>
                    </ReplayButton>
                </Background>
            </div>
        )
    }
}
export default Playback;