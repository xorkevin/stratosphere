import React from 'react';

const scrollTime = 384;

const easing = (t)=>{
  if(t<.5){
    return 4*t*t*t;
  } else {
    return (t-1) * (2*t-2) * (2*t-2) + 1;
  }
};

const scrollTo = (element, duration)=>{
  const startingY = window.pageYOffset;
  let elementY = 0;
  if(element){
    elementY = window.scrollY + document.getElementById(element).getBoundingClientRect().top;
  }
  const targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY;
  const diff = targetY - startingY;
  let start;
  if(!diff){
    return;
  }
  window.requestAnimationFrame(function step(timestamp) {
    if (!start){
      start = timestamp;
    }
    const time = timestamp - start;
    window.scrollTo(0, startingY + diff * easing(Math.min(time / duration, 1)));
    if(time < duration) {
      window.requestAnimationFrame(step)
    }
  });
};

class Navbar extends React.Component {
  render(){
    const {left, right} = this.props;
    let j = [];
    let k = [];
    if(left){
      for(let i = 0; i < left.length; i++){
        if(Array.isArray(left[i]) && left[i].length > 1){
          j.push(<div className="item" onClick={()=>{scrollTo(left[i][1], scrollTime);}}>{left[i][0]}</div>);
        } else {
          j.push(<div className="item">{left[i]}</div>);
        }
      }
    }
    if(right){
      for(let i = 0; i < right.length; i++){
        if(Array.isArray(right[i]) && right[i].length > 1){
          k.push(<div className="item" onClick={()=>{scrollTo(right[i][1], scrollTime);}}>{right[i][0]}</div>);
        } else {
          k.push(<div className="item">{right[i]}</div>);
        }
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
