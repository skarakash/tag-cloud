import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/Home';
import Tag from './components/Tag';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tags: []
        }
    }

    componentDidMount(){
        fetch('https://api.myjson.com/bins/udj82', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    tags: json
                })
            });
    }
  render() {
    return (
        <Router>
            <div>
                <Route exact strict path="/" render={props => <Home {...props} tags={this.state.tags}/>}/>
                <Route exact strict path="/:id" render={props => <Tag {...props} tags={this.state.tags}/>}/>
            </div>
        </Router>
    );
  }
}

export default App;
