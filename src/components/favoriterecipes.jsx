import React from 'react';
import '../css/favoriterecipes.css';

export default class FavoriteRecipes extends React.Component {
    render(){
        return (
            <div className="favorite-recipes-component-container mx-auto row p-3">

                <div className="favorite-recipes-component-title text-center">
                    <h1>
                        Your Favorites
                    </h1>
                </div>
            </div>
        )
    }
}