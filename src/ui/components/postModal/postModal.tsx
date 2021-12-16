import React, { FC, useEffect, useState } from "react";
import style from "./PostModal.module.scss";
import comment1 from "public/images/story/story2.png";
import comment2 from "public/images/story/story3.png";
import myphoto from "public/images/MiniProf/header__ava.png"
import { GetAllComments, GetAllPostsType } from "core/store/api/api";
import UserPhoto from 'public/images/withoutphoto.png'

type PropsPostsModal = {
    closeModal: any;
    post: GetAllPostsType;
    comments: Array<GetAllComments>;
    getAllComments: (postId: number) => void
    likePost: (postId: number, like: number) => void
    removelikePost: (postId: number, like: number) => void
}

type CommentBlockType = {
    post: GetAllPostsType
    comment: GetAllComments
    getAllComments: (postId: number) => void
}

const Comment: FC<CommentBlockType> = ({ post, comment, getAllComments }) => {
    useEffect(() => {
        getAllComments(comment.id)
        console.log(comment.id)
    }, [comment.id, getAllComments])
    return (
        <div className={style.commentsItems}>
            <div className={style.commentAvatar}>
                <img src={comment.commenter.profile_photo_url !== null ? comment.commenter.profile_photo_url : UserPhoto} width={40} alt="comentarAva" />
            </div>
            <div className={style.commentUserInfo}>
                <p className={style.commentMeesage}>{comment.message}</p>
                <p className={style.commentStatus}>{comment.created_at}</p>
            </div>
        </div>
    )
}

const PostModal: FC<PropsPostsModal> = ({ closeModal, post,
    likePost, removelikePost, getAllComments,
    comments }) => {
    useEffect(() => {
        getAllComments(post.id)
        console.log(post.id)
    }, [post.id, getAllComments])
    return (
        <div>

            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.postImgBlock}>
                        <img src={post.photos.url} className={style.postImg} alt="postimage" />
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
                            {comments.map(comment => <Comment
                                comment={comment}
                                getAllComments={getAllComments}
                                post={post}
                            />)}

                        </div>
                        <div className={style.commentfooter}>
                            <div className={style.commentLikes}>
                                {post.is_liked ? (
                                    <i onClick={() => removelikePost(post.id, post.likes_count)} className={`${style.likeStyle} fas fa-heart`}></i>
                                ) : (
                                    <i onClick={() => likePost(post.id, post.likes_count)} className={`fas fa-heart`} ></i>
                                )}
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

        </div>
    )
}
export default PostModal;