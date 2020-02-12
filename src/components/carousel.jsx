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
            recipeTitleArray : [
                'Beef W/ Rice',
                'Braised Chicken w/ Steamed Veggies',
                'Herbed Chicken w/ Roasted Veggies',
                'Crockpot Chicken w/ Veggies'
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
            <div className="carousel mx-auto row p-0 d-flex border border-dark">
                <Arrow
                    direction="left"
                    clickFunction={ this.previousSlide }
                    glyph="&#9664;" />

                    <div className="img-title-container p-0 mx-auto">
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
        <div className="image-slide mx-auto px-0" style={styles}></div>
    )
}

const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
      className={ `slide-arrow ${direction}` + " arrow mx-auto px-0 border border-dark"}
      onClick={ clickFunction }>
      { glyph }
    </div>
  );