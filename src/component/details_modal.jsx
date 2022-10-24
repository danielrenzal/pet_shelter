import React, {Component} from 'react';
import Modal              from 'react-bootstrap/Modal';
import './details_modal.scss';


class DetailsModal extends Component{

    /** variables to modify the like button once clicked */
    state = {
        status: "Like",
        status_icon: "heart_icon",
        like_count: 0
    }

    /** 
    *   DOCU: Method to change the state when a user clicked the like button. <br>
    *   Triggered by a button element from line 59 <br>
    *   Last updated at: October 24, 2022
    *   @author Daniel
    */
    likePet = () => {
        this.setState({status: "Liked", status_icon: "check_icon", like_count: 1});
    }


    render(){
        const {status, status_icon, like_count} = this.state;
        const {showModal, handleCloseModal, pet_info: {pet_name, pet_type, pet_description, pet_skills}} = this.props

        return(
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Details About: {pet_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="info_row">
                        <span className="label">Pet Type</span>
                        <span className="value">{pet_type}</span>
                    </div>
                    <div className="info_row">
                        <span className="label">Description</span>
                        <span className="value">{pet_description}</span>
                    </div>
                    <div className="info_row">
                        <span className="label">Skills</span>
                        <span className="value">
                            {pet_skills[0]} 
                            <span className="bullet">&#x2022;</span> 
                            {pet_skills[1]} 
                            <span className="bullet">&#x2022;</span> 
                            {pet_skills[2]}
                        </span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <span className="likes_count">{like_count}  Likes</span>
                    <button className="like_btn" onClick={this.likePet}>
                        <span className={status_icon}></span>{status} Garfield
                    </button>
                    <button className="adopt_btn">
                        <span className="home_icon"></span>Adopt Garfield
                    </button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default DetailsModal;