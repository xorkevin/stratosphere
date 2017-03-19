import 'main.scss';

import React from 'react';
import {render} from 'react-dom';

import Navbar from 'navbar';
import Header from 'header';
import Anchor from 'anchor';
import Footer from 'footer';
import FaIcon from 'faicon';

render(
  <Navbar left={[
    ['Home', ''],
    ['Cards', 'cards'],
    ['Typography', 'typography'],
    ['Form', 'form'],
  ]} right={[
    <Anchor href="#">Contact</Anchor>,
    <Anchor ext href="https://github.com/xorkevin"><FaIcon icon="github"/> xorkevin</Anchor>,
  ]}>
  </Navbar>,
  document.getElementById('nav')
);

render(
  <Header
    images={["https://images.pexels.com/photos/113799/pexels-photo-113799.jpeg?dl&fit=crop&w=1920&h=1280", "https://images.pexels.com/photos/129922/pexels-photo-129922.jpeg?dl&fit=crop&w=1280&h=850", "https://images.pexels.com/photos/168121/pexels-photo-168121.jpeg?dl&fit=crop&w=1920&h=1281"]}
    text={[<h1>Welcome</h1>, <h1>Bienvenue</h1>, <h1>Benvenuto</h1>]}
    animated/>,
  document.getElementById('head')
);

render(
  <Header image="https://images.pexels.com/photos/168121/pexels-photo-168121.jpeg?dl&fit=crop&w=1920&h=1281" fixed size="lg"/>,
  document.getElementById('head2')
);

render(
  <Footer>
    <h3>Footer</h3>
    <div className="grid center">
      <div className="col md-8 sm-12">
        <h4>About</h4>
        <ul>
          <li><a href="#">Who we are</a></li>
          <li><a href="#">Where are we</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>
      <div className="col md-8 sm-12">
        <h4>Products</h4>
        <ul>
          <li><a href="#">Software</a></li>
          <li><a href="#">Design</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>
      <div className="col md-8 sm-12">
        <ul>
          <li><FaIcon icon="code"/> with <FaIcon icon="heart-o"/> by Kevin Wang</li>
          <li><Anchor ext href="https://github.com/xorkevin"><FaIcon border icon="github"/> xorkevin</Anchor></li>
        </ul>
      </div>
    </div>
  </Footer>,
  document.getElementById('footer')
)
