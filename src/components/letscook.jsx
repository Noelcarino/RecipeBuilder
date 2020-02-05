import React from 'react';
import '../css/letscook.css'; 

export default class LetsCook extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            componentDidMount: false,
            ingredientsToUse: [],
            currentRecipeToCook: {}
        }
    }
    componentDidMount(){
        let dummyArray = [
            'Asparagus',
            'Beets',
            'Beef',
            'Brocolli',
            'Cabbage',
            'Carrots',
            'Celery',
            'Cauliflower',
            'Chicken',
            'Cucumber',
            'Potatoes',
            'Rice',
            'Zuccini'
        ];
        const recipe1 = {
            recipdId: 1,
            recipeTitle: 'Braised Chicken with Steamed Veggies',
            recipeIngredients : ['Chicken', 'Brocolli', 'Carrots'],
            recipeConfirmedIngredientCount: 0,
            recipeImage: 'braisedchickenwithsteamedveggies.png',
            recipeTimeToCook: '00:50'
        }
        // this.setState({
        //     componentDidMount: true,
        //     ingredientsToUse: this.props.state.view.params.ingredientsToUse,
        //     currentRecipeToCook: this.props.state.view.params.currentRecipeToCook
        // })
        this.setState({
            componentDidMount: true,
            ingredientsToUse: dummyArray,
            currentRecipeToCook: recipe1
        })
    }
    render(){
        console.log(this.state);
        if (this.state.componentDidMount){
            return (
                <div className="lets-cook-container p-3">


                    {/* RECIPE TITLE CONTAINER */}

                    <div className="recipe-title-container mx-auto border p-3 row">
                        <div className="container-fluid mx-auto col-8">
                            <h3>
                                {this.state.currentRecipeToCook.recipeTitle}
                            </h3>
                        </div>
                        <div className="container-fluid mx-auto col-4">
                            {/* <i class="far fa-heart"></i> */}

                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                        </div>
                       
                    </div>


                    <div className="container-fluid mx-auto">

                        <button 
                            className="btn btn-dark btn-block mx-auto"
                            onClick={() => this.props.setView('recommendedrecipes', this.props.state.view.params.ingredientsToUse.confirmedIngredients)}>
                            go back to recipes
                        </button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="lets-cook-container">
                    loading..
                </div>
            )
        }
    }
}