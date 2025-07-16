import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const ApplicationSearch = ({ onSearch }) => {
  return (
    <Form className="mb-4" onSubmit={onSearch}>
      <Row>
        <Col md={6}>
          <Form.Control type="text" placeholder="Search by Application ID or Customer Name" />
        </Col>
        <Col md={4}>
          <Form.Select>
            <option>All Products</option>
            <option>Personal Loan</option>
            <option>Home Loan</option>
          </Form.Select>
        </Col>
        <Col md={2}>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ApplicationSearch;
