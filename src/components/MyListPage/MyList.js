import React from 'react';
import CartItem from './CartItem';
import Checkout from './Checkout';
import { Container, Row, Col } from 'react-bootstrap';
import './MyListPage.scss';

const MyList = (props) => {
    const sumHandler = () => {
        let sum = 0;
        for (let i = 0; i < props.list.length; i++) {
            sum = sum + Number(props.list[i].price) * props.list[i].nbr;
        }
        return sum.toFixed(2);
    }
    const resMarkup = (props.list.map((el) => {
        return (
            <CartItem key={el.id} el={el} updateNBR={props.updateNBR} remove={props.remove} />
        )
    }));

    return (
        <div className='MyShoppings'>
            <h1 className='shH1'>My Shopping</h1>
            <Container className='sh-list'>
                <Row>
                    <Col md={12} lg={8}>
                        {resMarkup}
                    </Col>
                    <Col md={12} lg={4}>
                        {props.list.length !== 0 && <Checkout sum={sumHandler()} />}
                    </Col>
                </Row>
            </Container>


        </div >
    )
}

export default MyList