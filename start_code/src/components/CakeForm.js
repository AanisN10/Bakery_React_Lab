import { useState } from "react";

const CakeForm = ({handleNewSubmission}) => {
    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");

    const updateName = (event)=>{
        setCakeName(event.target.value)
    };
    
    const updateIngredients = (event)=>{
        const ingredients = event.target.value;
        const listOfIngredients = ingredients.split(",")
        setIngredients(listOfIngredients)
    };

    
    const updatePrice = (event)=>{
        setPrice(event.target.value)
    };
    
    const updateRating = (event)=>{
        setRating(event.target.value)
    };

    const handleFormSubmit = (event)=>{
        event.preventDefault();

        if (!cakeName || !ingredients || !price || !rating){
            alert("Need to provide all details")
            return
        }

    const newCake = {
        
        cakeName: cakeName,
        ingredients: ingredients,
        price :price,
        rating: rating,
        id: Date.now()
    }

handleNewSubmission(newCake);

    setCakeName("");
    setIngredients("");
    setPrice("");
    setRating("");
    

    }

    return ( 
        <section>
            <form onSubmit={(event)=> handleFormSubmit(event)}>
                <label htmlFor="cake-name">Name: </label>
                <input type="text" id="cake-name" onInput={(event)=>{updateName(event)}} value={cakeName}/>
                <label htmlFor="cake-ingredient">Ingredients: </label>
                <input type="text" id="cake-ingredient" onInput={(event)=>{updateIngredients(event)}} value={ingredients}/>
                <label htmlFor="cake-price">Price: </label>
                <input type="text" id="cake-price" onInput={(event)=>{updatePrice(event)}} value={price}/>
                <label htmlFor="cake-rating">Rating: </label>
                <input type="text" id="cake-rating" onInput={(event)=>{updateRating(event)}} value={rating}/>
                <input type ="submit" value = "Add New Cake" />
            </form>
        </section>
     );
}
 
export default CakeForm;