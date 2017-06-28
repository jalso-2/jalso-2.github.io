import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const projects = [
  {
    name: 'LangSnap',
    deployedUrl: 'http://www.github.com',
    image: './images/bargainhound.jpg',
    description: 'A customizable language learning experience focused on transitioning from phrases to fluency',
  },
  {
    name: 'Bargain Hound',
    deployedUrl: 'http://13.59.205.240/#!/dashboard',
    image: './images/bargainhound.jpg',
    description: 'Identifying publicly traded stocks that may be a bargain',
  },
  {
    name: 'Spork',
    deployedUrl: 'http://www.github.com',
    image: './images/bargainhound.jpg',
    description: 'Sharing leftovers with friends to create delicious meals with a social atmosphere'
  },
  {
    name: 'PickUp',
    deployedUrl: 'http://13.59.205.240:443/#/index',
    image: './images/pickup_how_to.jpg',
    description: 'An internet and text interface for joining and creating pick-up sports games',
  },
];

ReactDOM.render(
  <main>
    <BrowserRouter>
      <App projects={projects} />
    </BrowserRouter>
  </main>
  , document.getElementById('root'));
registerServiceWorker();
