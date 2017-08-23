import React from 'react';

class Card extends React.Component {
  render(){
    let k = ["card"];
    if(this.props.size){
      switch(this.props.size){
        case "sm":
        case "md":
        case "lg":
          k.push(this.props.size);
        default:
          k.push("sm");
      }
    }

    if(this.props.square){
      k.push("restrict-width");
      k.push("restrict-height");
    } else if(this.props.restrictWidth){
      k.push("restrict-width");
    } else if(this.props.restrictHeight){
      k.push("restrict-height");
    }

    let titleclass = "title";
    if(this.props.titleBar){
      titleclass = "title-bar";
      k.push("accent");
    }

    let s = {};
    if(this.props.background){
      s = {
        backgroundImage: "url(" + this.props.background + ")",
      };
    }

    return <div className={k.join(" ")}>
      <div className={titleclass} style={s}>
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
