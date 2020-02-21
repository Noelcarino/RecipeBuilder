import React from 'react';
import './css/confirmedrecipe.css';
export default class ConfirmedRecipe extends React.Component{
    render(){
        return (
            <div className="confirmed-recipe mx-auto align-items-end p-0">

                <div className="recipe-top-container p-0 ">
                    <img 
                        className="recipe-image img-fluid p-0 w-100 h-100" 
                        src={"images/"+this.props.recipe.image}
                        alt={this.props.recipe.title}/>
                </div>

                <div className="recipe-bottom-container mx-auto row align-items-start">

                    <div className="container-fluid mx-auto text-center p-0">
                        {this.props.recipe.title}
                    </div>

                    <div className="container-fluid mx-auto row">
                        <button className="btn mx-auto py-0" onClick={() => this.props.setView('letscook', this.props)}>
                            LET'S COOK!
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}