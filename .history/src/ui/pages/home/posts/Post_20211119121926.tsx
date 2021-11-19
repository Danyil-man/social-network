import React, { useState } from "react";
import PostModal from "../../../components/postModal/postModal";
import style from "./Post.module.scss";


interface PostProp {
    post: PostData
}



interface PostData {
    username: string;
    postAva: string;
    postImg: string;
    postDescription: string;
    status: string;
    likes: number | undefined;
    comments: number | undefined;
}



const Post = ({ post }: PostProp) => {

    function Share() {
        alert('Share with ...')
    }

    function Edit() {
        alert('Edit')
    }

    const {
        username,
        postAva,
        postImg,
        postDescription,
        status,
        likes,
        comments,

    } = post;

    const [isModal, setIsModal] = useState(false)
    return (
        <div className={style.postItem}>
            <div className={style.header}>
                <div className={style.leftHeader}>
                    <img width={40} src={postAva} alt="postHeader" />
                    <div className={style.content_info}>
                        <p className={post.username}> {username} </p>
                        <p className={post.status}>{status}</p>
                    </div>
                </div>

                <div className={style.rightHeader}>
                    <button className={style.btnedit} onClick={Edit}>
                        <i className="fas fa-ellipsis-v"></i>
                    </button>
                </div>

            </div>

            <div className={style.mainImg}>
                <img width={560} onClick={() => setIsModal(true)} src={postImg} alt="post" />
            </div>

            <div className={style.interaction}>
                <div className={style.leftInteracion}>
                    <div className={style.likes}>
                        <i className="far fa-heart"></i>
                        <b>{likes}</b>
                    </div>
                    <div className={style.comments}>
                        <i className="far fa-comment"></i>
                        <b>{comments}</b>
                    </div>
                </div>

                <div className={style.rightIneraction}>
                    <button onClick={Share} >Share<i className="sharearrow fas fa-arrow-right"></i></button>
                </div>
            </div>

            <div className={style.text}>
                <p>{postDescription}</p>
            </div>

            {isModal && (
                <PostModal
                    closeModal={setIsModal}
                    postAva={postAva}
                    username={username}
                    postImg={postImg}
                    likes={likes}
                />
            )}

        </div>

    )
}

export default Post;