import React, {Component} from 'react';
import './footer.scss';


class Footer extends Component{
    render(){
        return(
            <footer>
                <span className="copyright">&copy;</span>2020. <span  className="text_orange">V88Studios.</span> All Rights Reserved
            </footer>
        )
    }
}

export default Footer;