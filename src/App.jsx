import React from 'react';
import { Container } from 'react-bootstrap';
import DashboardSummary from './components/DashboardSummary.jsx';
import ApplicationSearch from './components/ApplicationSearch.jsx';
import ApplicationList from './components/ApplicationList.jsx';

const App = () => {
  const summary = {
    total: 4,
    pending: 1,
    approved: 1,
    amount: 435000
  };

  const applications = [
    {
      id: 'APP001',
      customer: 'John Anderson (Score: 750)',
      details: 'Personal Loan, $25,000, 36 months',
      status: 'Pending',
      risk: 'Low'
    },
    {
      id: 'APP002',
      customer: 'Sarah Williams',
      details: 'Home Loan',
      status: 'Approved',
      risk: 'Medium'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search logic here
  };

  return (
    <Container className="mt-4">
      <h1>Loan Application Dashboard</h1>
      <HomePage />
      <DashboardSummary summary={summary} />
      <ApplicationSearch onSearch={handleSearch} />
      <ApplicationList applications={applications} />
    </Container>
  );
};

export default App;
