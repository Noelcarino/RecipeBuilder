import React from 'react';

export default class Carousel extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            imageArray: [
                require("../images/beefwithrice.jpg"),
                require("../images/braisedchickenwithsteamedveggies.png"),
                require("../images/herbedchickenwithroastedveggies.png"),
                require("../images/crockpotchickenwithveggies.png"),
            ],
            currentImageIndex: 0
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
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
            <div className="carousel">
                <Arrow
                    direction="left"
                    clickFunction={ this.previousSlide }
                    glyph="&#9664;" />

                <ImageSlide url={this.state.imageArray[this.state.currentImageIndex]} />

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
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div className="image-slide" style={styles}></div>
    )
}

const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
      className={ `slide-arrow ${direction}` }
      onClick={ clickFunction }>
      { glyph }
    </div>
  );