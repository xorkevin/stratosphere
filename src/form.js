import React from 'react';

class Input extends React.PureComponent {
  render(){
    let k = ["input"];
    if(this.props.valid){
      k.push("valid");
    } else if(this.props.error){
      k.push("invalid");
    }

    if(this.props.fullWidth){
      k.push("full-width");
    }

    return <div className={k.join(" ")}>
      { !this.props.textarea && <input placeholder=" "/> }
      { this.props.textarea && <textarea placeholder=" "></textarea> }
      <label>{this.props.label}</label>
      { !this.props.error && this.props.info && <span className="info">{this.props.info}</span> }
      { this.props.error && <span className="error">{this.props.error}</span> }
    </div>;
  }
}

export default Input
