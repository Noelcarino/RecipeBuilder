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
            ]
        }
        this.addIngredient = this.addIngredient.bind(this);
        this.removeIngredient = this.removeIngredient.bind(this);
    }
    addIngredient(e){
        e.preventDefault();

        let ingredients = this.state.ingredients;
        const newIngredient = document.getElementById("addIngredient");
        const form = document.getElementById("addIngredientForm");

        if(newIngredient.value !== "") {
            ingredients.push(newIngredient.value);
            this.setState({
                ingredients : ingredients
            })
            newIngredient.classList.remove("is-danger");
            form.reset();
        } else {
            newIngredient.classList.add("is-danger");
        }
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

        return (
            <div className="find-ingredients-component-container py-5">
               


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
                        <div className="search-ingredients-search-bar mx-auto text-center">
                            <section className="section">
                                {/* <Ingredients /> */}
                                <Ingredients ingredients={this.state.ingredients} delete={this.removeIngredient}/>
                            </section>

                            <hr/>

                            <section className="section">
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

                            </section>
                            
                        </div>
                    </div>


                    {/* ^^^ ADD SEARCH INGREDIENTS BAR ABOVE ^^^ */}
                    

                </div>
                <div className="container-fluid w-75 mx-auto row mb-5">
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
                        <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">{this.state.ingredients.map(ingredient => (
                            <button className="btn btn-dark text-muted" onClick={() => this.removeIngredient(ingredient)}>
                                X {ingredient}
                            </button>
                        ))}</div>
                        <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"></div>
                        <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">HELLOOOOO</div>
                        <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">HELLOOOOO</div>
                        </div>
                    </div>
                </div>

                <button className="btn btn-dark text-muted" onClick={() => this.props.setView('dashboard')}>
                    <h1>
                        PAGE UNDER CONSTRUCTION | BACK TO DASHBOARD
                    </h1>
                </button>
            </div>
        )
    }
}