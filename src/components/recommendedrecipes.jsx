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
    getRecipes(){
        // console.log('r')
        alert('recipes recieved!');
    }
    componentDidMount(){
        this.getRecipes();
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