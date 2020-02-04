import React from 'react';
import '../css/confirmingredients.css';
export default class ConfirmIngredients extends React.Component {
    render(){
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
                <div className="confirm-ingredients-content container-fluid mx-auto mb-3">
                    
                </div>

                {/* CONFIRM INGREDIENTS TO BUILD RECIPE */}
                <div className="build-ingredients-return-search mx-auto row">

                    <div className="container-fluid m-auto row">
                        <button className="btn btn-dark mx-auto">
                            BUILD RECIPE
                        </button>
                    </div>
                    

                    <div className="container-fluid m-auto row">
                        <button className="btn btn-dark mx-auto" onClick={() => this.props.setView('findingredients')}>
                            RETURN TO SEARCH
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}