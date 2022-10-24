import React, {Component} from 'react';
import Toast              from 'react-bootstrap/Toast';
import ToastContainer     from 'react-bootstrap/ToastContainer';
import './confirmation_toast.scss';


class ConfirmationToast extends Component{
    render(){
        const {showToast, hideToast, message} = this.props;

        return(
            <ToastContainer position="bottom-end">
                <Toast show={showToast} onClose={hideToast} autohide>
                    <Toast.Body><span className="check_icon"></span>{message}</Toast.Body>
                </Toast>
            </ToastContainer>
        )
    }
}

export default ConfirmationToast;