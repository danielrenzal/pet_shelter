import React, {Component} from 'react';
import {Link}             from 'react-router-dom';
import DetailsModal       from './details_modal';
import './pet_listing.scss';


class PetListing extends Component{

    /** show_modal: for toggling the modal by the `details` button
     *  pets: to be filled by an array of all pets' infos
     *  single_pet_info: info of a specific pet that will be viewed on the details modal */
    state = {
        show_modal: false,
        pets: null,
        single_pet_info: null
    }

    /** method to close modal */
    handleCloseModal = () => {
        this.setState({show_modal: false});
    }

    /** method to fetch all pets then save to state.pets */
    handleFetchPets = async () => {
        const response = await fetch("http://localhost:8000/pets");
        const data = await response.json();

        this.setState({pets: data});
    }

    componentDidMount = () => {
        this.handleFetchPets();
    }

    render(){
        const {pets} = this.state;

        return(
            <div className="pet_listing">
                <p>These pets are looking for a good home</p>
                <ul>
                    {
                        pets &&
                        pets.map(pet  => (
                            <li key={pet.id}>
                                <span className="name">{pet.pet_name}</span>
                                <span className="type">{pet.pet_type}</span>
                                <span className="details_edit">
                                    <button className="details" onClick={()=>this.setState({show_modal: true, single_pet_info: pet})}>
                                        <span className="details_icon"></span>Details
                                    </button>
                                    <Link to={{
                                        pathname: "edit", 
                                        state: {id: pet.id}
                                    }} className="edit"><span className="edit_icon"></span>Edit</Link>
                                </span>
                            </li>
                        ))
                    }
                </ul>
                {
                    this.state.show_modal &&
                    <DetailsModal
                        showModal={this.state.show_modal}
                        handleCloseModal={this.handleCloseModal}
                        pet_info={this.state.single_pet_info}
                    />
                }
            </div>
        )
    }
}

export default PetListing;