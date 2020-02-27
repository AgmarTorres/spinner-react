import React from 'react'
import WithSpinner from '../../wrap'
import "./posts.styles.scss"

const  Posts = ({data}) =>(
    
    <div className = 'posts'>
        <h1>Posts</h1>
        {
            data.map(post => <div key = {post.id} className={`title ${post.id % 2 === 0 ? 'green' : 'blue' }`} > {post.title} </div>)
        }
    </div>
)

export default WithSpinner(Posts)