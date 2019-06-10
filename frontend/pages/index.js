import Head from "next/head";
import React, {Component} from "react";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "Home",
        };
    }

    render() {
        return (
            <div>
                <Head>
                    <title>{"Playboard - " + this.state.page}</title>
                    <link type="text/css" rel="stylesheet" href="/static/materialize.css"  media="screen,projection"/>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <script type="text/javascript" src="/static/materialize.js"></script>
                </Head>
            </div>
        )
    }
}

export default Main;