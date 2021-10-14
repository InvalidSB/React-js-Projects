import React from 'react'

function Recipes(props) {
    const {recipes}=props
    return (
        <div>
            {recipes.map((recipe)=>
                <div className="carcard text-white bg-info mb-3 " >
                <div className="row no-gutters">
                  <div className="col-md-3 m-3">
                    <img src={recipe.recipe.image} className="card-img img-circle" alt="..."/>
                  </div>
                  <div className="col-md-6 size">
                    <div className="card-body m-3">
                        <h5 className="card-title">{recipe.recipe.label}</h5>
            <p className="card-text"><small class="text-muted">{recipe.recipe.healthLabels}</small></p>
            <h5>Ingredients within it are :-</h5>
            <p className="card-text">{recipe.recipe.ingredientLines.map((val)=><li>{val}</li>)}</p>
            <p>Amount Of Calories That we can get from it: {recipe.recipe.calories}Kcl</p>
                    </div>
                  </div>
                </div>
              </div>
            )
            }
        </div>
    )
}

export default Recipes