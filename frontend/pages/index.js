import Head from "next/head";
import React, {Component} from "react";
import Edit from "../components/Edit";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: PAGES.HOME,
        };

        this.renderPage = this.renderPage.bind(this);
    }

    renderPage() {
        switch(this.state.page) {
            case PAGES.HOME:
                return <Home />;
            default:
                return <Home />;
        }
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
                <Edit>
                    
                </Edit>
            </div>
        )
    }
}

export default Main;