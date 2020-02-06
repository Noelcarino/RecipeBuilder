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
        this.getRecipeInformation = this.getRecipeInformation.bind(this);
    }
    getRecipeInformation(){
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
        let recipe1Insructions = [
            'First you gotta start the fire',
            'season the beef',
            'cook the rice',
            'finish cooking the beef',
            'finishing cooking the rice',
            'add the beef on top of the rice',
            'make sure you set it inside of a beautiful bowl',
            'set that bowl on top of a nice ass table',
            'turn the lights down low',
            'once the lights are low to your liking, turn on the music',
            'invite the LOYL',
            'make love',
            'then enjoy that beetf with rice'
        ]
        const recipe1 = {
            recipdId: 1,
            recipeTitle: 'Braised Chicken with Steamed Veggies',
            recipeIngredients : ['Chicken', 'Brocolli', 'Carrots'],
            recipeConfirmedIngredientCount: 0,
            recipeImage: 'beefwithrice.jpg',
            recipeTimeToCook: '00:50',
            recipeInstructions: recipe1Insructions
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
    componentDidMount(){
        this.getRecipeInformation();
    }
    render(){
        console.log(this.state);
        if (this.state.componentDidMount){
            return (
                <div className="lets-cook-container p-3">

                    {/* RECIPE TITLE CONTAINER */}

                    <div className="recipe-title-container mx-auto p-2 row mb-3">
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
                    
                    {/* RECIPE IMAGE */}

                    <div className="lets-cook-img-container mx-auto p-3 row mb-3 ">
                        <img 
                            className="img-container img-fluid"
                            src={require("../images/"+ this.state.currentRecipeToCook.recipeImage +"")} alt=""
                        />
                    </div>

                    {/* RECIPE INSTRUCTIONS */}

                    <div className="recipe-instructions-container row mx-auto px-0 py-3 mb-3">

                        <div className="container-fluid mx-auto">
                            <h3>
                                Preparation
                            </h3>
                        </div>
                        <div className="container-fluid recipe-instructions-list p-0 px-3 mx-auto">
                            <ol className="list-group border-0">
                                {this.state.currentRecipeToCook.recipeInstructions.map((steps,index) => {
                                    return (
                                        <li className="list-group-item" key={index + 1}>{index + 1}) &nbsp;{steps}</li>
                                    )
                                })}
                            </ol>
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