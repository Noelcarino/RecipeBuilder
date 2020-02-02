import React from 'react';
import '../css/dashboard.css';
export default class DashBoard extends React.Component {
    render(){
        return (
            <div className="dashboard-container">
                <h1>
                    DASHBOARD
                </h1>
                <button className="btn btn-success" onClick={() => this.props.setView('homepage')}>
                    back home
                </button>

                <div className="test">
                    hello
                </div>
            </div>
        )
    }
}