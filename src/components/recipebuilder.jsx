import React from 'react';
import HomePage from './homepage';

import DashBoard from './dashboard';
import FindIngredients from './findingredients';
import ConfirmIngredients from './confirmingredients';


export default class RecipeBuilder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            view : {
                name: 'homepage',
                params: {
                    ingredientsToUse: [],
                }
            }
        }
        this.setView = this.setView.bind(this);
    }
    setView(name, param){
        // console.log('param - ',param)

        if (param === undefined) param = [];
        this.setState({
            view: {
                name:name,
                params: {
                    ingredientsToUse: param
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
                                ingredientsToUse={this.state.view.params.ingredientsToUse}/>
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
                                removeIngredient={this.removeIngredient}
                                ingredientsToUse={this.state.view.params.ingredientsToUse}
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