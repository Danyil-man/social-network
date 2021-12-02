import React from "react";
import Post from "./Post";
import style from "./Posts.module.scss";
import item1 from "public/images/story/story1.png";
import item2 from "public/images/story/story2.png";
//import item3 from "public/images/story/story3.png";
import post1 from "public/images/posts/post1.jpg";
import nav from "public/images/posts/navPost.png";

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
        status: 'Just now',
        likes: 439,
        comments: 34,
    },
    {
        id: '2',
        username: 'Katya',
        postAva: item2,
        postImg: post1,
        postDescription: "Snowly",
        nav: nav,
        status: '12 min',
        likes: 139,
        comments: 14,
    },
    {
        id: '3',
        username: 'Katya',
        postAva: item2,
        postImg: post1,
        postDescription: "Snowly",
        nav: nav,
        status: '12 min',
        likes: 139,
        comments: 14,
    },

]

const Posts = (props: PostsProps) => {
    return (
        <div className={style.wrapper}>
            {Post_data.map(post =>
                <Post
                    post={post}
                // id={post.id}
                // username={post.username}
                // postAva={post.postAva}
                // postImg={post.postImg}
                // postDescription={post.postDescription}
                // nav={post.nav}
                // status={post.status}
                // likes={post.likes}
                // comments={post.comments}
                />)}

        </div>
    )
}

export default Posts;