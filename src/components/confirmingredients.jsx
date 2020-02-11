import React from 'react';
import '../css/confirmingredients.css';

export default class ConfirmIngredients extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ingredientsToConfirm : []
        }
        this.removeIngredient = this.removeIngredient.bind(this);
    }
    removeIngredient(ingredient){
        if (this.state.ingredientsToConfirm.length === 1) return;
        const ingredients = this.state.ingredientsToConfirm.slice();
        ingredients.some((el, i) => {
            if (el === ingredient){
                ingredients.splice(i, 1);
                return true;
            } 
        });
        this.setState({
            ingredientsToConfirm: ingredients
        })
    }
    resetIngredients(){
        let defaultIngredients = ['Beef',    
            'Brocolli',
            'Carrots', 
            'Chicken', 
            'Rice',    
            'Zuccini'  
        ];
        this.setState({
            ingredientsToConfirm: defaultIngredients
        })
    }
    componentDidMount(){ 
        this.setState({
            ingredientsToConfirm: this.props.ingredientsToUse
        })
    }
    render(){
        return (
            <div className="confirm-ingredients-container row px-0 py-5 mx-auto">

                {/* INGREDIENTS LIST DESCRIPTION */}
                <div className="confirm-ingredients-description mx-auto text-center p-0 mb-3 border border-dark">
                    <h1>Ingredients List</h1>
                        Confirm your ingredients and build your recipe!
                </div>

                {/* REVIEW INGREDIENTS TO SEARCH */}
                <div className="confirm-ingredients-content container-fluid mx-auto mb-3 row align-items-start px-0 py-3">

                    <div className="container-fluid row mx-auto align-items-start">
                        {this.state.ingredientsToConfirm.map( ingredient => {
                            return (
                                <div key={ingredient} className="container-fluid col-sm-12 col-lg-6 px-3 py-0 row m-auto align-self-start d-flex">
                                    <button className="btn btn-dark align-self-start col-6 py-2 my-1 my-lg-4 mx-auto" onClick={() => this.removeIngredient(ingredient)}>
                                        {ingredient} &nbsp; <i className="fa fa-times" aria-hidden="true"></i>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* CONFIRM INGREDIENTS TO BUILD RECIPE */}
                <div className="build-ingredients-return-search mx-auto row">

                    <div className="container-fluid m-auto row">
                        <button className="btn btn-dark mx-auto" onClick={() => this.props.setView('recommendedrecipes', this.state.ingredientsToConfirm)}>
                            Confirm Ingredients
                        </button>
                    </div>
                    
                    <div className="container-fluid m-auto row">
                        <button className="btn btn-dark mx-auto" onClick={() => this.resetIngredients()}>
                            Reset Ingredients List
                        </button>
                    </div>
                    <div className="container-fluid m-auto row">
                        <button className="btn btn-dark mx-auto" onClick={() => this.props.setView('dashboard', this.state.ingredientsToConfirm)}>
                            Return to Dashboard
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}