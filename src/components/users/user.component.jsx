import React from 'react'
import './users.styles.scss'
import WithSpinner from '../../wrap'

const Users = ({data}) =>(
    <div className = 'users'>
        <h1 >Users</h1>
        { 
            data.map(
                user => 
                <div key={user.id}>
                    <h3 className ='name' >{user.name} <br/>{user.email}</h3> 
                </div>
            )    
        }
    </div>
)

export default WithSpinner(Users)