import React from 'react';

export default class ConfirmedRecipe extends React.Component{
    render(){
        return (
            <div>
                {this.props.recipeTitle}
            </div>
        )
    }
}