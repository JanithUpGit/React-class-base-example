import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {

    static contextType = UsersContext;

    constructor() {
        super();
        this.state = {
            filteredUsers: DUMMY_USERS,
            searchTerm: ''
        };
    }

    componentDidMount(){
        this.setState({filteredUsers: this.context.users});
    }



    componentDidUpdate(prevProps, prevState) {
        
        if (prevState.searchTerm !== this.state.searchTerm) {

            this.setState({
                filteredUsers: DUMMY_USERS.filter((user) =>
                    user.name.includes(this.state.searchTerm)
                ),
            });

        }
    }


    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        return (
            <Fragment>
                
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <Users users={this.state.filteredUsers} />
            </Fragment>
        );

    }
}



export default UserFinder;