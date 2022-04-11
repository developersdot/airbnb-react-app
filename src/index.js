import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';


  const data = [
    {
      'key': 1,
      'img': 'image 12.svg',
      'star': '5.0',
      'reviews': 6,
      'location':'USA',
      'tagline':'Life lessons with Katie Zaferes',
      'price':'$136'
    },
    {
      'key': 2,
      'img': 'wedding-photography 1.svg',
      'star': '5.0',
      'reviews': 30,
      'location':'USA',
      'tagline':'Learn wedding photography',
      'price':'$125'
    },
    {
      'key': 3,
      'img': 'mountain-bike 1.png',
      'star': '5.0',
      'reviews': 2,
      'location':'USA',
      'tagline':'Group Mountain Biking',
      'price':'$50'
    }
  ];

  const cards = data.map(item => {
    return(
      <Card 
        key={item.key}
        {...item} 
      />
    );
  });

ReactDOM.render(
  <React.StrictMode>
    <Header  />
    <Main />
    <div className="card-main">
      {cards}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

