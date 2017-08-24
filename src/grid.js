import React from 'react';

class Grid extends React.Component {
  render(){
    const k = ["grid"];
    if(this.props.strict){
      k.push("strict");
    }
    if(this.props.verticalCenter){
      k.push("vertical-center");
    }
    if(this.props.horizontalCenter){
      k.push("horizontal-center");
    }

    const childProps = {
      xs: this.props.xs,
      sm: this.props.sm,
      md: this.props.md,
      lg: this.props.lg,
    };

    return <div className={k.join(" ")}>
      { React.Children.map(this.props.children, (child)=>{
        let key = null;
        if(React.isValidElement(child)){
          if(child.props.colkey){
            key = child.props.colkey;
          }
        } else if(typeof child === 'string'){
          key = child;
        }
        return <Column key={key} {...childProps}>{child}</Column>;
      }) }
    </div>;
  }
}

const switchSize = (prefix, number)=>{
  if(number < 1){
    return prefix + "-1";
  } else if(number > 24){
    return prefix + "-24";
  }
  return prefix + "-" + number;
};

class Column extends React.Component {
  render(){
    const k = ["col"];
    if(this.props.xs){
      k.push(switchSize("xs", this.props.xs));
    }
    if(this.props.sm){
      k.push(switchSize("sm", this.props.sm));
    }
    if(this.props.md){
      k.push(switchSize("md", this.props.md));
    }
    if(this.props.lg){
      k.push(switchSize("lg", this.props.lg));
    }

    return <div className={k.join(" ")}>
      { this.props.children }
    </div>;
  }
}

class Container extends React.Component {
  render(){
    const k = ["container"];
    if(this.props.padded){
      k.push("padded")
    }

    let id = "";
    if(this.props.id){
      id = this.props.id;
    }

    return <div className={k.join(" ")} id={id}>
      { this.props.sectionTitle && <h1 className="section-header">{this.props.sectionTitle}</h1> }
      { this.props.children }
    </div>;
  }
}

const Components = { Grid, Column, Container };

export { Grid, Column, Container }

export default Components
