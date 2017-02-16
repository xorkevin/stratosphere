import React from 'react';

const nextIndex = (current, cap)=>{
  return (current + 1) % cap;
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {animate: false, index: 0, imgUrl: props.images[0], imgUrl2: props.images[nextIndex(0, this.props.images.length)]};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => {this.tick();},
      7000
    );
  }

  tick() {
    this.setState({
      animate: true,
      index: this.state.index,
      imgUrl: this.state.imgUrl,
      imgUrl2: this.state.imgUrl2,
    });
    const k = nextIndex(this.state.index, this.props.images.length);
    setTimeout(()=>{
      this.setState({
        animate: true,
        index: k,
        imgUrl: this.props.images[k],
        imgUrl2: this.state.imgUrl2,
      });

      setTimeout(()=>{
        this.setState({
          animate: false,
          index: this.state.index,
          imgUrl: this.state.imgUrl,
          imgUrl2: this.props.images[nextIndex(k, this.props.images.length)],
        });
      }, 500);
    },1125);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render(){
    let k = ["head"];
    if(this.state.animate){
      k.push("animate");
    }
    return <div className={k.join(" ")}>
      <div className="inner-static hero md" style={{backgroundImage: "url(" + this.state.imgUrl + ")"}}>
        <div className="container padded">
        </div>
      </div>
      <div className="inner hero md" style={{backgroundImage: "url(" + this.state.imgUrl2 + ")"}}>
        <div className="container padded">
        </div>
      </div>
    </div>;
  }
}

export default Header
