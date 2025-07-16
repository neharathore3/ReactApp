import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const DashboardSummary = ({ summary }) => {
  return (
    <Row className="mb-4">
      <Col><Card><Card.Body>Total Applications: {summary.total}</Card.Body></Card></Col>
      <Col><Card><Card.Body>Pending Review: {summary.pending}</Card.Body></Card></Col>
      <Col><Card><Card.Body>Approved: {summary.approved}</Card.Body></Card></Col>
      <Col><Card><Card.Body>Total Amount: ${summary.amount}</Card.Body></Card></Col>
    </Row>
  );
};

export default DashboardSummary;
