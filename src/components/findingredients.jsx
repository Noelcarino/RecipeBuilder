import React from 'react';
import Ingredients from './ingredients';
import '../css/findingredients.css'

export default class FindIngredients extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients: [
                'Asparagus',
                'Beets',
                'Brocolli',
                'Cabbage',
                'Carrots',
                'Celery',
                'Cauliflower',
                'Chicken',
                'Cucumber',
                'Potatoes',
                'Zuccini'
            ],
            ingredientsToUse: []
        }
        this.addIngredient = this.addIngredient.bind(this);
        this.removeIngredient = this.removeIngredient.bind(this);
    }
    addIngredient(e){
        // e.preventDefault(); 
        console.log(e);
        let ingredients = this.state.ingredientsToUse;
        // const newIngredient = document.getElementById("addIngredient");
        // const form = document.getElementById("addIngredientForm");

        if (this.state.ingredientsToUse.includes(e)) return;
        ingredients.push(e);
        this.setState({
            ingredientsToUse: ingredients
        })
        console.log(this.state.ingredientsToUse);
    }
    removeIngredient(ingredient){
        const ingredients = this.state.ingredientsToUse.slice();
        ingredients.some((el, i) => {
            if (el === ingredient){
                ingredients.splice(i, 1);
                return true;
            } 
        });
        this.setState({
            ingredientsToUse: ingredients
        })

    }
    render(){
        let element;
        if (this.state.ingredientsToUse.length === 0){
            element = <div className="container-fluid mx-auto text-center">
                <h3>You have not selected any ingredients</h3>
            </div>
        } else {
            element = <React.Fragment></React.Fragment>
        }
        return (
            <div className="find-ingredients-component-container py-5">

               <div className="container-fluid mx-auto w-50 row px-0 mb-5">
                    <button className="btn btn-dark text-muted mx-auto " onClick={() => this.props.setView('dashboard')}>
                            PAGE UNDER CONSTRUCTION | BACK TO DASHBOARD
                    </button>
                </div>

                <div className="search-ingredients-container mx-auto mb-5 row px-0">

                    {/* FIND INGREDIENTS HEADER SECTION */}
                    <div className="container-fluid m-auto">
                        <div className="container-fluid mx-auto mb-5 text-center">
                            <h1 className="display-4">
                                Find Ingredients
                            </h1>
                        </div>
                        <div className="container-fluid m-auto text-center">
                            <h2>
                                Find your ingredients and build your recipe
                            </h2>
                        </div>
                    </div>

                    <div className="container-fluid m-auto ">
                        <div className="mx-auto text-center ">

                            {/* <Ingredients /> */}
                            <Ingredients 
                                ingredients={this.state.ingredients}
                                ingredientsToUse={this.state.ingredientsToUse}
                                addIngredient={this.addIngredient}
                            />
                        </div>
                    </div>
                </div>

                {/* INGREDIENTS TO USE SECTION */}
                <div className="ingredients-to-use-container mx-auto px-5 py-3">
                        <div className="container-fluid mx-auto mb-5 text-center">
                            <h1 className="display-4">
                                Ingredients To Use ({this.state.ingredientsToUse.length})
                            </h1>
                        </div>
                            <div className="container-fluid w-50 m-auto text-center row justify-content-start">
                            {element}
                            {this.state.ingredientsToUse.map(ingredient => {
                                return (
                                    <div key={ingredient} className="col-2 mb-5 mx-3">
                                        <button 
                                            className="btn btn-dark"
                                            onClick={() => this.removeIngredient(ingredient)}>
                                            {ingredient}
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
            </div>
        )
    }
}
