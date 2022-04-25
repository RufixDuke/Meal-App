import React, { useState, useEffect } from 'react';
import Aux from '../../hoc/Auxilliary';
import OneMeal from '../../components/DisplayMeal/OneMeal/OneMeal';
import classes from './MealBuilder.module.css';



const MealBuilder = (props) => {
    const [meals, setMeals] = useState([]);
    // const [names, setNames] = useState([]);
    const [searchName, setSearchName] = useState([]);
    const [input, setInput] = useState('');

    // useEffect(() => {
    //     fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    //         .then(result => {
    //             return result.json();
    //         })
    //         .then(data => {
    //             console.log(data)
    //             setMeals(data.categories)
    //         })
    // }, []);

    useEffect(() => {
        const timer =
            fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchName)
                .then((res) =>
                    res.json()
                )
                .then((data) => {
                    console.log(data)
                    console.log(setMeals(data.meals))
                    // console.log(data)
                })
        return () => {
            clearTimeout(timer)
        }
    }, [searchName])

    // const handleSearch = (product) => {
    //     // console.log(product);
    //     // setName(product);
    //     const newProduct = [...names, product];
    //     // console.log(newProduct);
    //     setNames(newProduct);
    // };

    const handleBtn = (data) => {
        // const newProduct = [...names, product];

        // console.log(setSearchName(newProduct))

        var searchText = input;

        if (searchText === "" && data.meals.length === 0) {
            // display = "Not Available";
            console.log("Not Found")

        } else {
            setSearchName(searchText)
        }
    }


    return (
        <Aux>
            <div>
                <input
                    type="text"
                    onChange={e => setInput(e.target.value)}
                    value={input}
                    placeholder='Looking for...' />

                <button
                    type="button"
                    onClick={handleBtn}
                    className='btn'>Search</button>
            </div>

            <div className={classes.MealBuilder}>
                {meals.map((meal) => (
                    <OneMeal key={meal.idMeal}
                        handleSearch={handleBtn}
                        meal={meal}
                    />
                ))}
            </div>

            {/* {display} */}

        </Aux>
    )
};

export default MealBuilder;