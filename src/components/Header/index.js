import React, { useEffect } from 'react';

function Header(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage
  } = props;

  console.log(pages);

  useEffect(() => {document.title = currentPage.name}, [currentPage])

  return(
    <header className="flex-row">
      <h1>
        <a href="/">Matthew Carl Noreika</a>
      </h1>
      <nav>
        <ul className="flex-row">
          {pages.map((page) => (
            <li key={page.name} onClick={() => {setCurrentPage(page);}}>
                {page.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header;