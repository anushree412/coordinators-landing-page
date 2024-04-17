import React from 'react';
import '../Styles/header.css'; // Importing the CSS file for styling

function Header() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-brand" >
          <img src="/src/Components/images/logo-utsav.jpeg" alt="" width="100" height="80" className="d-inline-block align-text-top" />
        </div>
      </div>
    </nav>
  );
}

export default Header;