import React, {Component} from 'react';
import MainNav from './main_nav';
import Banner from './banner';
import PetListing from './pet_listing';


class Home extends Component{
    render(){
        return(
            <div>
                <MainNav/>
                <Banner/>
                <PetListing/>
            </div>
        )
    }
}

export default Home;