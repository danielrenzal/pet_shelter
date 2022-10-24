import React, {Component} from 'react';
import BannerImg from '../images/banner.png';
import './banner.scss';


class Banner extends Component{
    render(){
        return(
            <div className="banner">
                <section className="banner_texts">
                    <h1>
                        <span>Let's </span>
                        <span className="text_orange">Adopt </span>
                        <span>Don't </span>
                        <span className="text_grey">Shop </span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque id lorem nisi.</p>
                </section>
                <img src={BannerImg} alt="a cat and a dog" />
            </div>
        )
    }
}

export default Banner;