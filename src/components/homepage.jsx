import React from 'react';
import '../css/homepage.css';
export default class HomePage extends React.Component {
    render(){
        return (
            <div className="homepage-container m-0">
                <div className="homepage-bg py-5">


                    {/* WELCOME SECTION */}
                    <div className="welcome-container row text-center p-0 mb-4 mx-auto ">
                        <div className="h-100 col-8 col-md-12 text-center mx-auto px-0 py-4">
                            Build <em>YOUR</em> Recipe
                        </div>
                    </div>

                    {/* LOGIN SECTION */}
                    <div className="login-container row text-center p-0 mx-auto mb-4">
                        <div className="h-100 col-8 px-0 py-4 mx-auto">
                            {/* <button className="login-button" onClick={() => this.props.setView('dashboard')}>
                                LOGIN AS GUEST
                            </button> */}
                            <button className="login-button" onClick={() => this.props.setView('dashboard', [])}>
                                LOGIN AS GUEST
                            </button>
                        </div>
                    </div>

                    {/* CREDIT SECTION */}
                    <div className="thankyou-container row text-center p-0 mx-auto">
                        <div className="h-100 col-8 p-0  mx-auto">
                            <div className="container">
                                @ Katherine Tor
                            </div>
                            <div className="container">
                                © Noel Angelo Carino
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}