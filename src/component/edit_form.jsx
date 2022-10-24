import React, {Component} from 'react';
import './edit_form.scss';


class EditForm extends Component{

    /** passing props.pet_info to the state */
    constructor(props){
        super(props);
        this.state = props.pet_info;
    }

    /** 
    *   DOCU: Method to add skills to the state.pet_skills array. <br>
    *   Triggered by the input elements' onChange event from line 62 <br>
    *   Last updated at: October 24, 2022
    *   @param {object} event Requires to get the input value from event.target.value.
    *   @param {number} index Requires to refer to specific index in the array (this is needed because it's using "onChange" to add value).
    *   @author Daniel
    */
    addSkill = (event, index) => {
        let skills = this.state.pet_skills;
        skills[index] = event.target.value;
        this.setState({pet_skills: skills});
    }

    /** 
    *   DOCU: Method to submit form to json-server. <br>
    *   Triggered by the form's onSubmit event from line 48 <br>
    *   Last updated at: October 24, 2022
    *   @param {object} event Requires to call the preventDefault method to prevent the page to refresh.
    *   @author Daniel
    */
    handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:8000/pets/"+this.state.id, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        }).then(() => this.props.showToast())
        .catch(error => console.log(error))
    }

    render(){
        const {pet_name, pet_type, pet_description, pet_skills} = this.props.pet_info;
        return(
            <form className="edit_form" onSubmit={this.handleSubmit}>
                <p>Edit Details: {pet_name}</p>
                <div className="label_inputs">
                    <div className="input_group">
                        <label htmlFor="pet_type">Pet Type</label>
                        <select id="pet_type" defaultValue={pet_type} onChange={(e)=>this.setState({pet_type: e.target.value})}>
                            <option value="Pig">Pig</option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                        </select>
                    </div>
                    <div className="input_group">
                        <label htmlFor="pet_description">Description</label>
                        <textarea id="pet_description" onChange={(e)=>this.setState({pet_description: e.target.value})} defaultValue={pet_description}></textarea>
                    </div>
                    <div className="input_group">
                        <label>Skills</label>
                        <div className="skill_set">
                            {
                                pet_skills.map((skill, index) => (
                                    <input type="text" onChange={e=>this.addSkill(e, index)} defaultValue={skill} />  
                                ))
                            }
                        </div>
                    </div>
                </div>
                <button type="submit"><span className="save_icon"></span>Save Changes</button>
            </form>
        )
    }
}

export default EditForm;