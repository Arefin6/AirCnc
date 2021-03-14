import React, { useState } from 'react';
import './AdvanceSearch.css';
import { Form,Row,Col, Button,Accordion,Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faAngleUp,faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const AdvanceSearch = () => {
 
    const [city,setCity] = useState('')
    const [adult, setAdult] = useState(1);
    const [baby, setBaby] = useState(0);
    const [child, setChild] = useState(0);
    const [collapsed, setCollapsed] = useState(false);
    let history = useHistory();

    console.log(city)

    const handleSubmit = (e) =>{
        history.push('/search')
       e.preventDefault()   
    } 
     
    return (
        <>
         <div className="advance-search pr-md-3">
            <h5 className="mb-4">Where do you want to go</h5>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="rounded shadow p-3">
                    <Form.Label className="font-weight-bold">Location</Form.Label>
                    <Form.Control  className="input-primary" value={city} onChange={e=>setCity(e.target.value)} name="city" type="text" placeholder="Add city, landmark, area "></Form.Control>
                </Form.Group>
                <Row>
                    <Col md={6} className="pr-0">
                        <Form.Group className="rounded shadow px-3 py-3">
                            <Form.Label className="text-secondary ml-1">Arrival</Form.Label>
                            <Form.Control  className="input-primary" type="date" name="arrival"></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={6} className="pl-1">
                        <Form.Group className="rounded shadow px-3 py-3">
                            <Form.Label  className="text-secondary ml-1">Departure</Form.Label>
                            <Form.Control  className="input-primary" type="date" name="departure"></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="shadow">
                    <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle
                        onClick={() => {collapsed ? setCollapsed(false) : setCollapsed(true) }}
                         as={Card.Header} className="bg-white d-flex justify-content-between align-items-center" eventKey="0">
                            <div>
                            <Form.Label className="text-secondary">Guest</Form.Label>
                            <p className="font-weight-bold">{adult} Adults {child} Child {baby} Babies</p>
                            </div>
                            
                            {
                            collapsed ? 
                            <FontAwesomeIcon  icon={faAngleDown}/>
                            : 
                            <FontAwesomeIcon  icon={faAngleUp}/>

                            }

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body className="persons">
                            <div className="d-flex justify-content-between">
                                <h6 className="text-uppercase">Adults</h6>
                                <div className="d-flex align-items-center">
                                    <Button 
                                     onClick={() => adult > 0 && setAdult(adult - 1)}
                                     variant="default" className="plus-minus" >-</Button>
                                    <input name="adult" className="guest" value={adult} type="text"/>
                                    <Button variant="default" className="plus-minus" 
                                    onClick={() =>  setAdult(adult + 1)}
                                    >+</Button>
                                </div>
                            </div>
                            
                            <div className="d-flex justify-content-between my-2">
                                <div>
                                    <h6 className="text-uppercase">Child</h6>
                                    <p className="text-secondary">age 2-12</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Button variant="default" className="plus-minus" 
                                    onClick={() => child > 0 && setChild(child - 1)}
                                    >-</Button>
                                    <input name="child"  className="guest" value={child} type="text"/>
                                    <Button variant="default" className="plus-minus" 
                                    onClick={() =>  setChild(child + 1)}
                                    >+</Button>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h6 className="text-uppercase">Babies</h6>
                                    <p className="text-secondary">Younger than 2</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Button variant="default" className="plus-minus" 
                                    onClick={() => baby > 0 && setBaby(baby - 1)}
                                    >-</Button>
                                    <input name="baby" className="guest" value={baby} type="text"/>
                                    <Button variant="default" className="plus-minus"  
                                    onClick={() =>  setBaby(baby + 1)}
                                    >+</Button>
                                </div>
                            </div>
                            {/* <div className="text-right">
                                <Button variant="outline-primary" size="sm">Apply</Button>
                            </div> */}
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </Form.Group>
                <Form.Group>
                    <Button block type="submit" variant="primary">
                        <FontAwesomeIcon className="mr-2" icon={faSearch} /> 
                        Search
                    </Button>
                </Form.Group>
                
            </Form>
          </div>
        </>
    );
};

export default AdvanceSearch;