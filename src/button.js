import React from 'react';

class Button extends React.Component {
  render(){
    const k = [];
    if(this.props.primary){
      k.push("primary");
    } else if(this.props.outline){
      k.push("outline");
    } else if(this.props.text){
      k.push("text");
    }

    if(this.props.fixedWidth){
      k.push("fixed-width");
    }

    return <button className={k.join(" ")}>{this.props.children}</button>
  }
}

export default Button
