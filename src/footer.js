import React from 'react';
import Container from 'container';

class Footer extends React.PureComponent {
  render(){
    return <footer>
      <Container padded>
        {this.props.children}
      </Container>
    </footer>;
  }
}

export default Footer
