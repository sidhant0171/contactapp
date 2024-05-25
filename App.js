import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Dashboard from './components/Dashboard';
import Header from './components/header';
import Sidebar from './components/sidebar';

const queryClient = new QueryClient();

function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    return storedContacts;
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (data) => {
    setContacts([...contacts, data]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App flex">
          <Sidebar />
          <div className="main-content flex-1">
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <AddContact addContact={addContact} />
                    <ContactList contacts={contacts} setContacts={setContacts} />
                    <Link to="/dashboard">Go to Dashboard</Link>
                  </>
                }
              />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
