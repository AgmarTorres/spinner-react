import React from 'react'
import "./posts.styles.scss"

class Posts extends React.Component{
    state  = {
        posts: []
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => this.setState({posts: posts.slice(0,10)}))
    }

    render(){
        const  {posts} = this.state
        return(
            <div className = 'posts'>
                <h1>Posts</h1>
                {
                    posts.map(post => <div key = {post.id} className={`title ${post.id % 2 === 0 ? 'green' : 'blue' }`} > {post.title} </div>)
                }
            </div>
        )
    }
}

export default Posts