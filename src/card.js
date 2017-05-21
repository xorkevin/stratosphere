import React from 'react';

class Card extends React.Component {
  render(){
    let k = ["card square"];
    if(this.props.size){
      k.push(this.props.size);
    } else {
      k.push("sm");
    }
    let s = {};
    if(this.props.background){
      s = {
        backgroundImage: "url(" + this.props.background + ")",
      };
    }
    return <div className={k.join(" ")}>
      <div className="title" style={s}>
        <div className="inner">
          {this.props.title}
        </div>
      </div>
      <div className="body">
        {this.props.children}
      </div>
      <div className="bar">
        {this.props.bar}
      </div>
    </div>;
  }
}

export default Card
