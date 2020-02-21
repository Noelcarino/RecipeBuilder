/*

    1) Before adding to favorite
        - Check if recipe exist in favorite database



    2) AFter checking database, continue with next steps;
    Query to add to favorites
        $query = "INSERT INTO `favoriterecipes` (`id`, `userName`, `recipeId`) 
                    VALUES (NULL, 'guest', '5');";

    Query to remove from favorites
        -Version 1
        $queryDelete = "DELETE FROM `favoriterecipes` 
                          WHERE `favoriterecipes`.`id` = 11"

        - Version 2
        $queryDelete = "DELETE FROM `favoriterecipes` 
                          WHERE `favoriterecipes`.`userName` = 'guest' 
                            AND `favoriterecipes`.`recipeId` = 5"

*/



import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal';
import './css/letscook.css'; 

export default class LetsCook extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            componentDidMount: false,
            previousView: '',
            ingredientsToUse: [],
            currentRecipeToCook: {},
            favoriteRecipe: false,
            instructions: [],
            modalActive: false
        }
        this.getRecipeInformation = this.getRecipeInformation.bind(this);
        this.addToFavorites = this.addToFavorites.bind(this);
        this.removeFromFavorites = this.removeFromFavorites.bind(this);
    }
    alertClient(recipeStatus){
        
        /*
            This method is used to inform client that recipe has been removed from favorites
        */
        let messageStatus;
        let modal;
        let modalBackground;

        if (recipeStatus) {
            messageStatus = 'This has been added to your favorites!';
            modalBackground = 'modal-added';

            modal = <Modal messageStatus={messageStatus} modalBackground={modalBackground} />
        }
        if (!recipeStatus){
            messageStatus = 'This recipe has been removed from your favorites';
            modalBackground = 'modal-removed';
            modal = <Modal messageStatus={messageStatus} modalBackground={modalBackground} />
        }
        if (recipeStatus === 'deactivate') {
            modal = <React.Fragment></React.Fragment>
        }
        ReactDOM.render(modal,document.querySelector('#modal'))

    }
    addToFavorites(){
        let addToFavoritesObj = {
            recipeId: this.state.currentRecipeToCook.id,
            currentUser: this.props.state.currentUser
        }
        fetch('/api/addtofavorites.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify (addToFavoritesObj)
        })
        .then( res => res.json())
        .then( res => {
            if (res.length === 1) {
                this.removeFromFavorites();
                return;
            }
            this.setState({favoriteRecipe: true, modalActive: true})
        })
        // this.alertClient('added');
    }
    removeFromFavorites(){
        let removeFromFavoritesObj = {
            recipeId: this.state.currentRecipeToCook.id,
            currentUser: this.props.state.currentUser
        }
        fetch('/api/addtofavorites.php', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify (removeFromFavoritesObj)
        })
        .then( this.setState({favoriteRecipe: false, modalActive: true}));
    }
    getRecipeInformation(){

        let recipeObj = {
            recipeId: this.props.state.view.params.currentRecipeToCook.id
        }
            fetch('/api/instructions.php',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json',
                        'Acceipt' : 'application/json'
                    },
                    body: JSON.stringify(recipeObj)
                }
            )
            .then(res => res.json())
            .then(instructions => {
                this.setState({
                    componentDidMount: true,
                    previousView: this.props.previousView,
                    ingredientsToUse: this.props.state.view.params.ingredientsToUse,
                    favoriteRecipe: this.props.state.view.params.favoriteCheck,
                    currentRecipeToCook: this.props.state.view.params.currentRecipeToCook,
                    instructions: instructions,
                })
            });
    }
    componentDidMount(){
        this.getRecipeInformation();
    }
    componentDidUpdate(){
        if (this.state.modalActive) {
            if (this.state.favoriteRecipe) this.alertClient(this.state.favoriteRecipe);
            if (!this.state.favoriteRecipe) this.alertClient(this.state.favoriteRecipe);
        }
    }
    render(){
        let backButton;
        let favoriteElement;

        if (this.state.favoriteRecipe) {
            favoriteElement = <i onClick={() => this.removeFromFavorites()} className="fa fa-heart mx-auto" aria-hidden="true"></i>
        } 
        if (!this.state.favoriteRecipe) {
            favoriteElement = <i onClick={() => this.addToFavorites()} className="far fa-heart mx-auto" aria-hidden="true"></i>
        }
        if (this.state.previousView === 'favoriterecipes' && this.state.favoriteRecipe === undefined){
            favoriteElement = <i onClick={() => this.removeFromFavorites()} className="fa fa-heart mx-auto" aria-hidden="true"></i>
        }

        if (this.state.componentDidMount){
            if (this.state.previousView === 'favoriterecipes'){
                backButton = <button 
                                className="btn mx-auto p-0"
                                onClick={() => this.props.setView('favoriterecipes')}>
                                View Favorite Recipes
                            </button>
            } else if (this.state.previousView === 'recommendedrecipes') {
                backButton = <button 
                                className="btn mx-auto p-0"
                                onClick={() => this.props.setView('recommendedrecipes', this.props.state.view.params.ingredientsToUse.confirmedIngredients)}>
                                Go Back to Recipes
                            </button>
            }
            return (
                <div className="lets-cook-container row  px-0 mx-auto">

                    <div id="modal" onClick={()=> this.alertClient('deactivate')}></div>

                    {/* RECIPE TITLE CONTAINER */}
                    <div className="recipe-title-container mx-auto row mb-5">
                        <div className="container-fluid mx-auto col-8 text-center">
                            <h1>
                                {this.state.currentRecipeToCook.title}
                            </h1>
                        </div>
                        <div className="container-fluid mx-auto col-3 text-center px-0 row">
                            {favoriteElement}
                        </div>
                    </div>

                    {/* RECIPE IMAGE */}
                    <div className="lets-cook-img-container mx-auto p-0 mb-3">
                        <div style={{
                                'backgroundImage' : "url(/images/"+ this.state.currentRecipeToCook.image+")",
                                'backgroundSize' : '100% 100%',
                                'backgroundRepeat' : 'no-repeat'
                            }} 
                            className="lets-cook-img mx-auto p-0">
                        </div>
                    </div>

                    {/* RECIPE INSTRUCTIONS */}
                    <div className="recipe-instructions-container row mx-auto px-0 mb-3 py-0">
                        <div className="container-fluid mx-auto text-center my-0">
                            Instructions
                        </div>
                        <div className="container-fluid recipe-instructions-list px-3 py-1 mx-auto text-center my-0">
                            Scroll Down for more 
                            <hr className="my-0" />                            
                            <ol className="list-group">
                                {this.state.instructions.map((steps,index) => {
                                    return (
                                        <li className="list-group-item border-0" key={index + 1}>{index + 1}) &nbsp;{steps}</li>
                                    )
                                })}
                            </ol>
                        </div>
                    </div>

                    <div className="lets-cook-buttons mx-auto mb-3 row py-3">
                        <div className="container-fluid mx-auto mb-3 row col-12 col-md-6">
                            {backButton}
                        </div>
                        <div className="container-fluid mx-auto row col-12 col-md-6">
                            <button 
                                className="btn mx-auto py-0"
                                onClick={() => this.props.setView('dashboard')}>
                                Back to Dashboard
                            </button>
                        </div>
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