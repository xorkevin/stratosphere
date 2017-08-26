import React from 'react';
import Container from 'container';

const nextIndex = (current, cap)=>{
  return (current + 1) % cap;
};

const colorSwitch = (colorName)=>{
  if(!colorName){
    return "";
  }
  if(colorName.length == 7 && colorName[0] == '#'){
    return colorName;
  }
  switch(colorName){
    case "accent":
      return "#FFB74D";
    case "primary":
      return "#224A7F";
  }
  return "";
};

class Header extends React.PureComponent {
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
      let s1 = {backgroundImage: "url(" + this.state.imgUrl + ")"};
      let s2 = {backgroundImage: "url(" + this.state.imgUrl2 + ")"}
      const y = colorSwitch(this.props.color);
      if(y !== ""){
        s1.backgroundColor = y;
        s2.backgroundColor = y;
      }
      return <div className={k.join(" ")}>
        <div className={j.join(" ")} style={s1}>
          <Container padded>
            <h1 className="colossal">{this.state.text}</h1>
          </Container>
        </div>
        <div className={l.join(" ")} style={s2}>
          <Container padded>
            <h1 className="colossal">{this.state.text2}</h1>
          </Container>
        </div>
      </div>;
    } else {
      let s = {backgroundImage: "url(" + this.props.image + ")"};
      const y = colorSwitch(this.props.color);
      if(y !== ""){
        s.backgroundColor = y;
      }
      return <header className={k.join(" ")} style={s}>
        <Container padded>
          {this.props.children}
        </Container>
      </header>;
    }
  }
}

export default Header
