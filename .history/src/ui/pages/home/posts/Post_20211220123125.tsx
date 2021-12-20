import { GetUserType } from "core/store/reducers/usersReducer";
import React, { FC, useEffect, useState } from "react";
import PostModal from "ui/components/postModal/postModal";
import style from "./Post.module.scss";
import UserPhoto from 'public/images/withoutphoto.png'
import Profile from "ui/pages/profile/profileContent/Profile";
import { AccountType, GetAccountType, GetAllComments, GetAllPostsType, GetSinglePostType } from "core/store/api/api";
import { Link } from "react-router-dom";
import Preloader from "ui/components/common/Preloader";


interface PostType {
    profile?: GetAccountType
    isLoading: boolean
    post: GetAllPostsType
    comments: Array<GetAllComments>
    singlePosts: Array<GetSinglePostType>
    getAllComments: (postId: number) => void
    editProfile: (account: AccountType) => void
    getProfileUser: (username: string) => void
    likePost: (postId: number, like: number) => void
    removelikePost: (postId: number, like: number) => void
    getPost: (postId: number) => void
    getPostsOfSingleUser: (username: string) => void
}

const Post: FC<PostType> = ({ post, isLoading,
    profile, comments, singlePosts,
    editProfile, likePost,
    removelikePost, getProfileUser,
    getAllComments, getPost,
    getPostsOfSingleUser
}) => {

    const OpenPost = () => {
        setIsModal(true);
        getPost(post.id)
        console.log('POST ID', post.id)
    }


    let username = post.author.username;
    const TakeUser = () => {
        getProfileUser(username)
        getPostsOfSingleUser(username)
        console.log("Username:", username)
        console.log('SinglePost:', singlePosts)
    }
    const [isModal, setIsModal] = useState(false)
    return (
        <div key={post.id} className={style.postItem}>
            {isLoading ? <Preloader /> : null}
            <div className={style.header}>
                <div className={style.leftHeader}>
                    <Link to={`/user/${username}`}>
                        <img onClick={TakeUser} width={40} src={post.author.profile_photo_url !== null ? post.author.profile_photo_url : UserPhoto} alt="postHeader" />
                    </Link>
                    <div className={style.content_info}>
                        <p className={style.username}> {post.author.username} </p>
                        <p className={style.status}>{post.created_at} </p>
                    </div>
                </div>

                <div className={style.rightHeader}>
                    <button className={style.btnedit}>
                        <i className="fas fa-ellipsis-v"></i>
                    </button>
                </div>

            </div>

            <div className={style.mainImg}>
                {post.photos.map(photo => <img src={photo.url} width={560} onClick={OpenPost} alt="post" />)}
            </div>

            <div className={style.interaction}>
                <div className={style.leftInteracion}>
                    <div className={style.likes}>
                        {post.is_liked ? (<>
                            <i onClick={() => removelikePost(post.id, post.likes_count)} className={`${style.likeStyle} fas fa-heart`}></i>
                        </>
                        ) : (
                            <>
                                <i onClick={() => likePost(post.id, post.likes_count)} className={`fas fa-heart`} ></i>
                            </>
                        )}
                        <b>{post.likes_count}</b>
                    </div>
                    <div className={style.comments}>
                        <i className="far fa-comment"></i>
                        <b>{post.comments_count}</b>
                    </div>
                </div>

                <div className={style.rightIneraction}>
                    <button  >Share<i className="sharearrow fas fa-arrow-right"></i></button>
                </div>
            </div>

            <div className={style.text}>
                <p>{post.description}</p>
            </div>

            {isModal && (
                <PostModal
                    getAllComments={getAllComments}
                    closeModal={setIsModal}
                    post={post}
                    comments={comments}
                    likePost={likePost}
                    removelikePost={removelikePost}
                />
            )}

        </div>

    )
}

export default Post;