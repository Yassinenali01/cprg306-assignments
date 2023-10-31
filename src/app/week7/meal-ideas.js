"use client";
import { useEffect, useState } from "react";

async function fetchMealIdeas ( ingredient ){
    const response = await fetch("www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}  ")
    const data = await response.json;
             
    return (data.meals || []);      
}

export default function Meal ({ingredient}){

    const [meal, setMeal] = useState([]);


    async function loadMealIdea(){
        const data = await fetchMealIdeas(ingredient);
        setMeal(data);
    }


    useEffect(() => {
        loadMealIdea();

    }, []);


    return(
        <div>
        <h2>Meal Ideas for {ingredient}</h2>
        <ul>
            {meal.map((meal) => (
            <li key={meal}>{meal}</li>
            ))}
        </ul>
        </div>

    
    )
    


}

