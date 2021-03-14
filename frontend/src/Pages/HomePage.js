import React from 'react';
import { Col, Row,Container } from 'react-bootstrap';
import AdvanceSearch from '../components/AdvanceSearch/Advancesearch';
import Header from '../components/Header/Header';

const HomePage = () => {
    return (
        <>
          <Header></Header>
          <Container className="my-3">
          <Row>
            <Col md={4}>
              <AdvanceSearch></AdvanceSearch>
            </Col>
            <Col md={8}>
              <h2>Home</h2>
            </Col>
          </Row>
          </Container>
          
            
        </>
    );
};

export default HomePage;