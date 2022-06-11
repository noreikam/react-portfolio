import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [pages] = useState([
    {
      name: "About",
      component: <About />
    },
    {
      name: "Portfolio",
      component: <Portfolio />
    },
    {
      name: "Contact",
      component: <Contact />
    },
    {
      name: "Resume",
      component: <Resume />
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <Header  
        pages = {pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <main>
        {currentPage.component}
      </main>
      <Footer />
    </div>
  );
}

export default App;