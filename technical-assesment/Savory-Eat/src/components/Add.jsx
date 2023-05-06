import React, { useState } from "react";
import axios from "axios"
import "../App.css";

const Add = () => {
const[name,setname]=useState("")
const[CookTime,setCookTime]=useState("")
const[Ingredient,setIngredient]=useState("")
const[Serves,setServes]=useState("")
const[Category,setCategory]=useState("")
const[Description,setDsc]=useState("")
const[PrepTime,setPrepTime]=useState("")

  const handleSubmit = () => {
    const obj={
      name:name,
      cookTime:CookTime,
      ingredient:Ingredient,
      serves:Serves,
      category:Category,
      description:Description,
      prepTime:PrepTime
    }
    axios.post("http://localhost:4000/recipe", obj)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

  
  };

  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name" onChange={(e)=>setname(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" onChange={(e)=>setCookTime(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time"onChange={(e)=>setPrepTime(e.target.value)}  />
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves" onChange={(e)=>setServes(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" onChange={(e)=>setCategory(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description"  onChange={(e)=>setDsc(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" onChange={(e)=>setIngredient(e.target.value)}/>
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL" onChange={(e)=>setimg(e.target.value)}/>
      </div>
      <button className="create-recipe-btn" onClick={()=>handleSubmit()}>Create Recipe</button>
    </div>
  );
};
export default Add;
