import React from 'react';

export default class DashBoard extends React.Component {
    render(){
        return (
            <div>
                this is the dashboard :D 
                <button className="btn btn-success" onClick={() => this.props.setView('homepage')}>
                    back home
                </button>
            </div>
        )
    }
}