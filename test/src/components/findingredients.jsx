import React from 'react';
import Ingredients from './ingredients';
import '../css/findingredients.css'

export default class FindIngredients extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients: [
                'Beef',    
                'Brocolli',
                'Carrots', 
                'Chicken', 
                'Rice',    
                'Zuccini'  
            ],
            ingredientsToUse: [],
        }
        this.addIngredient = this.addIngredient.bind(this);
        this.removeIngredient = this.removeIngredient.bind(this);
    }
    addIngredient(e){
        // e.preventDefault(); 
        let ingredients = this.state.ingredientsToUse;
        // const newIngredient = document.getElementById("addIngredient");
        // const form = document.getElementById("addIngredientForm");

        if (this.state.ingredientsToUse.includes(e)){
            alert(e + " is already in your ingredients list!");
            return ;
        } else{
            alert(e + " has been added to your ingredients list");
        }
        ingredients.push(e);
        this.setState({
            ingredientsToUse: ingredients
        })
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
    componentDidMount(){
        this.setState({
            ingredientsToUse: this.props.ingredientsToUse
        })
    }
    render(){
        let element;
        let confirmButton;
        if (    this.state.ingredientsToUse.length === 0 ){
            element = <div className="container-fluid mx-auto text-center">
                <h3>You have not selected any ingredients</h3>
            </div>
            confirmButton = <React.Fragment></React.Fragment>
            
        } else {
            element = <React.Fragment></React.Fragment>;
            confirmButton = <div className="container-fluid mx-auto row px-0 ">
            <button className="btn btn-dark mx-auto" onClick={() => this.props.setView('confirmingredients', this.state.ingredients)}>
                CONFIRM
            </button>
            </div>
        }
        return (
            <div className="find-ingredients-component-container py-5 py-sm-45 py-md-5 py-lg-5 px-1 || row mx-auto">

                {/* <div className="search-ingredients-container mx-auto mb-5 row || col-sm-11 col-lg-5">

                    FIND INGREDIENTS HEADER SECTION
                    <div className="container-fluid m-auto">
                        <div className="container-fluid mx-auto mb-3 text-center">
                            <h1>
                                Find Ingredients
                            </h1>
                        </div>
                        <div className="container-fluid mx-auto mb-5 text-center">
                            Find your ingredients and build your recipe
                        </div>
                    </div>

                    <div className="container-fluid mx-auto py-0 ">
                        <div className="mx-auto text-center py-0">

                            <Ingredients />
                            <Ingredients 
                                ingredients={this.state.ingredients}
                                ingredientsToUse={this.state.ingredientsToUse}
                                addIngredient={this.addIngredient}
                            />
                        </div>
                    </div>
                </div> */}

                {/* INGREDIENTS TO USE SECTION */}
                <div className="ingredients-to-use-container mx-auto mb-5 p-2 || col-sm-11 col-lg-5">
                    <div className="container-fluid mx-auto mb-2 text-center">
                        <h1>
                            Ingredients To Use ({this.state.ingredientsToUse.length})
                        </h1>
                    </div>
                    <div className="ingredients-to-use-map-section container-fluid mx-auto text-center row justify-content-start mb-5">
                        {/* {element} */}
                        <ul className="list-group w-100 text-left ">
                            {this.state.ingredients.map(ingredient => {
                                return (
                                    <li key={ingredient} className="list-group-item py-1 px-2 ">
                                        {/* <button 
                                            className="btn btn-dark m-auto"
                                            onClick={() => this.removeIngredient(ingredient)}> */}
                                            <i className="fa fa-times" aria-hidden="true"></i> &nbsp; 
                                            {ingredient} 
                                        {/* </button> */}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* {confirmButton} */}
                    <div className="container-fluid mx-auto row px-0 ">
                        <button className="btn btn-dark mx-auto" onClick={() => this.props.setView('confirmingredients', this.state.ingredients)}>
                            CONFIRM
                        </button>
                    </div>
                    
                </div>

                <div className="container-fluid mx-auto row px-0 mb-5">
                    <button className="btn btn-dark text-muted mx-auto" onClick={() => this.props.setView('dashboard', [])}>
                            PAGE UNDER CONSTRUCTION | BACK TO DASHBOARD
                    </button>
                </div>
            </div>
        )
    }
}
