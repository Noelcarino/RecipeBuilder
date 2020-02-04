import React from 'react';
import '../css/recommendedrecipes.css';

export default class RecommendedRecipes extends React.Component {

    render(){
        console.log(this.props);
        return (
            <div className="recommended-recipes-container row px-0 py-5 mx-auto">


                <div className="recommended-recipes-content-container mx-auto mb-3 text-center p-3">
                    <h1>Recommended Recipes</h1>

                    <h3>
                        With the recipes you've picked, here are some ingredients for you to try and cook!
                    </h3>
                </div>


                <button onClick={() => this.props.setView('dashboard')}>
                    GO BACK TO DASHBOARD
                </button>
            </div>
        )
    }
}