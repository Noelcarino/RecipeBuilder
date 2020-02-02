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
                'Cabbage',
                'Carrots',
                'Celery',
                'Cauliflower',
                'Chicken',
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


        const ingredients = this.state.ingredients.slice();

        ingredients.some((el, i) => {
            if (el === ingredient){
                ingredients.splice(i, 1);
                return true;
            }
        });
        this.setState({
            ingredients: ingredients
        })

    }
    render(){
        let element;

        if (this.state.ingredientsToUse) {
            element = <div className="container-fluid m-auto text-center">
                        {this.state.ingredientsToUse.map(ingredient => {
                            console.log(ingredient);
                        })}
                    </div>
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

                    {/* SEARCH INGREDIENTS BAR */}
                    {/**************************** 
                    
                        1 - Search bar should accept ingredients, once entered, add it to search section
                        2 - 


                        // Step 1, gather ingredients from ingredients database

                        // Step 2, use those ingredients to find given recipes in database

                        // Step 3, return recipes based on given ingredients
                        
                    *****************************/}

                    <div className="container-fluid m-auto">
                        <div className="mx-auto text-center">

                            {/* <Ingredients /> */}
                            <Ingredients 
                                ingredients={this.state.ingredients}
                                ingredientsToUse={this.state.ingredientsToUse}
                                addIngredient={this.addIngredient}
                            />

                            <hr/>

                            <form id="addIngredientForm" className="form">
                                <input 
                                    type="text"
                                    id="addIngredient"
                                    className="input text-muted"
                                    placeholder="Add more ingredients to database..."
                                />
                            </form>
                            <button className="btn is-info" onClick={this.addIngredient}>
                                    Add Ingredient
                            </button>

                        </div>
                    </div>


                    {/* ^^^ ADD SEARCH INGREDIENTS BAR ABOVE ^^^ */}
                    

                </div>

                
                <div className="container-fluid m-auto">
                        <div className="container-fluid mx-auto mb-5 text-center">
                            <h1 className="display-4">
                                Ingredients To Use
                            </h1>
                        </div>
                        <div className="container-fluid m-auto text-center">
                            {this.state.ingredientsToUse.map(ingredient => {
                                return ingredient;
                            })}
                        </div>
                    </div>

                {/* <div className="w-100 my-5 container-fluid ">&nbsp;</div>
                <div className="container-fluid w-75 mx-auto row my-5">
                    <div className="col-4">
                        <div className="list-group" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
                        <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
                        <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
                        <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="tab-content" id="nav-tabContent">
                        <div className="container-fluid row border tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">{this.state.ingredients.map((ingredient,index) => (
                            <button key={index} className="btn btn-dark text-light mx-auto" onClick={() => this.removeIngredient(ingredient)}>
                                X {ingredient}
                            </button>
                        ))}</div>
                        <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"></div>
                        <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">HELLOOOOO</div>
                        <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">HELLOOOOO</div>
                        </div>
                    </div>
                </div> */}

                
                
            </div>
        )
    }
}
