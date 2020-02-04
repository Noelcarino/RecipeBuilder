import React from 'react';
import '../css/confirmingredients.css';
export default class ConfirmIngredients extends React.Component {
    render(){
        return (
            <div className="confirm-ingredients-container row px-0 py-5 mx-auto">

                <div className="confirm-ingredients-description mx-auto mb-5 text-center p-3">
                    <h1>Ingredients List</h1>

                    <h3>
                        Confirm your ingredients and build your recipe!
                    </h3>
                </div>

                <div className="confirm-ingredients-content container-fluid mx-auto">
                    <button onClick={() => this.props.setView('findingredients')}>
                        RETURN TO SEARCH
                    </button>
                </div>

            </div>
        )
    }
}