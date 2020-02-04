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
    componentDidMount(){
        this.setState({
            ingredientsToConfirm: this.props.ingredientsToUse
        })
    }
    render(){
        console.log(this.state.ingredientsToConfirm);
        return (
            <div className="confirm-ingredients-container row px-0 py-5 mx-auto">

                {/* INGREDIENTS LIST DESCRIPTION */}
                <div className="confirm-ingredients-description mx-auto mb-3 text-center p-3">
                    <h1>Ingredients List</h1>

                    <h3>
                        Confirm your ingredients and build your recipe!
                    </h3>
                </div>

                {/* REVIEW INGREDIENTS TO SEARCH */}
                <div className="confirm-ingredients-content container-fluid mx-auto mb-3 row align-items-start p-3">

                    <div className="container-fluid row mx-auto align-items-start">
                        {this.state.ingredientsToConfirm.map( ingredient => {
                            return (
                                <div key={ingredient} className="container-fluid col-6 px-3 row border m-auto align-items-start align-self-start">
                                    <button className="btn btn-dark m-auto" onClick={() => this.removeIngredient(ingredient)}>
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
                        <button className="btn btn-dark mx-auto">
                            BUILD RECIPE
                        </button>
                    </div>
                    

                    <div className="container-fluid m-auto row">
                        <button className="btn btn-dark mx-auto" onClick={() => this.props.setView('findingredients', this.state.ingredientsToConfirm)}>
                            RETURN TO SEARCH
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}