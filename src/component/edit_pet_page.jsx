import React, {Component} from 'react';
import SecondaryNav       from './secondary_nav';
import EditForm           from './edit_form';
import ConfirmationToast  from './confirmation_toast';


class EditPetPage extends Component{

    /** pet_info's initial value is null but will be filled by the fetchPetInfo method eventually */
    state = {
        pet_info: null,
        show_toast: false
    }

    /** 
    *   DOCU: Method to fetch specific pet information then set it to state.pet_info <br>
    *   Triggered by this.componentDidMount on line 30 <br>
    *   Last updated at: October 24, 2022
    *   @param {number} id Requires to fetch pet specific info.
    *   @author Daniel
    */
    fetchPetInfo = async (id) => {
        const response = await fetch("http://localhost:8000/pets/"+id);
        const data = await response.json();
        
        this.setState({pet_info: data});

    }

    componentDidMount = () => {
        this.fetchPetInfo(this.props.location.state.id);
    }

    render(){
        const {pet_info} = this.state;
        return(
            <div className="edit_page">
                <SecondaryNav/>
                {
                    pet_info &&
                    <EditForm pet_info={pet_info} showToast={()=>this.setState({show_toast: true})} />
                }
                <ConfirmationToast
                    showToast={this.state.show_toast}
                    hideToast={()=>this.setState({show_toast: false})}
                    message="Saved Changes"
                />
            </div>
        )
    }
}

export default EditPetPage;