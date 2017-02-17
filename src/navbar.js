import React from 'react';

class Navbar extends React.Component {
  render(){
    const {left, right} = this.props;
    let j = [];
    let k = [];
    if(left){
      for(let i = 0; i < left.length; i++){
        j.push(<div className="element">{left[i]}</div>);
      }
    }
    if(right){
      for(let i = 0; i < right.length; i++){
        k.push(<div className="element">{right[i]}</div>);
      }
    }
    return <nav>
      <div className="container padded">
        <div className="element">
          {j}
        </div>
        <div className="element">
          {this.props.children}
        </div>
        <div className="element">
          {k}
        </div>
      </div>
    </nav>;
  }
}

export default Navbar
