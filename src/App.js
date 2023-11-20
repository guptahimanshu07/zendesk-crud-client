import React, { useState } from 'react';
import TicketsList from './components/TicketsList';
import './App.css';

const App = () => {
  const [page, setPage] = useState(1); 
  const nextPage = () => {
    setPage(page + 1);
  }

  const prevPage = () => {
    if (page > 1) { 
      setPage(page - 1);
    }
  }

  return (
    <div className="App">
      <h1>Tickets</h1>
      <TicketsList page={page} />
      <button className={`prev-button ${page === 1 ? 'disabled' : ''}`} onClick={prevPage} disabled={page === 1}>Prev</button> 
      <button className="next-button" onClick={nextPage} >Next</button>
    </div>
  );
};

export default App;

