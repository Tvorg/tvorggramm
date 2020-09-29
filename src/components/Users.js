import React, {Component} from "react";
import User from "./User";
import InstaService from "../services/instaService";
import ErrorMessage from "./Error";
import Loading from "./Loading";


export default class Users extends Component {

    InstaService = new InstaService();
    state = {
        users: [],
        error: false
    }
    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.InstaService.getAllUsers()
            .then(this.onUsersLoaded)
            .catch(this.onError);
    }

    onUsersLoaded = (users) => {
        this.setState({
            users,
            error: false
        });
        console.log(this.state.users);
    }
    onError = () => {
        this.setState({
            error: true
        })
    }

    render() {
        const {users} =  this.state;
        return (
            users.length > 0 ?
                <div className="right">
                        <User
                            src="../gs_ignat.jpg"
                            alt="photo"
                            name="gs_ignat"/>

                    <div className="users__block">
                        {users.map(({name, altname, photo, id}) => (
                            <User
                                key={id}
                                src={photo}
                                alt={altname}
                                name={name}
                                min />

                        ))}
                    </div>
                </div> :
                <Loading />
        );
    }
}