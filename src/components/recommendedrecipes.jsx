import React from 'react';

export default class RecommendedRecipes extends React.Component {
    render(){
        console.log(this.props);
        return (
            <div>
                <button onClick={() => this.props.setView('dashboard')}>
                    GO BACK TO DASHBOARD
                </button>
            </div>
        )
    }
}