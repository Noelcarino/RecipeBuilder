/*
    1) this.state.recommendedRecipes -> array of objects
    2) When writing this function... 
        - Check the data base for key words using 'confirmed ingredients'
        - return recipes that hit those key words in database
        - render list of recipes that pass the test
        - the recipes should be ordered by which recipes has most confirmed ingredients to least confirmed

    3) after fetching data, store it in state, then render recipes component

    Step 1) Enter input Array
    Step 2) Find all recipes that include confirmed ingredients
    Step 3) Store all those recipes in an array, confirmed recipes
    Step 3.5) Assign ingredient count to confirmedRecipe.recipeConfirmedIngredientCount
    Step 4) SORT THE ARRAY!!

    confirmedRecipes.sort(function(a,b) {
        return b.recipeConfirmedIngredientCount - a.recipeConfirmedIngredientCount;
    })

    Step 5) set state the confirmed Recipes to this.state.recommendedRecipes;



    2/20/2020 
    1) get recipe method must also take into account which recipes are in favorite database.
*/
import React from 'react';
import ConfirmedRecipe from './confirmedrecipe';
import './css/recommendedrecipes.css';

export default class RecommendedRecipes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            previousView: '',
            confirmedIngredients: [],
            recommendedRecipes : [],
            favoriteRecipeIds: []
        }


        this.getRecipes = this.getRecipes.bind(this);
    }
    getRecipes(confirmedIngredients){
        let ingredientObj = {
            currentUser: this.props.currentUser,
            confirmedIngredients: confirmedIngredients
        }
        fetch( '/api/recipes.php' , 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(ingredientObj)
            })
        .then(res => res.json())
        .then(res => {
            let favoriteRecipeIdArray = [];
            for (let i = 0; i < res[1].length; i++){
                favoriteRecipeIdArray.push(res[1][i].recipeId);
            }
            this.setState({
                previousView: '',
                confirmedIngredients: confirmedIngredients,
                recommendedRecipes: res[0],
                favoriteRecipeIds: favoriteRecipeIdArray
            })
        });
    }
    componentDidMount(){
        this.getRecipes(this.props.confirmedIngredients);
    }
    render(){
        return (
            <div className="recommended-recipes-container row px-0 mx-auto">

                <div className="recommended-recipes-content-container mx-auto mb-3 text-center py-0">
                <h1>Recommended Recipes ( {this.state.recommendedRecipes.length} )</h1>
                    With the recipes you've picked, here are some ingredients for you to try and cook!
                </div>

                <div className="recomended-recipes-confirmed-recipe-container mx-auto mb-3 py-0 row">
                    {this.state.recommendedRecipes.map((recipe,index) => {
                        let favoriteCheck = false;
                        if (this.state.favoriteRecipeIds.includes(recipe.id)) favoriteCheck = true;
                    return (<ConfirmedRecipe 
                                    key={index} 
                                    recipe={recipe} 
                                    favoriteRecipe={favoriteCheck}
                                    previousView='recommendedrecipes' 
                                    setView={this.props.setView} 
                                    confirmedIngredients={this.props.confirmedIngredients}/>)
                    })}
                </div>

                <div className="recommended-recipes-return-button-container mx-auto mb-3 row">
                    <button
                        className="btn mx-auto text-center py-0"
                        onClick={() => this.props.setView('confirmingredients', this.props.confirmedIngredients)}>
                        Return to Ingredients List
                    </button>
                </div>

            </div>
        )
    }
}