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
        return (
            <div className="ingredient-list-container mx-auto">
                <input type="text" className="ingredients-search-bar input mb-5" onChange={this.handleChange} placeholder="Search..." />
                <div className="overflow-scroll mx-auto border px-0">
                    <ul className="list-group row border px-3 w-100 mx-auto">
                        {this.state.filtered.map((ingredient)  => (
                            <li key={ingredient} className="list-group-item w-100 mx-auto px-2 text-left">
                                <button className="btn btn-danger" onClick={() => this.props.addIngredient(ingredient)}>+ </button>
                                &nbsp; {ingredient} &nbsp;
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        )
    }
}