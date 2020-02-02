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
            <div className="container-fluid mx-auto">
                {/* <ul> */}
                    <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                    <div className="container-fluid row mx-auto">

                    {this.props.ingredients.map(ingredient => (
                        // <li key={ingredient}>
                        <div className="container-fluid col-4 mr-0 text-muted">
                            <button className="btn btn-danger rounded-circle " onClick={() => this.props.delete(ingredient)}>X</button>
                            {ingredient} &nbsp;

                            </div>

                        // {/* </li> */}
                    ))}
                    </div>

                {/* </ul> */}
            </div>
        )
    }
}