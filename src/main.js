import 'main.scss';

import React from 'react';
import {render} from 'react-dom';

import Navbar from 'navbar';
import Header from 'header';
import {Grid, Column, Container} from 'grid';
import Anchor from 'anchor';
import Footer from 'footer';
import Card   from 'card';
import FaIcon from 'faicon';
import Input  from 'form';

render(
  <Navbar left={[
    {key: 'home', scroll: true, component: 'Home', target: ''},
    {key: 'cards', scroll: true, component: 'Cards', target: 'cards'},
    {key: 'typography', scroll: true, component: 'Typography', target: 'typography'},
    {key: 'form', scroll: true, component: 'Form', target: 'form'},
  ]} right={[
    {key: 'contact', scroll: false, component: 'Contact', target: '#'},
    {key: 'xorkevin', scroll: false, component: <span><FaIcon icon="github"/> xorkevin</span>, ext: true, target: 'https://github.com/xorkevin'},
  ]}>
  </Navbar>,
  document.getElementById('nav')
);

render(
  <Header fixed color="primary" image="assets/underground.jpg">
    <h1 className="colossal">Welcome</h1>
  </Header>,
  document.getElementById('head')
);

render(
  <Container padded id="cards" sectionTitle="Cards anyone?">
    <Grid md={8} sm={12}>
      <Card colkey="underground" size="md" restrictHeight background="assets/underground.jpg" title={[
          <h3>Lorem ipsum</h3>,<button><FaIcon icon="heart"/></button>
        ]} bar={[
          <button>View</button>
        ]}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Card>
      <Card colkey="mountain" size="md" restrictHeight background="assets/mountain.jpg" title={[
          <h3>Dolor sit amet</h3>,<button><FaIcon icon="heart"/></button>
        ]} bar={[
          <button>View</button>
        ]}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla aliquet condimentum. Nunc facilisis orci dui, sit amet dictum massa porta at. Mauris augue nisi, scelerisque ac suscipit sit amet, egestas ut risus. In hac habitasse platea dictumst. Vivamus nibh enim, dignissim quis consequat at, sagittis in magna.</p>
      </Card>
      <Card colkey="forest" size="md" restrictHeight background="assets/forest.jpg" title={[
          <h3>Consectetur</h3>,<button><FaIcon icon="heart"/></button>
        ]} bar={[
          <button>View</button>
        ]}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Card>
      <Card colkey="flower" size="md" restrictHeight background="assets/flower.jpg" title={[
          <h3>Adipiscing elit</h3>,<button><FaIcon icon="heart"/></button>
        ]} bar={[
          <button>View</button>
        ]}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Card>
      <Card colkey="climb" size="md" restrictHeight background="assets/climb.jpg" title={[
          <h3>Integer fringilla</h3>,<button><FaIcon icon="heart"/></button>
        ]} bar={[
          <button>View</button>
        ]}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Card>
      <Card colkey="thames" size="md" restrictHeight background="assets/thames.jpg" title={[
          <h3>Aliquet</h3>,<button><FaIcon icon="heart"/></button>
        ]} bar={[
          <button>View</button>
        ]}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Card>
      {'String'}
    </Grid>
    <div>
      <Card size="lg" square background="assets/climb.jpg" title={[
          <h3>Vivamus nibh enim</h3>,<button><FaIcon icon="heart"/></button>
        ]} bar={[
          <button>Share</button>
        ]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla aliquet condimentum. Nunc facilisis orci dui, sit amet dictum massa porta at. Mauris augue nisi, scelerisque ac suscipit sit amet, egestas ut risus. In hac habitasse platea dictumst. Vivamus nibh enim, dignissim quis consequat at, sagittis in magna.
      </Card>
      <Card size="md" square background="assets/flower.jpg" title={[
          <h3>Vivamus nibh enim</h3>,<button><FaIcon icon="heart"/></button>
        ]} bar={[
          <button>Share</button>
        ]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla aliquet condimentum. Nunc facilisis orci dui, sit amet dictum massa porta at. Mauris augue nisi, scelerisque ac suscipit sit amet, egestas ut risus. In hac habitasse platea dictumst. Vivamus nibh enim, dignissim quis consequat at, sagittis in magna.
      </Card>
      <Card size="sm" square background="assets/underground.jpg" title={[
          <h3>Vivamus nibh enim</h3>,<button><FaIcon icon="heart"/></button>
        ]} bar={[
          <button>Share</button>
        ]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla aliquet condimentum. Nunc facilisis orci dui, sit amet dictum massa porta at. Mauris augue nisi, scelerisque ac suscipit sit amet, egestas ut risus. In hac habitasse platea dictumst. Vivamus nibh enim, dignissim quis consequat at, sagittis in magna.
      </Card>
      <Card size="md" restrictWidth titleBar title={[
          <h3>Vivamus nibh enim</h3>,<button><FaIcon icon="heart"/></button>
        ]} bar={[
          <button>Share</button>
        ]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla aliquet condimentum. Nunc facilisis orci dui, sit amet dictum massa porta at. Mauris augue nisi, scelerisque ac suscipit sit amet, egestas ut risus. In hac habitasse platea dictumst. Vivamus nibh enim, dignissim quis consequat at, sagittis in magna.
      </Card>
    </div>
  </Container>,
  document.getElementById('grid')
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
    <Input label="Name"/>
    <Input label="Email" error="not an email"/>
    <Input label="Phone" valid/>
    <Input label="Tagline" info="What describes you?"/>
    <Card size="lg" restrictWidth titleBar title={[
        <h3>Vivamus nibh enim</h3>
      ]} bar={[
        <button>Submit</button>
      ]}>
      <Input textarea fullWidth label="Biography" info="Tell us about yourself"/>
    </Card>
  </div>,
  document.getElementById('form')
);
