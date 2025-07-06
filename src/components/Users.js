import { Component } from 'react'; // useState මෙතන අවශ්‍ය නැහැ, මොකද Class Component එකක් නිසා
import User from './User';

import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component {

  constructor(props) {
   
    super(props); 
    this.state = {
      showUsers: true
    };
  }


  toggleUsersHandler = () => { 
    this.setState((curState) => {
      return { showUsers: !curState.showUsers }
    });
  }

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler}> 
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;