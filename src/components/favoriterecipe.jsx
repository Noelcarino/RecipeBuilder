import React from 'react';

export default class FavoriteRecipe extends React.Component {
    render(){
        return (
            <div className="favorite-recipe mx-auto mb-5">
                
                <div className="favorite-recipe-top p-0">

                </div>

                <div className="favorite-recipe-bottom mx-auto row align-items-start border py-0">

                    <div className="container-fluid mx-auto text-center p-0">

                    </div>

                    <div className="container-fluid mx-auto my-0 py-0 row">

                        <button className="btn btn-dark mx-auto" onClick={() => this.props.setView('letscook', this.props)}>

                        </button>
                    </div>

                </div>

            </div>
        )
    }
}