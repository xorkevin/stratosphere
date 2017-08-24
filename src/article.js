import React from 'react';
import Time from 'time';

class Article extends React.Component {
  render(){
    return <article>
      <h2>{this.props.title}</h2>
      <span className="info">{this.props.author} <Time value={this.props.time}/></span>
      { this.props.children }
    </article>;
  }
}

export default Article
