import React from 'react';
import Button from 'react-bootstrap/Button';
import Link from 'react-bootstrap/NavLink';

export default function () {
    return (
      <nav>
        <ul>
          <li><a href = './Home'>Home</a></li>
          <li><a href = './About'>About</a></li>
          <li><a href = '../Components/TaskList'>Task List</a></li>
        </ul>
      </nav>
    );
  }