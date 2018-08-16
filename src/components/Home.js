import React from 'react';
import { Link } from 'react-router-dom';

import App from './App';
import Contacts from './Contacts';

const Home = () => {
  return (
    <div>
      <h1>hi!</h1>
      <Link to="/contacts"><button>Contacts</button></Link>
    </div>
  )
}

export default Home;
