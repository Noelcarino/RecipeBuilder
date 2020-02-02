import React from 'react';
import '../css/findingredients.css'

export default class FindIngredients extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients: [
                'Asparagus',
                'Beets',
                'Carrots',
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
                                <ul>
                                    {this.state.ingredients.map(ingredient => (
                                        <li key={ingredient}>
                                            {ingredient} &nbsp;
                                            <span 
                                                className="delete"
                                                onClick={()=>this.removeIngredient(ingredient)}
                                            >x</span>
                                        
                                        </li>
                                    ))}
                                </ul>
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

                <button className="btn btn-dark text-muted" onClick={() => this.props.setView('dashboard')}>
                    <h1>
                        PAGE UNDER CONSTRUCTION | BACK TO DASHBOARD
                    </h1>
                </button>
            </div>
        )
    }
}