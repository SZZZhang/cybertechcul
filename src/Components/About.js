import React, {Component} from 'react';
import Toolbar from './Toolbar/Toolbar';


class About extends Component{
    render(){
        return(
            <div className="About">
                <Toolbar fade={false} />
                <h1>about</h1>

            </div>
        );
    }
}
export default About;