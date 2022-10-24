import React, {Component} from 'react';
import './add_form.scss';


class AddForm extends Component{

    /*
        DOCU: Initial values are null but eventually will be filled using onChange events from inputs.
        pet_type's value is "Pig" because it is the first option shown on the `select` input.
        If the user didn't chose an option, this will be the value for pet_type.
    */
    state = {
        pet_name: null,
        pet_type: "Pig",
        pet_description: null,
        pet_skills: [],
    }

    /** 
    *   DOCU: Method to add skills to the state.pet_skills array. <br>
    *   Triggered by the input elements' onChange event from line 69-71 <br>
    *   Last updated at: October 24, 2022
    *   @param {object} event Requires to get the input value from event.target.value.
    *   @param {number} index Requires to refer to specific index in the array (this is needed because it's using "onChange" to add value).
    *   @author Daniel
    */
    addSkill = (event, index) => {
        let skills = this.state.pet_skills; 
        skills[index] = event.target.value;
        this.setState({pet_skills: skills})
    }

    /** 
    *   DOCU: Method to submit form to json-server. <br>
    *   Triggered by the form's onSubmit event from line 56 <br>
    *   Last updated at: October 24, 2022
    *   @param {object} event Requires to call the preventDefault method to prevent the page to refresh.
    *   @author Daniel
    */
    handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:8000/pets", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        }).then(() => this.props.showToast()
        ).catch(error => console.log(error));
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="label_inputs">
                    <div className="input_group">
                        <label htmlFor="pet_name">Pet Name</label>
                        <input type="text" id="pet_name" onChange={(e)=>this.setState({pet_name: e.target.value})} />
                    </div>
                    <div className="input_group">
                        <label htmlFor="pet_type_select">Pet Type</label>
                        <select id="pet_type_select" defaultValue="Pig" onChange={(e)=>this.setState({pet_type: e.target.value})} >
                            <option value="Pig">Pig</option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                        </select>
                    </div>
                    <div className="input_group">
                        <label htmlFor="pet_description">Description</label>
                        <textarea id="pet_description" onChange={(e)=>this.setState({pet_description: e.target.value})} ></textarea>
                    </div>
                    <div className="input_group">
                        <label>Skills</label>
                        <div className="skill_set">
                            <input type="text" onChange={e=>this.addSkill(e, 0)} />    
                            <input type="text" onChange={e=>this.addSkill(e, 1)} />    
                            <input type="text" onChange={e=>this.addSkill(e, 2)} />    
                        </div>
                    </div>
                </div>
                <button type="submit"><span className="upload_icon"></span>Add Pet</button>
            </form>
        )
    }
}

export default AddForm;