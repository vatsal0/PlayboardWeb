import React, { Component } from "react";

import Container from './Container';
import Card from './Card';
import BrandedText from './BrandedText';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playName: ""
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handlePlayInputChange = this.handlePlayInputChange.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();

        this.props.handlePlayNavigation(this.state.playName);
    }

    handlePlayInputChange(event) {
        this.setState({ playName: event.target.value });
    }

    render() {
        return (
            <Container>
                <div className="col-md-4 offset-md-4 col-sm-10 offset-sm-1" style={{marginTop: 90}}>
                    <Card cardTitle={<span> Welcome to <br/> <BrandedText primaryColor="#000000" /> </span> }
                          cardSubTitle="Playboard is an interactive Play Creation Tool for Basketball"
                          cardText="Enter the name of your Play to start">

                        <form>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Name" value={this.state.playName} onChange={this.handlePlayInputChange}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control btn btn-primary btn-flat bg-success" type="submit" onClick={this.handleFormSubmit}/>
                            </div>
                        </form>
                    </Card>
                </div>
            </Container>
        )
    }
}

export default Home;