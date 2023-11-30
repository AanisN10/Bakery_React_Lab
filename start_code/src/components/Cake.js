const Cake = ({cake}) => {

  const handleIngredients = cake.ingredients.map(ingredients=>{
    return <li>{ingredients}</li>
  });

  return (

    <div>
        
       <p><strong>Cake Name: {cake.cakeName}</strong></p>
       <p><strong>Ingredients: 
        <ul>
        {handleIngredients}
        </ul>
      </strong></p>
       <p><strong>Price: {cake.price}</strong></p>
       <p><strong>Rating: {cake.rating}</strong></p>


    </div>
    
  )
}

export default Cake;