import React, {Component} from 'react';
import SecondaryNav       from './secondary_nav';
import AddFormBanner      from './add_form_banner';
import AddForm            from './add_form';
import ConfirmationToast  from './confirmation_toast';


class AddPetPage extends Component{
    state = {
        show_toast: false
    }

    /** method to toggle toast */
    showToast = () => {
        this.setState({show_toast: true});
    }

    render(){
        return(
            <div className="add_pet_page">
                <SecondaryNav/>
                <AddFormBanner/>
                <AddForm showToast={this.showToast}/>
                <ConfirmationToast
                    showToast={this.state.show_toast}
                    hideToast={()=>this.setState({show_toast: false})}
                    message="Pet Added"
                />
            </div>
        )
    }
}

export default AddPetPage;