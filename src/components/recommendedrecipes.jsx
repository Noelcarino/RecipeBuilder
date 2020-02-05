import React from 'react';
import '../css/recommendedrecipes.css';

export default class RecommendedRecipes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            recommendedRecipes : [] 
        }
        /*
            1) this.state.recommendedRecipes -> array of objects
            2) When writing this function... 
                - Check the data base for key words using 'confirmed ingredients'
                - return recipes that hit those key words in database
                - render list of recipes that pass the test
                - the recipes should be ordered by which recipes has most confirmed ingredients to least confirmed

            3) after fetching data, store it in state, then render recipes component
        */

        this.getRecipes = this.getRecipes.bind(this);
    }
    getRecipes(confirmedIngredients){
        const recipe1 = {
            recipdId: 1,
            recipeTitle: 'Braised Chicken with Steamed Veggies',
            recipeIngredients : ['Chicken', 'Brocolli', 'Carrots'],
            recipeConfirmedIngredientCount: 0,
            recipeTimeToCook: '00:50'
        }
        const recipe2 = {
            recipeId: 2,
            recipeTitle: 'Herbed Chicken with Roased Veggies',
            recipeIngredients: ['Chicken', 'Carrots', 'Zuccini'],
            recipeConfirmedIngredientCount: 0,
            recipeTimeToCook: '00:50'
        }
        const recipe3 = {
            recipeId: 3,
            recipeTitle: 'CrockPot Chicken with Veggies',
            recipeIngredients: ['Chicken', 'Potatoes', 'Carrots', 'Brocolli', 'Cabbage', 'Asparagus'],
            recipeConfirmedIngredientCount: 0,
            recipeTimeToCook: '04:00'
        }
        const recipe4 = {
            recipeId: 4,
            recipeTitle: 'Beef w/Rice',
            recipeIngredients: ['Beef', 'Rice'],
            recipeConfirmedIngredientCount: 0,
            recipeTimeToCook: '00:40'
        }
        const recipeDatabase = [recipe1, recipe2, recipe3, recipe4];

        // Step 1) Enter input Array
        console.log(confirmedIngredients);

        // Step 2) Find all recipes that include confirmed ingredients
        let confirmedRecipes = [];
        for (let i = 0; i < recipeDatabase.length; i++){
            for (var j = 0; j < confirmedIngredients.length; j++){

                // Step 3) Store all those recipes in an array, confirmed recipes
                if (recipeDatabase[i].recipeIngredients.includes(confirmedIngredients[j])) {
                    confirmedRecipes.push(recipeDatabase[i]) 
                    break;
                }
            }
        }

        // Step 4) Sort confirmed recipes
        for (let i = 0; i < confirmedRecipes.length; i++){
            let ingredientCount = 0;
            for (let j = 0; j < confirmedIngredients.length; j++){
                if (confirmedRecipes[i].recipeIngredients.includes(confirmedIngredients[j])) ingredientCount++;
            }
            confirmedRecipes[i].recipeConfirmedIngredientCount = ingredientCount;
        }
        console.log(confirmedRecipes);
        return;


    }
    componentDidMount(){
        this.getRecipes(this.props.confirmedIngredients);
    }
    render(){
        return (
            <div className="recommended-recipes-container row px-0 py-5 mx-auto">

                <div className="recommended-recipes-content-container mx-auto mb-3 text-center p-3">
                    <h1>Recommended Recipes</h1>

                    <h3>
                        With the recipes you've picked, here are some ingredients for you to try and cook!
                    </h3>
                </div>

                <button onClick={() => this.props.setView('confirmingredients', this.props.confirmedIngredients)}>
                    Return to Ingredients List
                </button>
            </div>
        )
    }
}