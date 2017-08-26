import React from 'react';
import Container from 'container';

class Section extends React.Component {
  render(){
    let id = "";
    if(this.props.id){
      id = this.props.id;
    }

    if(this.props.container){
      return <section id={id}>
        <Container padded={this.props.padded}>
          { this.props.sectionTitle && <h3 className="section-header">{this.props.sectionTitle}</h3> }
          { this.props.children }
        </Container>
      </section>;
    }

    return <section id={id}>
      { this.props.sectionTitle && <h3 className="section-header">{this.props.sectionTitle}</h3> }
      { this.props.children }
    </section>;
  }
}

export default Section
