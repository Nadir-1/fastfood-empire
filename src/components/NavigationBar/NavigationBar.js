import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../images/logo.png';
import './NavigationBar.scss';

const NavigationBar = (props) => {
    const cart = (<FontAwesomeIcon icon={['fas', 'cart-plus']} className='shop-cart' />);
    const user = (<FontAwesomeIcon icon={['fas', 'user-circle']} />);
    const [show, setShow] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <nav>
            <Navbar fixed="top" expand="lg" variant="dark" expanded={expanded}>
                <Container>
                    <Navbar.Brand><img src={logo} className="logoP" alt='logo' /> <span className="nav-br">Fast-Food Empire</span></Navbar.Brand>
                    <div className='special-btn-1'>
                        <button className='user-icon' onClick={handleShow}>
                            {user}
                        </button>
                        <NavLink className='cart-btn' to="/MyList">
                            {cart}
                            <span className='cart-basket'>{props.number}</span>
                        </NavLink>
                    </div>
                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink className="nav-link" aria-current="page" to="/" onClick={() => setExpanded(false)}>Home</NavLink>
                        <NavLink className="nav-link" to="/Menu" onClick={() => setExpanded(false)} >Menu</NavLink>
                        <NavLink className="nav-link" to="/Contact" onClick={() => setExpanded(false)}>Contact</NavLink>
                        <div className='special-btn-2'>
                            <button className='user-icon' onClick={handleShow} >
                                {user}
                            </button>
                            <NavLink className='cart-btn' to="/MyList">
                                {cart}
                                <span className='cart-basket'>{props.number}</span>
                            </NavLink>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose} className='modal'>
                <Modal.Header closeButton style={{ borderBottom: 'none' }}></Modal.Header>
                <Modal.Body className='mod-body'>
                    <h1 className='mod-ti'>Welcome</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className="inp" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className="inp" />
                        </Form.Group>
                        <p className="sign-upL">Sign-Up</p>
                        <Button className='sub-btn' onClick={handleClose}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </nav>
    )
}

export default NavigationBar