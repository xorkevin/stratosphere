import 'main.scss';

import React from 'react';
import {render} from 'react-dom';

import Header from 'header';

render(
  <Header image="https://images.pexels.com/photos/113799/pexels-photo-113799.jpeg?dl&fit=crop&w=1920&h=1280" images={["https://images.pexels.com/photos/113799/pexels-photo-113799.jpeg?dl&fit=crop&w=1920&h=1280", "https://images.pexels.com/photos/129922/pexels-photo-129922.jpeg?dl&fit=crop&w=1280&h=850", "https://images.pexels.com/photos/168121/pexels-photo-168121.jpeg?dl&fit=crop&w=1920&h=1281"]} fixed animated/>,
  document.getElementById('head')
);
