import React from 'react'

import './BlogsPosts.css';

function BlogPosts(props) {
    const { posts } = props;
    console.log(posts);
    return (
        <div className="posts">
            {
                posts.map((post) => <div> {post.text} </div>)
            }
        </div>
    )
}

export default BlogPosts