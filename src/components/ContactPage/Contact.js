import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import tab from '../../images/table.svg';
import './ContactPage.scss';

const Contact = () => {
    const navigate = useNavigate();
    const why = (e) => {
        e.preventDefault();
        navigate('/Success');
    }

    return (
        <section className='contact'>
            <h1 id='head'>Reserve Your Table</h1>
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-12 cover-img'>
                        <img src={tab} />
                    </div>
                    <div className='col-lg-6 col-md-6 col-12 form-res'>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="example@example.example" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="+213" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Number Of People</Form.Label>
                                <Form.Select defaultValue="1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </Form.Select>
                            </Form.Group>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Time</Form.Label>
                                    <Form.Control type="time" />
                                </Form.Group>
                            </Row>

                            <Button className='sub-res-btn' type="submit" onClick={why}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contact
