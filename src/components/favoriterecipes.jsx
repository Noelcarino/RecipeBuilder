import React from 'react';
import FavoriteRecipe from './favoriterecipe';
import '../css/favoriterecipes.css';

export default class FavoriteRecipes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            componentDidMount: false,
            favoriteRecipes: []
        }
    }
    getFavoriteRecipes(){
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

        this.setState({
            componentDidMount: true,
            favoriteRecipes: recipeDatabase
        })
    }
    componentDidMount(){
        this.getFavoriteRecipes();
    }
    render(){
        if (this.state.componentDidMount){
            return (
                <div className="favorite-recipes-component-container mx-auto row px-3 py-5">

                    <div className="favorite-recipes-component-title text-center mb-5 mx-auto">
                        <h1>
                            Your Favorites
                        </h1>
                    </div>

                    <div className="container-fluid mx-auto">
                        {this.state.favoriteRecipes.map((recipe,index) => {
                            return <FavoriteRecipe key={index} recipe={recipe} setView={this.props.setView} />
                        })}
                    </div>

                    <div className="favorite-recipe-component-back-to-dashboard mx-auto row p-0 ">
                        <button className="btn btn-dark btn-block" onClick={() => this.props.setView('dashboard')}>
                            Back to Dashboard
                        </button>
                    </div>
                </div>
            )
        } else {
            return (
                <React.Fragment>
                    LOADING...
                </React.Fragment>
            )
        }
    }
}