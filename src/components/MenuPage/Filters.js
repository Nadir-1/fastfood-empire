import React from 'react';
import Button from 'react-bootstrap/Button';

const Filters = (props) => {
    return (
        <div>
            <Button className={props.c0} onClick={props.dinnerHandler}>Dinner</Button>
            <Button className={props.c1} onClick={props.dessertHandler}>Dessert</Button>
            <Button className={props.c2} onClick={props.drinkHandler}>Drink</Button>
        </div>
    )
}

export default Filters