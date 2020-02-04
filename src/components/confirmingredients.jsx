import React from 'react';
import '../css/confirmingredients.css';
export default class ConfirmIngredients extends React.Component {
    render(){
        return (
            <div className="confirm-ingredients-container">
                <button onClick={() => this.props.setView('findingredients')}>
                    RETURN TO SEARCH
                </button>
            </div>
        )
    }
}