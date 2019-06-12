import Head from "next/head";
import React, { Component } from "react";

import Navbar from '../components/Navbar';

import Home from '../components/Home';
import Edit from "../components/Edit";

const PAGES = {
    HOME: <Home />,
    EDIT: <Edit />
};

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "EDIT",
        };

        this.renderPage = this.renderPage.bind(this);
    }

    renderPage() {
        return PAGES[this.state.page];
    }

    render() {
        return (
            <div style = {{overflow: "hidden"}}>
                <Head>
                    <title>{"Playboard - " + this.state.page}</title>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
                </Head>
                <body>
                    <Navbar />
                    <main>
                        { this.renderPage() }
                    </main>
                </body>
            </div>
        )
    }
}

export default Main;