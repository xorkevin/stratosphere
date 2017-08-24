import React from 'react';

class Container extends React.Component {
  render(){
    const k = ["container"];
    if(this.props.padded){
      k.push("padded")
    }

    return <div className={k.join(" ")}>
      { this.props.children }
    </div>;
  }
}

export default Container
