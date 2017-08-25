import React from 'react';

class Button extends React.Component {
  render(){
    const k = [];
    if(this.props.primary){
      k.push("primary");
    } else if(this.props.outline){
      k.push("outline");
    }

    return <button className={k.join(" ")}>{this.props.children}</button>
  }
}

export default Button
