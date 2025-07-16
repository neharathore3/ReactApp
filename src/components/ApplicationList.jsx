import React from 'react';
import { Table, Badge } from 'react-bootstrap';

const ApplicationList = ({ applications }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Application ID</th>
          <th>Customer</th>
          <th>Loan Details</th>
          <th>Status</th>
          <th>Risk Level</th>
        </tr>
      </thead>
      <tbody>
        {applications.map(app => (
          <tr key={app.id}>
            <td>{app.id}</td>
            <td>{app.customer}</td>
            <td>{app.details}</td>
            <td>
              <Badge bg={app.status === 'Approved' ? 'success' : 'warning'}>
                {app.status}
              </Badge>
            </td>
            <td>{app.risk}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ApplicationList;
