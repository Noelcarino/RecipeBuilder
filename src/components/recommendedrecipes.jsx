import React from 'react';
import ConfirmedRecipe from './confirmedrecipe';

import '../css/recommendedrecipes.css';
import '../css/confirmedrecipe.css';


export default class RecommendedRecipes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            confirmedIngredients: [],
            recommendedRecipes : [] 
        }


        this.getRecipes = this.getRecipes.bind(this);
    }
    getRecipes(confirmedIngredients){
        /*
            1) this.state.recommendedRecipes -> array of objects
            2) When writing this function... 
                - Check the data base for key words using 'confirmed ingredients'
                - return recipes that hit those key words in database
                - render list of recipes that pass the test
                - the recipes should be ordered by which recipes has most confirmed ingredients to least confirmed

            3) after fetching data, store it in state, then render recipes component
        */
        let recipe1Insructions = [
            'First you gotta start the fire',
            'season the beef',
            'cook the rice',
            'finish cooking the beef',
            'finishing cooking the rice',
            'add the beef on top of the rice',
            'make sure you set it inside of a beautiful bowl',
            'set that bowl on top of a nice ass table',
            'turn the lights down low',
            'once the lights are low to your liking, turn on the music',
            'invite the LOYL',
            'make love',
            'then enjoy that beetf with rice'
        ]
        const recipe1 = {
            recipdId: 1,
            recipeTitle: 'Braised Chicken with Steamed Veggies',
            recipeIngredients : ['Chicken', 'Brocolli', 'Carrots'],
            recipeConfirmedIngredientCount: 0,
            recipeImage: 'braisedchickenwithsteamedveggies.png',
            recipeTimeToCook: '00:50',
            recipeInstructions: recipe1Insructions
        }
        const recipe2 = {
            recipeId: 2,
            recipeTitle: 'Herbed Chicken with Roased Veggies',
            recipeIngredients: ['Chicken', 'Carrots', 'Zuccini'],
            recipeConfirmedIngredientCount: 0,
            recipeImage: 'herbedchickenwithroastedveggies.png',
            recipeTimeToCook: '00:50',
            recipeInstructions: recipe1Insructions
        }
        const recipe3 = {
            recipeId: 3,
            recipeTitle: 'CrockPot Chicken with Veggies',
            recipeIngredients: ['Chicken', 'Potatoes', 'Carrots', 'Brocolli', 'Cabbage', 'Asparagus'],
            recipeConfirmedIngredientCount: 0,
            recipeImage: 'crockpotchickenwithveggies.png',
            recipeTimeToCook: '04:00',
            recipeInstructions: recipe1Insructions
        }
        const recipe4 = {
            recipeId: 4,
            recipeTitle: 'Beef w/Rice',
            recipeIngredients: ['Beef', 'Rice'],
            recipeConfirmedIngredientCount: 0,
            recipeImage: 'beefwithrice.jpg',
            recipeTimeToCook: '00:40',
            recipeInstructions: recipe1Insructions
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

        // Step 3.5) Assign ingredient count to confirmedRecipe.recipeConfirmedIngredientCount
        for (let i = 0; i < confirmedRecipes.length; i++){
            let ingredientCount = 0;
            for (let j = 0; j < confirmedIngredients.length; j++){
                if (confirmedRecipes[i].recipeIngredients.includes(confirmedIngredients[j])) ingredientCount++;
            }
            confirmedRecipes[i].recipeConfirmedIngredientCount = ingredientCount;
        }

        // Step 4) SORT THE ARRAY!!
        confirmedRecipes.sort(function(a,b) {
            return b.recipeConfirmedIngredientCount - a.recipeConfirmedIngredientCount;
        })
        console.log(confirmedRecipes);
        // Step 5) set state the confirmed Recipes to this.state.recommendedRecipes;
        this.setState({
            confirmedIngredients: confirmedIngredients,
            recommendedRecipes: confirmedRecipes
        })
    }
    componentDidMount(){
        // let dummyArray = [
        //     'Asparagus',
        //     'Beets',
        //     'Beef',
        //     'Brocolli',
        //     'Cabbage',
        //     'Carrots',
        //     'Celery',
        //     'Cauliflower',
        //     'Chicken',
        //     'Cucumber',
        //     'Potatoes',
        //     'Rice',
        //     'Zuccini'
        // ];
        // this.getRecipes(dummyArray);
        // console.log(this.props.confirmedIngredients);
        this.getRecipes(this.props.confirmedIngredients);
    }
    render(){
        return (
            <div className="recommended-recipes-container row px-0 py-5 mx-auto">

                <div className="recommended-recipes-content-container mx-auto mb-5 text-center p-3">
                    <h1>Recommended Recipes</h1>

                    <h3>
                        With the recipes you've picked, here are some ingredients for you to try and cook!
                    </h3>
                </div>

                <div className="container-fluid mx-auto">
                    {this.state.recommendedRecipes.map((recipe,index) => {
                        return <ConfirmedRecipe key={index} recipe={recipe} setView={this.props.setView} confirmedIngredients={this.props.confirmedIngredients}/>
                    })}
                </div>

                <div className="container-fluid mx-auto">
                    <button
                        className="btn btn-dark btn-block w-50 mx-auto text-center"
                        onClick={() => this.props.setView('confirmingredients', this.props.confirmedIngredients)}>
                        Return to Ingredients List
                    </button>
                </div>

            </div>
        )
    }
}