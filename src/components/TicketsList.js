import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import '../style/ticket-table.css';


const Tickets = ({ page }) => {
  const [tickets, setTickets] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  const fetchTickets = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/tickets/paginated?page=${page}&perPage=25`);
      if(response.status === 200) {
        setTickets(response.data.tickets);
      }
    } catch (err) {
      console.error('Failed to fetch tickets', err);
      if (err.response && err.response.status === 404) { 
        setErrorMessage("There's no data on this page.");
      } else {
        setErrorMessage('Failed to load tickets: ' + err.message);
      }
    }
  },[page]);

  useEffect(() => {
    fetchTickets();
  }, [page, fetchTickets]); 

  const deleteTicket = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/tickets/delete/${id}`);
      if(response.status === 204) {
        fetchTickets(); 
        alert(`Ticket with id ${id} deleted`);
      }
    } catch (err) {
      console.error('Failed to delete ticket', err);
      alert('Failed to delete ticket: ' + err.message);
    }
};

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div>
     
      <table className="ticket-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.subject}</td>
              <td>{ticket.description}</td>
              <td>
                <button className="delete-button" onClick={() => deleteTicket(ticket.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tickets;


