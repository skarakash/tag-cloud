import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.tags.map(tag => {
                        return (
                            <li key={tag.id} style={{'fontSize': `${tag.sentimentScore}px`}}>
                                < Link to={`/${tag.id}`}>{tag.label}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}



export default Home;