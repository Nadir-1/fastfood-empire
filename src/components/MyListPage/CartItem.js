import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartItem = (props) => {
    const trash = (<FontAwesomeIcon icon={['fas', 'trash']} />);
    const disabledBtn = (btn, nbr) => {
        if (btn === "inc") {
            if (nbr === 25) return btn + " disabled";
            else return btn;
        } else {
            if (nbr === 1) return btn + " disabled";
            else return btn;
        }
    }

    return (
        <Container>
            <Row className='sh-row'>
                <Col xs={8} className='col-sh sh-first'>
                    <img src={props.el.photo} alt="item" />
                    <h5 className='sh-h5'>{props.el.name}</h5>
                    <h5 className='sh-h5'>{props.el.price}</h5>
                </Col>
                <Col xs={2} className='col-sh sh-nbr'>
                    <Button size='sm' className={disabledBtn("inc", props.el.nbr)} onClick={() => props.updateNBR(props.el.id, 'inc')}>+</Button>
                    <h5>{props.el.nbr}</h5>
                    <Button size='sm' className={disabledBtn("dec", props.el.nbr)} onClick={() => props.updateNBR(props.el.id, 'dec')}>-</Button>
                </Col>
                <Col xs={2} className='col-sh sh-tr'>
                    <span className='trash' onClick={() => props.remove(props.el.id)}>{trash}</span>
                </Col>
            </Row>
        </Container>
    )
}

export default CartItem