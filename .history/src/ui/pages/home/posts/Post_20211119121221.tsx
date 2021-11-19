import React, { useState } from "react";
import PostModal from "../../../components/postModal/postModal";
import post from "./Post.module.scss";


interface PostProp {
    post: PostData
}



interface PostData {
    id: string;
    username: string;
    postAva: string; postImg: string;
    postDescription: string;
    nav: string;
    status: string;
    likes: number | undefined;
    comments: number | undefined;
}



const Post = (props: PostProp) => {

    function Share() {
        alert('Share with ...')
    }

    function Edit() {
        alert('Edit')
    }

    const [isModal, setIsModal] = useState(false)
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

            <div className={post.mainImg}>
                <img width={560} onClick={() => setIsModal(true)} src={props.postImg} alt="post" />
            </div>

            <div className={post.interaction}>
                <div className={post.leftInteracion}>
                    <div className={post.likes}>
                        <i className="far fa-heart"></i>
                        <b>{props.likes}</b>
                    </div>
                    <div className={post.comments}>
                        <i className="far fa-comment"></i>
                        <b>{props.comments}</b>
                    </div>
                </div>

                <div className={post.rightIneraction}>
                    <button onClick={Share} >Share<i className="sharearrow fas fa-arrow-right"></i></button>
                </div>
            </div>

            <div className={post.text}>
                <p>{props.postDescription}</p>
            </div>

            {isModal && (
                <PostModal
                    closeModal={setIsModal}
                    postAva={props.postAva}
                    username={props.username}
                    postImg={props.postImg}
                    likes={props.likes}
                />
            )}

        </div>

    )
}

export default Post;