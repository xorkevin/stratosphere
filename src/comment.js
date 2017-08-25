import React from 'react';
import Time from 'time';

class Comment extends React.Component {
  render(){
    return <div className="comment">
      <div className="inner">
        <div className="info">
          <span className="username"><a>{this.props.username}</a></span>
          <span className="data score">{this.props.score} points</span>
          <span className="data time"><Time value={this.props.time}/></span>
        </div>
        <div className="content">{this.props.content}</div>
        <div className="options">
          <span><a className="no-color">link</a></span>
          <span><a className="no-color">source</a></span>
          <span><a className="no-color">reply</a></span>
          <span><a className="no-color">hide</a></span>
          <span><a className="no-color">report</a></span>
        </div>
      </div>
      { this.props.children && <div className="children">
        { this.props.children }
      </div> }
    </div>;
  }
}

class CommentSection extends React.Component {
  render(){
    return <div className="comment-section">
      { this.props.children }
    </div>;
  }
}

const Components = {Comment, CommentSection};

export {Comment, CommentSection}

export default Components
