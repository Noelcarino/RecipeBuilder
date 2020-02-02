import React from 'react';
import '../css/homepage.css';
export default class HomePage extends React.Component {
    render(){
        return (
            <div className="homepage-container p-0">
                <div className="homepage-bg py-5">

                    <div className="welcome-container row text-center p-0">
                        <div className="h-100 col-8 col-md-12 text-center mx-auto px-0 py-4">
                            Build <em>YOUR</em> Recipe
                        </div>
                        
                    </div>




                    {/* <div className="row m-0 p-5 border border-white h-100">
                        
                    <div className="container-fluid mx-auto border col-12 text-center">
                        <div className="container-fluid mt-5 border border-white">
                            <h1 className="display-1">
                                Build
                            </h1>
                        </div>
                        
                        <div className="container-fluid mt-5 border border-white">
                            <h1 className="display-1">
                                <em>
                                    YOUR
                                </em>
                            </h1>
                        </div>

                        <div className="container-fluid mt-5 border border-white">
                            <h1 className="display-1">
                                Recipe
                            </h1>
                        </div>
                    </div>
                    </div> */}

                </div>
            </div>
        )
    }
}