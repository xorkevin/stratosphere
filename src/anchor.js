import React from 'react';

class Anchor extends React.PureComponent {
  render(){
    let k = {};
    let j = [];
    if(this.props.ext){
      k = {
        target: "_blank",
        rel: "noopener noreferrer",
      };
    }
    if(this.props.noStyle){
      j.push("no-style");
    } else if(this.props.noColor){
      j.push("no-color");
    }

    return <a className={j.join(" ")} {...k} href={this.props.href}>
      {this.props.children}
    </a>;
  }
}

export default Anchor
