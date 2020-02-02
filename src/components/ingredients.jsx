import React from 'react';

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

        console.log(newIngredients);
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
            <div>
                <ul>
                    <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                    {this.props.ingredients.map(ingredient => (
                        <li key={ingredient}>
                            {ingredient} &nbsp;
                            <button className="btn btn-danger rounded-circle " onClick={() => this.props.delete(ingredient)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}