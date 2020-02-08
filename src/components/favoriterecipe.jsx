import React from 'react';

export default class FavoriteRecipe extends React.Component {
    render(){
        return (
            <div className="favorite-recipe mx-auto mb-5">
                
                <div className="favorite-recipe-top p-0">
                    <img 
                        className="recipe-image img-fluid p-0 w-100 h-100" 
                        src={require("../images/"+this.props.recipe.recipeImage+"")}
                        alt={this.props.recipe.recipeTitle}/>
                </div>

                <div className="favorite-recipe-bottom mx-auto row align-items-start border py-2">

                    <div className="container-fluid mx-auto text-center p-0">
                        {this.props.recipe.recipeTitle}
                    </div>

                    <div className="container-fluid mx-auto my-0 py-0 row">

                        <button className="btn btn-dark mx-auto" onClick={() => this.props.setView('letscook', this.props)}>
                            LET'S COOK!
                        </button>
                    </div>

                </div>

            </div>
        )
    }
}