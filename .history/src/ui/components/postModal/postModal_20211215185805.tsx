import React, { FC, useState } from "react";
import style from "./PostModal.module.scss";
import comment1 from "public/images/story/story2.png";
import comment2 from "public/images/story/story3.png";
import myphoto from "public/images/MiniProf/header__ava.png"
import { GetAllPostsType } from "core/store/api/api";
import UserPhoto from 'public/images/withoutphoto.png'

type PropsPostsModal = {
    closeModal: any;
    post: GetAllPostsType
}

type CommentBlockType = {
    post: GetAllPostsType
}

const Comment: FC<CommentBlockType> = ({ post }) => {
    return (
        <div className={style.commentsItems}>
            <div className={style.commentAvatar}>
                <img width={40} alt="comentarAva" />
            </div>
            <div className={style.commentUserInfo}>
                <p className={style.commentMeesage}>Comment Message</p>
                <p className={style.commentStatus}>Comment Status</p>
            </div>
        </div>
    )
}

const PostModal: FC<PropsPostsModal> = ({ closeModal, post }) => {
    const [isModal, setIsModal] = useState(true);

    return (
        <div>
            {isModal && (
                <div className={style.wrapper}>
                    <div className={style.container}>
                        <div className={style.postImgBlock}>
                            <img className={style.postImg} alt="postimage" />
                        </div>
                        <div className={style.interaction}>
                            <div className={style.header}>
                                <div className={style.userInfo}>
                                    <img src={post.author.profile_photo_url !== null ? post.author.profile_photo_url : UserPhoto} width={40} alt="avatar" />
                                    <p>{post.author.username}</p>
                                </div>
                                <div className={style.CloseBtn}>
                                    <button className={style.titleCloseBtn} onClick={() => closeModal(false)}> <i className="far fa-times-circle"></i> </button>
                                </div>
                            </div>

                            <div className={style.commentsBlock}>
                                <Comment
                                    post={post}
                                />

                            </div>
                            <div className={style.commentfooter}>
                                <div className={style.commentLikes}>
                                    <i className="far fa-heart"></i>
                                    <b>{post.likes_count}</b>
                                </div>
                                <div className={style.comment__input}>
                                    <input placeholder="Add a comment..." />
                                    <button>Post</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default PostModal;