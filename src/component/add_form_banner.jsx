import React, {Component} from 'react';
import SecondaryBanner from '../images/secondary_banner.png';
import './add_form_banner.scss';


class AddFormBanner extends Component{
    render(){
        return(
            <div className="add_form_banner">
                {/* texts are placed inside a container to separate them from the image and apply 'display: flex' to the `add_form_banner` */}
                <section className="add_form_banner_texts">
                    <h1>Know a pet that needs a home?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque id lorem nisi.</p>
                </section>
                <img src={SecondaryBanner} alt="a puppy" />
            </div>
        )
    }
}

export default AddFormBanner;