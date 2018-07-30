import React from 'react';
import { Link } from "react-router-dom";

 const Home = ({tags}) =>  {
        return (
            <ul>
                {
                    tags.map(tag => {
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



export default Home;