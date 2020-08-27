import React from 'react';
import ReactDom from 'react-dom';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 classname='title'>Hats</h1>
          <span className='sub-title'>Shop Now</span>
        </div>
      </div>
    </div>
  </div>
)

export default HomePage;