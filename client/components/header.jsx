import React from 'react';
import './css/header.css';

export default class Header extends React.Component {
    render(){
        return (
            <div className="recipebuilder-header">

                <div 
                    onClick={() => this.props.setView('dashboard')}
                    className="recipebuilder-header-house-icon">
                </div>

            </div>
        )
    }
}