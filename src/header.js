import React from 'react';

const nextIndex = (current, cap)=>{
  return (current + 1) % cap;
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    if(props.animated){
      this.state = {animate: false, index: 0, imgUrl: props.images[0], imgUrl2: props.images[nextIndex(0, this.props.images.length)]};
    }
  }

  componentDidMount() {
    if(this.props.animated){
      this.timerID = setInterval(
        () => {this.tick();},
        7000
      );
    }
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
    if(this.props.animated){
      clearInterval(this.timerID);
    }
  }

  render(){
    let k = [];
    if(this.props.fixed){
      k.push("fixed");
    }
    if(this.props.animated){
      k.push("animated");

      if(this.state.animate){
        k.push("animate");
      }
    }
    if(this.props.animated){
      return <header className={k.join(" ")}>
        <div className="inner-static header" style={{backgroundImage: "url(" + this.state.imgUrl + ")"}}>
          <div className="container padded">
          </div>
        </div>
        <div className="inner header" style={{backgroundImage: "url(" + this.state.imgUrl2 + ")"}}>
          <div className="container padded">
          </div>
        </div>
      </header>;
    } else {
      return <header className={k.join(" ")} style={{backgroundImage: "url(" + this.props.image + ")"}}>
        <div className="container padded">
          <h1>Welcome</h1>
        </div>
      </header>;
    }
  }
}

export default Header
