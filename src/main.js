import 'main.scss';

import React from 'react';
import {render} from 'react-dom';

import Navbar  from 'navbar';
import Header  from 'header';
import Section from 'section';
import Grid    from 'grid';
import Article from 'article';
import Anchor  from 'anchor';
import Footer  from 'footer';
import Card    from 'card';
import FaIcon  from 'faicon';
import Input   from 'form';

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
<main>
  <Header fixed color="primary" image="assets/underground.jpg">
    <h1 className="colossal">Welcome</h1>
  </Header>
  <Section id="cards" sectionTitle="Cards anyone?" container padded>
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
  </Section>
  <Header image="assets/thames.jpg" fixed size="lg"/>
  <Section id="typography" sectionTitle="Typography" container padded>
    <h1>Heading 1 <small>small</small></h1>
    <h2>Heading 2 <small>small</small></h2>
    <h3>Heading 3 <small>small</small></h3>
    <h4>Heading 4 <small>small</small></h4>
    <h5>Heading 5 <small>small</small></h5>
    <h6>Heading 6 <small>small</small></h6>
    <span>Text <small>small</small></span>

    <Article title="Lorem ipsum" author="Kevin Wang" time="2017-02-10T09:48:34Z">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla aliquet condimentum. Nunc facilisis orci dui, sit amet dictum massa porta at. Mauris augue nisi, scelerisque ac suscipit sit amet, egestas ut risus. In hac habitasse platea dictumst. Vivamus nibh enim, dignissim quis consequat at, sagittis in magna. Aliquam accumsan, nisl vel sollicitudin fringilla, libero neque vehicula mauris, eu laoreet nunc ligula convallis nulla. Aliquam felis elit, fermentum ac felis sagittis, porttitor placerat odio. Ut consectetur est lectus, sed maximus libero malesuada ut. Proin aliquet, sapien et pretium feugiat, dui diam posuere diam, ut tempor elit purus quis metus.</p>
      <p>Nulla facilisi. Phasellus blandit interdum est, in pellentesque nunc fermentum et. Proin nibh risus, sollicitudin ac urna sed, aliquet hendrerit massa. Pellentesque vehicula fringilla purus, sit amet bibendum turpis malesuada in. Aliquam nisl enim, elementum id dapibus at, suscipit non arcu. Suspendisse sodales massa vitae dolor vestibulum, lacinia congue enim hendrerit. Curabitur dapibus, arcu a pulvinar pulvinar, lectus elit eleifend dolor, id tincidunt nunc dolor eu orci. Sed neque massa, cursus et enim quis, gravida fermentum est. Nam non justo accumsan arcu volutpat ullamcorper sit amet nec mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer a sagittis nibh, sit amet posuere sapien. Aliquam erat volutpat. Phasellus vitae cursus turpis, posuere viverra diam. Fusce mollis consectetur ligula.</p>
    </Article>
  </Section>
  <Section id="form" sectionTitle="Form" container padded>
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
  </Section>
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
  </Footer>
</main>
  ,document.getElementById('mount')
);
