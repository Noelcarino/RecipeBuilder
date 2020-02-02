import React from 'react';
import '../css/homepage.css';
export default class HomePage extends React.Component {
    render(){
        return (
            <div className="homepage-container m-0">
                <div className="homepage-bg py-5">


                    {/* WELCOME SECTION */}
                    <div className="welcome-container row text-center p-0 mb-5 mx-auto border ">
                        <div className="h-100 col-8 col-md-12 text-center mx-auto px-0 py-4 border">
                            Build <em>YOUR</em> Recipe
                        </div>
                    </div>

                    {/* LOGIN SECTION */}
                    <div className="login-container row text-center p-0 mx-auto border">
                        <div className="h-100 col-8 col-md-12 border px-0 py-4 mx-auto">

                            <button className="login-button" onClick={() => console.log()}>
                                LOGIN AS GUEST
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}