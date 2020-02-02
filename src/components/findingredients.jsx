import React from 'react';
import '../css/findingredients.css'

export default class FindIngredients extends React.Component {
    render(){
        return (
            <div className="find-ingredients-component-container">
                <button className="btn btn-dark text-muted" onClick={() => this.props.setView('dashboard')}>
                    <h1>
                        PAGE UNDER CONSTRUCTION | BACK TO DASHBOARD
                    </h1>
                </button>
            </div>
        )
    }
}