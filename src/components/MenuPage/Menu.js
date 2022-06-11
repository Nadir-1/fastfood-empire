import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import PlateCard from '../PlateCard/PlateCard';
import plate from '../../db/db';
import './MenuPage.scss';

const Menu = (props) => {
    const [inpSearch, setInpSearch] = useState('');
    const [classFilter, setClassFilter] = useState(["myFilterA", "myFilter", "myFilter"]);
    const [categoryP, setCategoryP] = useState("Dinner");
    const searchHandler = (inpSearch) => {
        setInpSearch(inpSearch);
    }
    const dinnerHandler = () => {
        setClassFilter(["myFilterA", "myFilter", "myFilter"]);
        setCategoryP('Dinner');
    }
    const dessertHandler = () => {
        setClassFilter(["myFilter", "myFilterA", "myFilter"]);
        setCategoryP('Dessert');

    }
    const drinkHandler = () => {
        setClassFilter(["myFilter", "myFilter", "myFilterA"]);
        setCategoryP('Drink');

    }
    const plateMarkup = (plate.map((plate) => {
        const ThePlate = <PlateCard plate={plate} key={plate.id} add={props.add} />;
        if (inpSearch === '') {
            return plate.category === categoryP ? ThePlate : null;
        }
        else {
            return (plate.category === categoryP && plate.ti === inpSearch) ? ThePlate : null;
        }
    }))
    const noRes = (<div>No Results</div>);

    return (
        <section className='menu'>
            <h1>Our Menu</h1>
            <SearchBar searchHandler={searchHandler} />
            <Filters dinnerHandler={dinnerHandler} drinkHandler={drinkHandler} dessertHandler={dessertHandler} c0={classFilter[0]} c1={classFilter[1]} c2={classFilter[2]} />
            <div className="menu-items">
                {plateMarkup.every(element => element === null) ? noRes : plateMarkup}
            </div>
        </section >
    )
}

export default Menu