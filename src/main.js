import 'main.scss';

import React from 'react';
import {render} from 'react-dom';

import Navbar from 'navbar';
import Header from 'header';
import Anchor from 'anchor';
import Footer from 'footer';
import Card   from 'card';
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
    images={["assets/underground.jpg", "assets/mountain.jpg", "assets/forest.jpg"]}
    text={[<h1>Welcome</h1>, <h1>Bienvenue</h1>, <h1>Benvenuto</h1>]}
    animated/>,
  document.getElementById('head')
);

render(
  <Header image="assets/thames.jpg" fixed size="lg"/>,
  document.getElementById('head2')
);

render(
  <Footer>
    <h3>Footer</h3>
    <h4><Anchor ext href="https://github.com/xorkevin/stratosphere"><FaIcon border icon="github"/></Anchor></h4>
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
          <li><Anchor ext href="https://github.com/xorkevin"><FaIcon icon="github"/> xorkevin</Anchor></li>
        </ul>
      </div>
    </div>
  </Footer>,
  document.getElementById('footer')
);

render(
  <div>
    <Card size="lg" background="assets/climb.jpg" title={[
        <h3>Vivamus nibh enim</h3>,<button><FaIcon icon="heart"/></button>
      ]} bar={[
        <button>Share</button>
      ]}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla aliquet condimentum. Nunc facilisis orci dui, sit amet dictum massa porta at. Mauris augue nisi, scelerisque ac suscipit sit amet, egestas ut risus. In hac habitasse platea dictumst. Vivamus nibh enim, dignissim quis consequat at, sagittis in magna.
    </Card>
    <Card size="md" background="assets/flower.jpg" title={[
        <h3>Vivamus nibh enim</h3>,<button><FaIcon icon="heart"/></button>
      ]} bar={[
        <button>Share</button>
      ]}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla aliquet condimentum. Nunc facilisis orci dui, sit amet dictum massa porta at. Mauris augue nisi, scelerisque ac suscipit sit amet, egestas ut risus. In hac habitasse platea dictumst. Vivamus nibh enim, dignissim quis consequat at, sagittis in magna.
    </Card>
    <Card size="sm" background="assets/underground.jpg" title={[
        <h3>Vivamus nibh enim</h3>,<button><FaIcon icon="heart"/></button>
      ]} bar={[
        <button>Share</button>
      ]}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla aliquet condimentum. Nunc facilisis orci dui, sit amet dictum massa porta at. Mauris augue nisi, scelerisque ac suscipit sit amet, egestas ut risus. In hac habitasse platea dictumst. Vivamus nibh enim, dignissim quis consequat at, sagittis in magna.
    </Card>
  </div>,
  document.getElementById('isolated-cards')
);
