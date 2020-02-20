import React from 'react';

import './css/carousel.css';

export default class Carousel extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            imageArray: [],
            recipeTitleArray: [],
            currentImageIndex: 0
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }
    getFavorites(){
        let currentUser = {
            currentUser: this.props.state.view.currentUser
        }
        fetch('/api/favoriterecipes.php', 
            {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(currentUser)
            }
        )
        .then(res => res.json())
        .then(favoriteRecipes => {
            let imageArray =[];
            let recipeTitleArray = [];
            favoriteRecipes.map(recipe => {
                imageArray.push('images/' + recipe.image)
                recipeTitleArray.push(recipe.title);
            })
            this.setState({
                imageArray: imageArray,
                recipeTitleArray: recipeTitleArray
            })
        });
    }
    componentDidMount(){
        this.getFavorites();
    }
    previousSlide () {
        const lastIndex = this.state.imageArray.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
      }

    nextSlide () {
        const lastIndex = this.state.imageArray.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }
    render(){
        return (
            <div className="carousel container-fluid mx-auto row p-0 d-flex mb-0">
                <Arrow
                    direction="left"
                    clickFunction={ this.previousSlide }
                    glyph="&#9664;" />

                    <div className="img-title-container p-0 mx-auto mb-0">
                        <ImageSlide url={this.state.imageArray[this.state.currentImageIndex]} />
                        {this.state.recipeTitleArray[this.state.currentImageIndex]}
                    </div>

                <Arrow
                    direction="right"
                    clickFunction={ this.nextSlide }
                    glyph="&#9654;" />
            </div>
        )
    }
}

const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div className="image-slide mx-auto px-0 mb-1" style={styles}></div>
    )
}

const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
      className={ `slide-arrow ${direction}` + " arrow arrow-pointer mx-auto px-0"}
      onClick={ clickFunction }>
      { glyph }
    </div>
  );