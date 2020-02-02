import React from 'react';
import HomePage from './homepage';



export default class RecipeBuilder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            view : 'homepage'
        }
    }
    setView(){

    }
    render(){
        const { name } = this.state.view;
        let element;
        switch(name){
            case 'homepage':
                element = <HomePage />
                break;
            default:
                element = <HomePage />
                break;
        }
        return (
            <div>
                {element}
            </div>
        )
    }
}