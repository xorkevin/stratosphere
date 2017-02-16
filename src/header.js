import React from 'react';

const nextIndex = (current, cap)=>{
  return (current + 1) % cap;
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    if(props.animated){
      this.state = {
        animate: false,
        index: 0,
        imgUrl: props.images[0],
        text: props.text[0],
        imgUrl2: props.images[nextIndex(0, this.props.images.length)],
        text2: props.text[nextIndex(0, this.props.text.length)]
      };
    }
  }

  componentDidMount() {
    if(this.props.animated){
      this.timerID = setInterval(
        () => {this.tick();},
        8000
      );
    }
  }

  tick() {
    this.setState({
      animate: true,
      index: this.state.index,
      imgUrl: this.state.imgUrl,
      text: this.state.text,
      imgUrl2: this.state.imgUrl2,
      text2: this.state.text2,
    });
    const k = nextIndex(this.state.index, this.props.images.length);
    setTimeout(()=>{
      this.setState({
        animate: true,
        index: k,
        imgUrl: this.props.images[k],
        text: this.props.text[k],
        imgUrl2: this.state.imgUrl2,
        text2: this.state.text2,
      });

      setTimeout(()=>{
        this.setState({
          animate: false,
          index: this.state.index,
          imgUrl: this.state.imgUrl,
          text: this.state.text,
          imgUrl2: this.props.images[nextIndex(k, this.props.images.length)],
          text2: this.props.text[nextIndex(k, this.props.text.length)],
        });
      }, 500);
    },1800);
  }

  componentWillUnmount() {
    if(this.props.animated){
      clearInterval(this.timerID);
    }
  }

  render(){
    let k = [];
    let j = ["inner-static"];
    let l = ["inner"];
    if(this.props.size){
      k.push("hero");
      j.push("hero");
      l.push("hero");
      k.push(this.props.size);
      j.push(this.props.size);
      l.push(this.props.size);
    } else {
      k.push("header");
      j.push("header");
      l.push("header");
    }
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
      return <div className={k.join(" ")}>
        <div className={j.join(" ")} style={{backgroundImage: "url(" + this.state.imgUrl + ")"}}>
          <div className="container padded">
            {this.state.text}
          </div>
        </div>
        <div className={l.join(" ")} style={{backgroundImage: "url(" + this.state.imgUrl2 + ")"}}>
          <div className="container padded">
            {this.state.text2}
          </div>
        </div>
      </div>;
    } else {
      return <header className={k.join(" ")} style={{backgroundImage: "url(" + this.props.image + ")"}}>
        <div className="container padded">
          {this.props.children}
        </div>
      </header>;
    }
  }
}

export default Header
