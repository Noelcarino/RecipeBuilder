import React from 'react';
import './css/modal.css';

export default class Modal extends React.Component {
    render(){
        return (
            <div className="modal-container">
                {this.props.messageStatus}
            </div>
        )
    }
}