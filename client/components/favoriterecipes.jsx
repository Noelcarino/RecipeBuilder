import React from 'react';
import FavoriteRecipe from './favoriterecipe';
import './css/favoriterecipes.css';

export default class FavoriteRecipes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            componentDidMount: false,
            favoriteRecipes: []
        }
    }
    getFavoriteRecipes(){
        let currentUser = {
            currentUser: this.props.currentUser
        }
        fetch('/api/favoriterecipes.php',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                }
            )
            .then(res => res.json())
            .then(res => {
                this.setState({
                    componentDidMount: true,
                    favoriteRecipes: res
                })
            });
    }
    componentDidMount(){
        this.getFavoriteRecipes();
    }
    render(){
        if (this.state.componentDidMount){
            return (
                <div className="favorite-recipes-component-container mx-auto row px-3">

                    <div className="favorite-recipes-component-title text-center mx-auto py-0 d-flex">
                            <h1 className="m-auto">
                                Your Favorites
                            </h1>
                    </div>

                    <div className="favorite-recipes-map-container mx-auto mb-3 px-0 py-0 row">
                        {this.state.favoriteRecipes.map((recipe,index) => {
                            return <FavoriteRecipe key={index} recipe={recipe} setView={this.props.setView} />
                        })}
                    </div>

                    <div className="favorite-recipe-component-back-to-dashboard mx-auto row p-0 ">
                        <button className="btn mx-auto p-0" onClick={() => this.props.setView('dashboard')}>
                            Back to Dashboard
                        </button>
                    </div>
                </div>
            )
        } else {
            return (
                <React.Fragment>
                    LOADING...
                </React.Fragment>
            )
        }
    }
}