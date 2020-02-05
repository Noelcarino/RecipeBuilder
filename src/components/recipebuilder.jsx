import React from 'react';
import HomePage from './homepage';

import DashBoard from './dashboard';
import FindIngredients from './findingredients';
import ConfirmIngredients from './confirmingredients';
import RecommendedRecipes from './recommendedrecipes';
import LetsCook from './letscook';

export default class RecipeBuilder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            view : {
                name: 'recommendedrecipes',
                params: {
                    ingredientsToUse: [],
                    currentRecipeToCook: {}
                }
            }
        }
        this.setView = this.setView.bind(this);
    }
    setView(name, param){
        console.log('name - ', name);
        console.log('param - ', param);
        let currentRecipe;
        if (param === undefined) param = [];
        else if (param.recipeId) {
            currentRecipe = param;
            param = currentRecipe.recipeIngredients;
        }
        this.setState({
            view: {
                name:name,
                params: {
                    ingredientsToUse: param,
                    currentRecipeToCook: currentRecipe
                }
            }
        });
        console.log(this.state);
        console.log(param.recipeId);
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