import React, {Component} from 'react';
import {Link}             from 'react-router-dom';
import './main_nav.scss';


class MainNav extends Component{
    render(){
        return(
            <nav className="main_nav">
                <p className="brand_name">petshelter</p>
                <ul className="nav_links">
                    <li><a href="#home" className="active">Home</a></li>
                    <li><a href="#service">Services</a></li>
                    <li><a href="#events">Events</a></li>
                    <li><Link to="/add" className="add_pet_btn"><span className="add_icon"></span>Add pet to Shelter</Link></li>
                </ul> 
            </nav>
        )
    }
}

export default MainNav;