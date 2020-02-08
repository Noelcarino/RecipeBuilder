import React from 'react';
import HomePage from './homepage';

import DashBoard from './dashboard';
import FindIngredients from './findingredients';
import ConfirmIngredients from './confirmingredients';
import RecommendedRecipes from './recommendedrecipes';
import LetsCook from './letscook';
import FavoriteRecipes from './favoriterecipes';

export default class RecipeBuilder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            view : {
                name: 'dashboard',
                params: {
                    ingredientsToUse: [],
                    currentRecipeToCook: {}
                }
            }
        }
        this.setView = this.setView.bind(this);
    }
    setView(name, param){
        let currentRecipeToCook;
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
        if (name === 'letscook'){
                /*  condition 2 - name === letscook
                    The reason I set these condiitons is because the param being passed
                    is an object. I broke down the object and assigned what I needed
                    into the definitions here just to make reading the property 
                    easier to understand.
                */
            currentRecipeToCook = param.recipe;
            param = param.confirmedIngredients;
        }
        if (param === undefined) param = [];
        this.setState({
            view: {
                name:name,
                params: {
                    ingredientsToUse: param,
                    currentRecipeToCook: currentRecipeToCook
                }
            }
        });
    }
    render(){
        const { name } = this.state.view;
        let element;
        switch(name){
            case 'homepage':
                element = <HomePage setView={this.setView} />
                break;
            case 'dashboard':
                element = <DashBoard 
                                setView={this.setView} 
                                ingredientsToUse={this.state.view.params.ingredientsToUse}
                            />
                break;
            case 'findingredients':
                element = <FindIngredients 
                                setView={this.setView}
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
                                confirmedIngredients={this.state.view.params.ingredientsToUse}
                            />
                break;
            case 'letscook':
                element = <LetsCook
                                setView={this.setView}
                                state={this.state}
                            />
                break;
            case 'favoriterecipes':
                element = <FavoriteRecipes 
                                setView={this.setView}
                            />
                break;
            default:
                element = <HomePage setView={this.setView}/>
                break;
        }
        return (
            <div>
                {element}
            </div>
        )
    }
}