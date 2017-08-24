import React from 'react';

class Article extends React.Component {
  render(){
    return <article>
      <h2>{this.props.title}</h2>
      <span className="info">{this.props.author} <time>{this.props.time}</time></span>
      { this.props.children }
    </article>;
  }
}

export default Article
