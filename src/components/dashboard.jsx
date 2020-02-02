import React from 'react';
import '../css/dashboard.css';
export default class DashBoard extends React.Component {
    render(){
        return (
            <div className="dashboard-container py-4">


                <div className="dashboard-content text-center py-5">


                    {/* WELCOME BACK SECTION */}
                    <div className="welcome-back-container mx-auto row px-0 mb-5">

                        <div className="container-fluid px-0 mx-auto col-4 row h-100">
                            <img style={{"backgroundImage":"url('../src/images/catbug-profile-pic.jpg')"}} className="img-fluid rounded-circle m-auto welcome-back-container-image" src={require('../images/catbug-profile-pic.jpg')} alt=""/>
                        </div>

                        <div className="welcome-back-container-description container-fluid col-7 text-center p-0">
                            <h1 className="display-4">
                                Welcome back, CatBug!
                            </h1>
                        </div>

                    </div>



                    {/* FIND INGREDIENTS SECTION */}

                    <div className="find-ingredients-container container-fluid mx-auto row px-0 mb-5">

                        <div className="container-fluid m-auto">
                            <h1 className="display-4">
                                Find Ingredients
                            </h1>
                        </div>
                        
                        <div className="container-fluid m-auto">
                            <h2>
                                Let's create your ingredients list to build your recipe
                            </h2>
                        </div>

                        <div className="container-fluid m-auto">
                            <button className="begin-search-button" onClick={() => this.props.setView('findingredients')}>
                                BEGIN SEARCH
                            </button>
                        </div>

                    </div>

                    <h1>
                        DASHBOARD
                    </h1>
                    <button className="btn btn-success" onClick={() => this.props.setView('homepage')}>
                        LogOut
                    </button>
                </div>
            </div>
        )
    }
}