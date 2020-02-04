import React from 'react';

export default class ConfirmIngredients extends React.Component {
    render(){
        return (
            <div>
                <button onClick={() => this.props.setView('findingredients')}>
                    RETURN TO SEARCH
                </button>
            </div>
        )
    }
}