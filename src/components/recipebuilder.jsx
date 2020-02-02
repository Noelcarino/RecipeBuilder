import React from 'react';
import HomePage from './homepage';

import DashBoard from './dashboard';
import FindIngredients from './findingredients';


export default class RecipeBuilder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            view : {
                name: 'homepage',
                params: {}
            }
        }
        this.setView = this.setView.bind(this);
    }
    setView(name){
        this.setState({
            view: {
                name:name
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
                element = <DashBoard setView={this.setView} />
                break;
            case 'findingredients':
                element = <FindIngredients setView={this.setView} />
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