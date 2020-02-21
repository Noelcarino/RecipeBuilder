import React from 'react';
import HomePage from './homepage';
import DashBoard from './dashboard';
import FavoriteRecipes from './favoriterecipes';
import ConfirmIngredients from './confirmingredients';
import RecommendedRecipes from './recommendedrecipes';
import LetsCook from './letscook';
import Header from './header';


import './css/recipebuilder.css';


export default class RecipeBuilder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            view : {
                name: 'dashboard',
                previousView: '',
                params: {
                    ingredientsToUse: [
                        'Beef',
                        'Carne Asada',
                        'Chicken',
                        'Lamb',
                        'Macaroni',
                        'Potatoe',
                        'Salmon',
                        'Steak'
                    ],
                    favoriteRecipeCheck: false,
                    currentRecipeToCook: {}
                }
            },
            currentUser: 'guest'
        }
        this.setView = this.setView.bind(this);

    }
    setView(name, param){
        let defaultIngredients = [
            'Beef',
            'Carne Asada',
            'Chicken',
            'Lamb',
            'Macaroni',
            'Potatoe',
            'Salmon',
            'Steak' 
        ];
        let currentRecipeToCook;
        let favoriteRecipe;
        if (this.state.view.name === 'letscook' && name === 'recommendedrecipes'){
            /*  condition 3 - 'letscook' -> 'recommendedrecipes'
                The idea behind thiis condition is bc when letscook turns into 
                recommended recipes. param is undefined, param is suppose to be
                the ingredients you chose when looking for recipes, but it is undefined
                however, we can redefine param by passing props to 'letscook' and passing 
                redefining param as the current property
            */
            param = this.state.view.params.ingredientsToUse;
        }
        if (this.state.view.name === 'letscook' && name === 'favoriterecipes') {
            param = this.state.view.params.ingredientsToUse;
        }
        if (name === 'letscook'){
                /*  condition 2 - name === letscook
                    The reason I set these condiitons is because the param being passed
                    is an object. I broke down the object and assigned what I needed
                    into the definitions here just to make reading the property 
                    easier to understand.
                */
            favoriteRecipe = param.favoriteRecipe;
            currentRecipeToCook = param.recipe;
            param = param.confirmedIngredients;
        }
        if (param === undefined || param === []) param = defaultIngredients;
        this.setState({
            view: {
                name:name,
                previousView: this.state.view.name,
                params: {
                    ingredientsToUse: param,
                    favoriteCheck: favoriteRecipe,
                    currentRecipeToCook: currentRecipeToCook
                }
            },
            currentUser: 'guest'
        });
    }
    render(){
        const { name } = this.state.view;
        let element;
        let headerElement;
        if (name !== 'homepage'){
            headerElement = <Header setView = {this.setView}/>
        } else {
            headerElement = <React.Fragment></React.Fragment>
        }
        switch(name){
            case 'homepage':
                element = <HomePage 
                                setView={this.setView} 
                                />
                break;
            case 'dashboard':
                element = <DashBoard 
                                setView={this.setView}
                                state={this.state}
                                ingredientsToUse={this.state.view.params.ingredientsToUse}
                            />
                break;
            case 'confirmingredients':
                element = <ConfirmIngredients 
                                setView={this.setView}
                                ingredientsToUse={this.state.view.params.ingredientsToUse}
                            />
                break;
            case 'recommendedrecipes':
                element = <RecommendedRecipes
                                setView={this.setView}
                                previousView={this.state.previousView}
                                confirmedIngredients={this.state.view.params.ingredientsToUse}
                                currentUser={this.state.currentUser}
                            />
                break;
            case 'letscook':
                element = <LetsCook
                                setView={this.setView}
                                previousView={this.state.view.previousView}
                                state={this.state}
                            />
                break;
            case 'favoriterecipes':
                element = <FavoriteRecipes
                                currentUser={this.state.currentUser}
                                setView={this.setView}
                            />
                break;
            default:
                element = <HomePage 
                                setView={this.setView}
                            />
                break;
        }
        return (
            <div>
                {headerElement}
                {element}
            </div>
        )
    }
}