import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

const Checkout = (props) => {
    const total2tax = () => (Number(props.sum) + 5).toFixed(2);
    return (
        <Container>
            <Row>
                <Col className='sh-total' >
                    <Row>
                        <Col className='sh-summary'>Summary</Col>
                    </Row>

                    <Row>
                        <Col className='sh-total-h'>Subtotal : </Col>
                        <Col > {props.sum} $</Col>
                    </Row>

                    <Row>
                        <Col className='sh-total-h'>Tax : </Col>
                        <Col > 5.00 $</Col>
                    </Row>

                    <Row>
                        <Col className='sh-total-h'>Total : </Col>
                        <Col>{total2tax()}  $</Col>
                    </Row>
                    <button className='checkout-btn'>Checkout</button>
                </Col>
            </Row>
        </Container>

    )
}

export default Checkout