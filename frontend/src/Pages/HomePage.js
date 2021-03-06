import React from 'react';
import { Col, Row,Container } from 'react-bootstrap';
import AdvanceSearch from '../components/AdvanceSearch/Advancesearch';
import Experience from '../components/Experience/Experience';
import Header from '../components/Header/Header';
import Homes from '../components/Homes/Homes';

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
              <Experience></Experience>
              <Homes></Homes>

            </Col>
          </Row>
          </Container>
          
            
        </>
    );
};

export default HomePage;