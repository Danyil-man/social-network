import React, { FC, useState } from "react";
import style from "./PostModal.module.scss";
import comment1 from "public/images/story/story2.png";
import comment2 from "public/images/story/story3.png";
import myphoto from "public/images/MiniProf/header__ava.png"

interface PropsPostsModal {
    closeModal: any;
    postAva: string;
    username: string;
    postImg: string;
    likes: number | undefined;
}

interface PropsComment {
    comment__avatar: string;
    comment__message: string;
    comment__status: string;
}

let comment_data = [
    {
        comment__avatar: myphoto,
        comment__message: 'Cool image and gret shot',
        comment__status: '1 min'
    },
    {
        comment__avatar: comment1,
        comment__message: 'Pretty cool photo, I left you a message in private messages, waiting for a response)',
        comment__status: '12 min'
    },
    {
        comment__avatar: comment2,
        comment__message: 'Nice!',
        comment__status: '15 min'
    },

    {
        comment__avatar: comment2,
        comment__message: 'Nice!',
        comment__status: '15 min'
    },

    {
        comment__avatar: comment2,
        comment__message: 'Nice!',
        comment__status: '15 min'
    },
    {
        comment__avatar: comment2,
        comment__message: 'Nice!',
        comment__status: '15 min'
    },
    {
        comment__avatar: comment2,
        comment__message: 'Nice!',
        comment__status: '15 min'
    },
    {
        comment__avatar: comment2,
        comment__message: 'Nice!',
        comment__status: '15 min'
    },
    {
        comment__avatar: comment2,
        comment__message: 'Nice!',
        comment__status: '15 min'
    },


]

const Comment = (props: PropsComment) => {
    return (
        <div className={style.commentsItems}>
            <div className={style.commentAvatar}>
                <img width={40} src={props.comment__avatar} alt="" />
            </div>
            <div className={style.commentUserInfo}>
                <p className={style.commentMeesage}>{props.comment__message}</p>
                <p className={style.commentStatus}>{props.comment__status}</p>
            </div>
        </div>
    )
}

const PostModal: FC<PropsPostsModal> = ({ closeModal, postAva, username, postImg, likes }) => {
    const [isModal, setIsModal] = useState(true);

    return (
        <div>
            {isModal && (
                <div className={style.wrapper}>
                    <div className={style.container}>
                        <div className={style.postImgBlock}>
                            <img className={style.postImg} src={postImg} alt="postimage" />
                        </div>
                        <div className={style.interaction}>
                            <div className={style.header}>
                                <div className={style.userInfo}>
                                    <img width={40} src={postAva} alt="avatar" />
                                    <p>{username}</p>
                                </div>
                                <div className={style.CloseBtn}>
                                    <button className={style.titleCloseBtn} onClick={() => closeModal(false)}> <i className="far fa-times-circle"></i> </button>
                                </div>
                            </div>

                            <div className={style.commentsBlock}>
                                {comment_data.map(comment => <Comment
                                    comment__avatar={comment.comment__avatar}
                                    comment__message={comment.comment__message}
                                    comment__status={comment.comment__status}

                                />)
                                }
                            </div>
                            <div className={style.commentfooter}>
                                <div className={style.commentLikes}>
                                    <i className="far fa-heart"></i>
                                    <b>{likes}</b>
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