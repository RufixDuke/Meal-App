import React from 'react';

import Aux from '../../hoc/Auxilliary';
import OneMeal from './OneMeal/OneMeal';

const DisplayMeal = (props) => {

    // const { strMeal } = props.meal;

    const names = props.name;

    return (
        <Aux>
            <ul>
                {names.map((name, i) => (
                    <li key={i}><OneMeal meal={name} /></li>
                ))}
            </ul>
        </Aux>
    )
};

export default DisplayMeal;