import React from 'react'
import './users.styles.scss'

class Users extends React.Component{
    state ={
        users: []
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({users: users},console.log(users)))
    }
    
    render(){
        const {users} = this.state

        return (
            <div className = 'users'>
                <h1 >Users</h1>
                { 
                    users.map(
                        user => 
                        <div key={user.id}>
                            <h3 className ='name' >{user.name} <br/>{user.email}</h3> 
                            
                        </div>
                    )    
                }
            </div>
        );
    }
}

export default Users