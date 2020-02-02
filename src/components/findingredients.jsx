import React from 'react';
import '../css/findingredients.css'

export default class FindIngredients extends React.Component {
    render(){
        return (
            <div className="find-ingredients-component-container py-5">
               


                <div className="search-ingredients-container mx-auto mb-5 row px-0">

                    <div className="container-fluid m-auto">

                        <div className="container-fluid mx-auto mb-5 text-center">
                            <h1 className="display-4">
                                Find Ingredients
                            </h1>
                        </div>

                        <div className="container-fluid m-auto text-center">
                            <h2>
                                Find your ingredients and build your recipe
                            </h2>
                        </div>

                    </div>




                </div>

                <button className="btn btn-dark text-muted" onClick={() => this.props.setView('dashboard')}>
                    <h1>
                        PAGE UNDER CONSTRUCTION | BACK TO DASHBOARD
                    </h1>
                </button>
            </div>
        )
    }
}