import React from 'react';
import '../css/ingredient.css';

export default class Ingredients extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filtered: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
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
        return (
            <div className="ingredient-list-container mx-auto">
                <input type="text" className="ingredients-search-bar input mb-5" onChange={this.handleChange} placeholder="Search..." />
                <div className="overflow-scroll mx-auto px-0">
                    <ul className="list-group row px-3 w-100 mx-auto">
                        {this.state.filtered.map((ingredient)  => { 
                            console.log(this.props);
                            if (this.props.ingredientsToUse.includes(ingredient)){
                                return (
                                <li 
                                    key={ingredient}
                                    className={ingredientAdded + " list-group-item w-100 mx-auto px-0 text-left row border-0"}>
                                    <div className="container-fluid d-flex align-content-middle">
                                        <button className="btn btn-danger" >+ </button>
                                        <div className="container-fluid alingn-middle row">
                                            <h6 className="align-self-center align-middle"> &nbsp; {ingredient}</h6>
                                        </div>
                                    </div>
                                </li>
                                )} else {
                                return (
                                <li 
                                    key={ingredient} 
                                    className="list-group-item w-100 mx-auto px-0 text-left row border-0">
                                    <div className="container-fluid d-flex align-content-middle">
                                        <button className="btn btn-danger" onClick={() => this.props.addIngredient(ingredient)}> + </button>
                                        <div className="container-fluid alingn-middle row">
                                            <h6 className="align-self-center align-middle"> &nbsp; {ingredient}</h6>
                                        </div>
                                    </div>
                                </li>
                            )}
                        })}

                    </ul>
                </div>
            </div>
        )
    }
}