import React from 'react';
import '../css/letscook.css'; 

export default class LetsCook extends React.Component {
    render(){
        console.log(this.props);
        return (
            <div className="lets-cook-container">
                HERE IS WHAT WE ARE GOING TO COOK
            </div>
        )
    }
}