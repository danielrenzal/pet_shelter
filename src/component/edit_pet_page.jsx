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

    /** method to fetch specific pet information */
    fetchPetInfo = async (id) => {
        const response = await fetch("http://localhost:8000/pets/"+id);
        const data = await response.json();
        
        this.setState({pet_info: data});

    }

    componentDidMount = () => {
        this.fetchPetInfo(this.props.location.state.id);
    }

    /** method to toggle toast */
    showToast = () => {
        this.setState({show_toast: true});
    }

    render(){
        const {pet_info} = this.state;
        return(
            <div className="edit_page">
                <SecondaryNav/>
                {
                    pet_info &&
                    <EditForm pet_info={pet_info} showToast={this.showToast} />
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