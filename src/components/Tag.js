import React, { Component } from "react";
import { Link } from "react-router-dom";


const sumValues = (obj) => {
  let sum = 0;
  for( let el in obj ) {
    if( obj.hasOwnProperty( el ) ) {
      sum += parseFloat( obj[el] );
    }
  }
  return sum;
}

class Tag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagTorender: {
                label: '',
                sentiment: {},
                pageType: {}
            }
        }
    }

    

    componentDidMount() {
        this.props.tags.map(tag => {
            if (tag.id === this.props.match.params.id) {
                this.setState({
                    tagTorender: {
                        label: tag.label,
                        sentiment : Object.assign({}, tag.sentiment),
                        pageType: Object.assign({}, tag.pageType)
                    }
                })
            }
        })
    }

    render() {
        const {tagTorender} = this.state;
        const total = sumValues(tagTorender.sentiment);
            return (
                <div>
                    <Link to="/">Back</Link>
                    <h2>Label: {tagTorender.label}</h2>
                    <hr/>
                    <h2>Toal mentions: {total}</h2>
                    <hr/>
                    <h2>Positive Mentions: {tagTorender.sentiment.positive ? tagTorender.sentiment.positive : 0}</h2>
                    <h2>Neutral Mentions: {tagTorender.sentiment.neutral ? tagTorender.sentiment.neutral : 0}</h2>
                    <h2>Negative Mentions: {tagTorender.sentiment.negative ? tagTorender.sentiment.negative : 0}</h2>
                    <hr/>
                    <h2>Page Types:</h2>
                    <ul>
                        <li>Blog: {tagTorender.pageType.blog ? tagTorender.pageType.blog : '-'}</li>
                        <li>Facebook: {tagTorender.pageType.facebook ? tagTorender.pageType.facebook : '-'}</li>
                        <li>Forum: {tagTorender.pageType.forum ? tagTorender.pageType.forum : '-'}</li>
                        <li>General: {tagTorender.pageType.general ? tagTorender.pageType.general : '-'}</li>
                        <li>Image: {tagTorender.pageType.image ? tagTorender.pageType.image : '-'}</li>
                        <li>News: {tagTorender.pageType.news ? tagTorender.pageType.news : '-'}</li>
                        <li>Review: {tagTorender.pageType.review ? tagTorender.pageType.review : '-'}</li>
                        <li>Twitter: {tagTorender.pageType.twitter ? tagTorender.pageType.twitter : '-'}</li>
                        <li>Video:{tagTorender.pageType.video ? tagTorender.pageType.video : '-'}</li>
                    </ul>
                </div>
            )
        }
}


export default Tag;