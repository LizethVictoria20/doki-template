import React from 'react';
import '../../public/index.css'

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/documentation">Documentation</a></li>
          <li><a href="/tutorial">Tutorial</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;