import React, {Component} from 'react';
import IndexLink from 'react-router/lib/IndexLink';

import homer from './homer.jpeg';
import './nav.scss';

const Nav = props => {
  return (
    <nav className="nav">
      <img src={homer}/>
      <ul>
        <li><IndexLink to="home" activeClassName="active">Home</IndexLink></li>
        <li><IndexLink to="about" activeClassName="active">About</IndexLink></li>
      </ul>
    </nav>
  );
};

export default Nav;