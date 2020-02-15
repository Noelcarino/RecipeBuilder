import React from 'react';
// import Carousel from './carousel';

export default class DashBoard extends React.Component {
    render(){
        return (
            <div className="dashboard-container bg-test row m-0 px-3">

                {/* WELCOME BACK SECTION */}
                <div className="welcome-back-container mx-auto row mb-5">

                    <div className="container-fluid px-0 mx-auto col-4 row h-100">
                        <img 
                        // style={{backgroundImage:"url(" +"../../images/catbug-profile-pic.jpg"+ ")"}} 
                        className="img-fluid rounded-circle m-auto welcome-back-container-image shadow-lg" 
                        // 'recipebuilder/recipebuilder2/client/components'
                        src={"images/catbug-profile-pic.jpg"} 
                        alt=""/>
                    </div>

                    <div className="welcome-back-container-description col-7 text-center p-0 m-auto">
                        Welcome back, CatBug!
                    </div>

                </div>

                {/* FIND INGREDIENTS SECTION */}
                <div className="find-ingredients-container mx-auto row px-0 mb-5 text-center">

                    <div className="container-fluid m-auto">
                        <h1>
                            Find Ingredients
                        </h1>
                    </div>
                    
                    <div className="container-fluid m-auto">
                        Let's create your ingredients list to build your recipe
                    </div>

                    <div className="container-fluid m-auto">
                        <button className="btn" onClick={() => this.props.setView('confirmingredients',this.props.ingredientsToUse)}>
                            BEGIN SEARCH
                        </button>
                    </div>

                </div>

                {/* FAVORITE RECIPES */}

                <div className="favorite-recipes-container mx-auto row px-0 mb-5 text-center">

                    <div className="container-fluid m-auto mb-0">
                        <h1>
                            Favorite Recipes
                        </h1>
                    </div>

                    {/* MAKE A CAROUSEL COMPONENT HERE */}
                    <div className="carousel-container container-fluid m-auto px-0 mb-5">
                            {/* !!!ADD CAROUSEL COMPONENT HERE!!! */}
                            {/* <Carousel /> */}
                    </div>

                    <div className="container-fluid m-auto">
                        <button className="btn" onClick={() => this.props.setView('favoriterecipes')}>
                            VIEW FAVORITES
                        </button>
                    </div>

                </div>


                <div className="container-fluid mx-auto row p-0">
                    <button className="btn mx-auto shadow px-5" onClick={() => this.props.setView('homepage')}>
                        Log Out
                    </button>
                </div>
                
                
            </div>
        )
    }
}