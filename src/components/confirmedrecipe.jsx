import React from 'react';

export default class ConfirmedRecipe extends React.Component{
    render(){
        console.log(this.props);
        return (
            <div className="confirmed-recipe mx-auto mb-5 row align-items-end p-0">

                <div className="recipe-top-container p-0 ">
                    <img 
                        className="recipe-image img-fluid p-0 w-100 h-100" 
                        src={require("../images/"+this.props.recipe.recipeImage+"")}
                        alt={this.props.recipe.recipeTitle}/>
                </div>

                <div className="recipe-bottom-container mx-auto row align-items-start border py-0">

                    <div className="container-fluid mx-auto text-center p-0">
                        {this.props.recipe.recipeTitle}
                    </div>

                    <div className="container-fluid mx-auto  my-0 py-0 row">
                        <button className="btn btn-dark mx-auto" onClick={() => this.props.setView('letscook', this.props)}>
                            LET'S COOK!
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}