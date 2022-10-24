import React, {Component} from 'react';
import './add_form.scss';


class AddForm extends Component{

    /* initial values are null but eventually will be filled using onChange events from inputs.
       pet_type's value is "Pig" because it is the first option shown on the `select` input. If the user didn't chose an option, this will be the
       value for pet_type.*/
    state = {
        pet_name: null,
        pet_type: "Pig",
        pet_description: null,
        pet_skills: [],
    }

    /* method to add skills to the state.pet_skills array.
       parameters: event - to get the input value
                   index - to insert value to a specified index (this is needed because it's using "onChange" to add value)
    */
    addSkill = (event, index) => {
        let skills = this.state.pet_skills; 
        skills[index] = event.target.value;
        this.setState({pet_skills: skills})
    }

    /* method to submit the form */
    handleSubmit = (e) => {
        e.preventDefault();

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