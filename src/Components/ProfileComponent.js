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
    render(){
        return (
        <div>
            <h3>Name : {this.props.name}</h3>
        </div>
    );
    }
}

export default ProfileComponent;