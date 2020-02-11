import React from 'react';
import '../css/ingredients.css';

export default class Ingredients extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filtered: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        var value = document.getElementById("searchbar");
        // console.log(typeof(value.value));
        let currentIngredients = [];
        let newIngredients = [];

        if(e.target.value !== ""){
            currentIngredients = this.props.ingredients;
            newIngredients = currentIngredients.filter(ingredient => {
                const lowerCase = ingredient.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lowerCase.includes(filter);
            });
        } else {
            newIngredients = this.props.ingredients;
        }

        this.setState({
            filtered: newIngredients
        })
    }
    componentDidMount(){
        this.setState({
            filtered: this.props.ingredients
        })
    }
    render(){
        let ingredientAdded = "bg-info";
        let beforeSearch = '';
        let afterSearch = '';
        // // let beforeSearch = 'before-search';
        // if (this.state.filtered.length !== 0){
        //     if (document.getElementById('searchbar').value.length === 0){
        //         beforeSearch = 'before-search';
        //         afterSearch = '';
        //     } else {
        //         beforeSearch = '';
        //         afterSearch = 'overflow-scroll';
        //     }
        // }
        return (
            <div className="ingredient-list-container mx-auto border row bg-dark py-0">
                <input id="searchbar" type="text" className="ingredients-search-bar input py-0" onChange={this.handleChange} placeholder="Search..." />
                <div className={"overflow-scroll mx-auto px-0 py-0 " + beforeSearch + ' ' + afterSearch}>
                    <ul className="overflow-list-group row px-3 w-100 mx-auto">
                        {this.state.filtered.map((ingredient)  => { 
                            
                            // console.log(document.getElementById('searchbar').value.length);
                            if (this.props.ingredientsToUse.includes(ingredient)){
            // This code
            // renders if ingredient is in list
                                return (
                                <li 
                                    key={ingredient}
                                    className={ingredientAdded + " list-group-item w-100 mx-auto px-0 text-left row border py-0"}>
                                    <div className="container-fluid d-flex align-content-middle">
                                        <button className="btn btn-danger" >+ </button>
                                        <div className="container-fluid alingn-middle row">
                                            <h6 className="align-self-center align-middle"> &nbsp; {ingredient}</h6>
                                        </div>
                                    </div>
                                </li>
                                )} else {
            // This code 
            // renders if ingredient not in ingredients to add list
            console.log("pasing?");
                                return (
                                <li 
                                    key={ingredient} 
                                    className={"w-100 mx-auto px-0 text-left row border py-0 " + beforeSearch}>
                                    <div className={"container-fluid d-flex align-content-middle " + beforeSearch}>
                                        <button className={"btn btn-danger " + beforeSearch} onClick={() => this.props.addIngredient(ingredient)}> + </button>
                                        <div className={"container-fluid alingn-middle row " + beforeSearch}>
                                            <h6 className={"align-self-center align-middle " + beforeSearch} ></h6>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                        })}

                    </ul>
                </div>
            </div>
        )
    }
}