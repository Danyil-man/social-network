import React from "react";
import Post from "./Post";
import posts from "./Posts.module.scss";
import item1 from "../../../../public/images/story/story1.png";
import item2 from "../../../../public/images/story/story2.png";
//import item3 from "../../../../public/images/story/story3.png";
import post1 from "../../../../public/images/posts/post1.jpg";
import nav from "../../../../public/images/posts/navPost.png";

interface PostsProps {

}

const Post_data = [
    {
        id: '1',
        username: 'Alex',
        postAva: item1,
        postImg: post1,
        postDescription: "Rainy day",
        nav: nav,
        status: 'Just now'
    },
    {
        id: '2',
        username: 'Katya',
        postAva: item2,
        postImg: post1,
        postDescription: "Rainy day",
        nav: nav,
        status: '12 min'
    },

]

const Posts = (props: PostsProps) => {
    return (
        <div className={posts.wrapper}>
            {Post_data.map(post =>
                <Post
                    id={post.id}
                    username={post.username}
                    postAva={post.postAva}
                    postImg={post.postImg}
                    postDescription={post.postDescription}
                    nav={post.nav}
                    status={post.status}

                />)}

        </div>
    )
}

export default Posts;