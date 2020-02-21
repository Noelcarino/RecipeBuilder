import React from 'react';
import './css/modal.css';

export default class Modal extends React.Component {
    render(){
        return (
            <div className="modal-container">
                <div className={"modal-message-container d-flex " + this.props.modalBackground}>
                    <div className="container-fluid m-auto">
                        {this.props.messageStatus}
                        <br/><br/>
                        Return home to view all the recipes you loved!
                    </div>
                </div>
            </div>
        )
    }
}