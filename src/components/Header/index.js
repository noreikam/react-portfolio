import React, { useEffect } from 'react';
import Nav from '../Nav';

function Header(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage
  } = props;

  return(
    <header className="flex-row">
      <h1>
        <a href="/">Matthew Carl Noreika</a>
      </h1>
      <Nav         
        pages = {pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}/>
    </header>
  )
}

export default Header;