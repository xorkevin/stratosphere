import 'main.scss';

import React from 'react';
import {render} from 'react-dom';

import Navbar from 'navbar';
import Header from 'header';
import Anchor from 'anchor';

render(
  <Navbar left={[
    ['Home', ''],
    ['Cards', 'cards'],
    ['Typography', 'typography'],
  ]} right={[
    <Anchor href="#">Contact</Anchor>,
    <Anchor ext href="https://github.com/xorkevin"><i className="fa fa-github" aria-hidden="true"></i> xorkevin</Anchor>,
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
