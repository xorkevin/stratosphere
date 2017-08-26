import React from 'react';

class FaIcon extends React.PureComponent {
  render(){
    if(this.props.border){
      return <span className="faicon border">
        <span className="inner">
          <i className={"fa fa-" + this.props.icon}></i>
        </span>
      </span>;
    } else {
      return <i className={"fa fa-" + this.props.icon}></i>;
    }
  }
}

export default FaIcon
