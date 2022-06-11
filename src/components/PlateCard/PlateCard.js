import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PlateCard.scss';

const PlateCard = (props) => {
    const star = (<FontAwesomeIcon icon={['fas', 'star']} style={{ color: 'gold' }} />);
    const starH = (<FontAwesomeIcon icon={['fas', 'star-half-stroke']} style={{ color: 'gold' }} />);
    const starE = (<FontAwesomeIcon icon={['far', 'star']} style={{ color: 'gold' }} />);
    const cart = (<FontAwesomeIcon icon={['fas', 'cart-plus']} />);
    return (
        <Card style={{ width: '18rem' }} className='plateCard' >
            <Card.Img variant="top" src={props.plate.photo} />
            <Card.Body className='cardCenter'>
                <Card.Title className='centerTitle'>{props.plate.ti}</Card.Title>
                <Card.Text className='centerBody'>
                    <span>{props.plate.price} $</span>
                    <div className='stars'>
                        {star}{star}{star}{star}{starH}
                    </div>
                </Card.Text>
                <Button className='btnCart' onClick={() => props.add(props.plate.id, props.plate.photo, props.plate.ti, props.plate.category, props.plate.price)}>{cart} Add to cart</Button>
            </Card.Body>
        </Card>
    )
}

export default PlateCard;