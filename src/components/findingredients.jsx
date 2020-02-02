import React from 'react';

export default class FindIngredients extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <button className="btn btn-dark text-muted" onClick={() => this.props.setView('dashboard')}>
                    <h1>
                        PAGE UNDER CONSTRUCTION | BACK TO DASHBOARD
                    </h1>
                </button>
            </div>
        )
    }
}