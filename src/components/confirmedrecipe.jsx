import React from 'react';

export default class ConfirmedRecipe extends React.Component{
    render(){
        return (
            <div className="confirmed-recipe mx-auto mb-5 row align-items-end">
                

                <div className="recipe-bottom-container mx-auto row align-items-end border py-2">

                    <div className="container-fluid mx-auto text-center p-0">
                        {this.props.recipeTitle}
                    </div>

                    <div className="container-fluid mx-auto  my-0 py-0 row">
                        <button className="btn btn-dark mx-auto" onClick={() => console.log(this.props)}>
                            LET'S COOK!
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}