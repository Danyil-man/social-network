import React from "react";
import post from "./Post.module.scss";

interface PostData {
    id: string;
    username: string;
    postAva: string;
    postImg: string;
    postDescription: string;
    nav: string;
    status: string;
}



const Post = (props: PostData) => {

    function Share(){
        alert('Share with ...')
    }

    function Edit(){
        alert('Edit')
    }

    return (
        <div className={post.postItem}>
            <div className={post.header}>
                <div className={post.leftHeader}>
                    <img width={40} src={props.postAva} alt="postHeader" />
                    <div className={post.content_info}>
                    <p className={post.username}> {props.username} </p>
                    <p className={post.status}>{props.status}</p>
                    </div>
                </div>

                <div className={post.rightHeader}>
                <button className={post.btnedit} onClick={Edit}>
                    <i className="fas fa-ellipsis-v"></i>
                </button>
                </div>
                
            </div>
            
            <img onClick={alert('modal')} src={props.postImg} alt="post"/>
            
            <div className={post.interaction}>
                <div className={post.leftInteracion}>
                <div className={post.likes}>
                    <i className="far fa-heart"></i>
                    <b>439</b>
                </div>
                <div className={post.comments}>
                <i className="far fa-comment"></i>
                <b>34</b>
                </div>
                </div>

                <div className={post.rightIneraction}>
                    <button onClick={Share} >Share<i className="sharearrow fas fa-arrow-right"></i></button>
                </div>
            </div>

            <div className={post.text}>
                <p>{props.postDescription}</p>
            </div>

            <form className={post.commentsPost}>
                <input className={post.inputPost} placeholder="Add a comment..." type="text" />
                <button>Post</button>
            </form>

        </div>

    )
}

export default Post;