import { Component } from "react";

////Functional Component
// const ProfileComponent = () => {
//     return (
//         <div>
//             <h3>Name : Punuru Sowmya Reddy</h3>
//         </div>
//     );
// }



////Same as above but with classes
class ProfileComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            email : "punuru.sowmya@gmail.com",
            phone: "8976658870"
        };
    }
    render(){
        return (
        <div>
            <h3>Name : {this.props.name}</h3>
            <h3>email : {this.state.email}</h3>
            <h3>Phone Number : {this.state.phone}</h3>
        </div>
    );
    }
}

export default ProfileComponent;