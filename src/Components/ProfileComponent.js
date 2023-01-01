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
            userInfo:{
                company : "test company",
                location : "test location"
            }
        };
        console.log("Profile Constructor"); //set1
    };
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/sow2245");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json
        });
        console.log("Profile componentDidMount"); //set2
    };
    async componentDidUpdate(prevProps,prevState){
        console.log("Profile componentDidUpdate"); //
        if((this.state.userInfo.company != undefined && prevState.userInfo.company !== this.state.userInfo.company)){
            console.log(prevState.userInfo.company);
            console.log(this.state.userInfo.company);
            this.setState({userInfo: {avatar_url:this.state.userInfo.avatar_url,company:this.state.userInfo.company, location:this.state.userInfo.location + " (Current Work Location)"}});
        }
        // if(prevProps.name != this.state.userInfo.company ){
        //     this.setState({
        //         userInfo : {company} = this.state.userInfo.company
        //     });
        // }
    };
    render(){        
        console.log("Profile render"); //set1
        return (
        <div>
            <h3>Name : {this.props.name}</h3>
            <h3>Company : {this.state.userInfo.company}</h3>
            <h3>Location : {this.state.userInfo.location}</h3>
            <img src={this.state.userInfo.avatar_url} alt="yet to load image"/>
        </div>
    );
    }
}

export default ProfileComponent;