import React from 'react';
import Time from 'time';

class Comment extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {hidden: props.hidden || false};
  }

  hide(){
    this.setState((prevState)=>{
      return Object.assign({}, prevState, {hidden: true});
    });
  }

  show(){
    this.setState((prevState)=>{
      return Object.assign({}, prevState, {hidden: false});
    });
  }

  toggleHidden(){
    this.setState((prevState)=>{
      return Object.assign({}, prevState, {hidden: !prevState.hidden});
    });
  }

  render(){
    const {depth, username, score, time, content, children} = this.props;
    const k = ["comment"];
    if(this.state.hidden){
      k.push("hidden");
    }
    return <div className={k.join(" ")}>
      <div className="inner">
        <div className="info">
          <span className="data hide"><a className="no-color" onClick={()=>{
            this.toggleHidden();
          }}>[{this.state.hidden && "+"}{!this.state.hidden && "-"}]</a></span>
          <span className="username"><a>{username}</a></span>
          <span className="data score">{score} points</span>
          <span className="data time"><Time value={time}/></span>
        </div>
        <div className="content">{content}</div>
        <div className="options">
          <span><a className="no-color">link</a></span>
          <span><a className="no-color">source</a></span>
          <span><a className="no-color">reply</a></span>
          <span><a className="no-color">report</a></span>
        </div>
      </div>
      { !this.state.hidden && children && <div className="children">
        { depth > 1 && React.Children.map(children, (child)=>{
          return React.cloneElement(child, {depth: depth - 1});
        }) }
        { depth <= 1 && <span><a className="no-color">continue &gt;</a></span> }
        { !depth && typeof depth !== 'number' && children }
      </div> }
    </div>;
  }
}

const sm = 768;
const md = sm * 1.5;
const lg = md * 1.5;
const xs = 768 / 2;

const depthXxs = 4;
const depthXs = 6;
const depthSm = 8;
const depthMd = 12;
const depthLg = 16;

const widthToDepth = (width)=>{
  if(width > lg){
    return depthLg;
  } else if(width > md){
    return depthMd;
  } else if(width > sm){
    return depthSm;
  } else if(width > xs){
    return depthXs;
  }
  return depthXxs;
};

class CommentSection extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      depth: widthToDepth(window.innerWidth),
    };
  }

  tick(){
    this.setState((prevState)=>{
      return Object.assign({}, prevState, {depth: widthToDepth(window.innerWidth)});
    });
  }

  componentDidMount(){
    this.running = false;
    this.handler = ()=>{
      if(!this.running){
        this.running = true;
        window.requestAnimationFrame(()=>{
          this.tick();
          this.running = false;
        });
      }
    };
    window.addEventListener("resize", this.handler);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.handler);
  }

  render(){
    const {children} = this.props;
    return <div className="comment-section">
      { children && React.Children.map(children, (child)=>{
        return React.cloneElement(child, {depth: this.state.depth});
      }) }
      { !children && <span>No comments</span> }
    </div>;
  }
}

const Components = {Comment, CommentSection};

export {Comment, CommentSection}

export default Components
