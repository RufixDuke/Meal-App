import React from 'react';

import classes from './OneMeal.module.css'

const oneMeal = (props) => {
    const { strMealThumb, strMeal } = props.meal;
    return (
        <div className={classes.OneMeal}>
            <div>
                <img src={strMealThumb} alt="...." />
                <h3>{strMeal}</h3>
            </div>

        </div>
    )


};

export default oneMeal;