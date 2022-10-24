import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './secondary_nav.scss';


class SecondaryNav extends Component{
    render(){
        return(
            <nav>
                <Link to="/" className="back_btn"><span className="back_icon"></span>Back to Home</Link>
                <p className="brand_name">petshelter</p>
                <Link to="/add" className="add_pet_btn"><span className="add_icon"></span>Add pet to Shelter</Link>
            </nav>
        )
    }
}

export default SecondaryNav;