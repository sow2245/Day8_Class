import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { title } from '../Common/Constants.js';

////Functional Component
// const AboutUsComponent=()=>{
//     return(
//         <React.Fragment>
//             <h1>About Us</h1>
//             <h2>Our team name is {title}</h2>
//             <Outlet/>
//             <h3>Team Captain : Harshita Mangla</h3>
//             <h4>Team Size : 10</h4>
//             <h5>We all meet in Namaste React BootCamp</h5>
//             <h6>Host for BootCamp : Akshay</h6>
//         </React.Fragment>
//     );
// }

////Same as above but with classes
class AboutUsComponent extends  React.Component {
    constructor(props) {
        super(props);
        console.log("About Constructor"); //set1
    };
    componentDidMount(){
        console.log("About componentDidMount"); //set3
    };
    componentDidUpdate(){
        console.log("About componentDidUpdate"); //set 5
    };
    componentWillUnmount(){
        console.log("About componentWillUnmount"); //set 6
    };
    render(){
        console.log("About Render"); //set1
        return(
            <React.Fragment>
                <h1>About Us</h1>
                <h2>Our team name is {title}</h2>
                <Outlet/>
                <h3>Team Captain : Harshita Mangla</h3>
                <h4>Team Size : 10</h4>
                <h5>We all meet in Namaste React BootCamp</h5>
                <h5>Host for BootCamp : Akshay</h5>
            </React.Fragment>
        );      
    }
}

export default AboutUsComponent;