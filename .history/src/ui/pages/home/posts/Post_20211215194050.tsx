import { GetUserType } from "core/store/reducers/usersReducer";
import React, { FC, useEffect, useState } from "react";
import PostModal from "ui/components/postModal/postModal";
import style from "./Post.module.scss";
import UserPhoto from 'public/images/withoutphoto.png'
import Profile from "ui/pages/profile/profileContent/Profile";
import { AccountType, GetAccountType, GetAllPostsType } from "core/store/api/api";
import { Link } from "react-router-dom";
import Preloader from "ui/components/common/Preloader";


interface PostType {
    profile?: GetAccountType
    isLoading: boolean
    post: GetAllPostsType
    editProfile: (account: AccountType) => void
    getProfileUser: (username: string) => void
    likePost: (postId: number) => void
    removelikePost: (postId: number) => void
}

const Post: FC<PostType> = ({ post, isLoading,
    profile, getProfileUser,
    editProfile, likePost, removelikePost }) => {

    function Share() {
        alert('Share with ...')
    }

    function Edit() {
        alert('Edit')
    }
    const username = post.author.username;
    const TakeUser = () => {
        getProfileUser(username)
        console.log("Username:", username)
    }

    const [likesSetter, setLikeSetter] = useState({})

    useEffect(() => {
        setLikeSetter(() => removelikePost(post.id))
    }, [])

    console.log('PostItem', post)
    const [isModal, setIsModal] = useState(false)
    return (
        <div className={style.postItem}>
            {isLoading ? <Preloader /> : null}
            <div className={style.header}>
                <div className={style.leftHeader}>
                    <Link to={`/profile/${username}`}>
                        <img onClick={TakeUser} width={40} src={post.author.profile_photo_url !== null ? post.author.profile_photo_url : UserPhoto} alt="postHeader" />
                    </Link>
                    <div className={style.content_info}>
                        <p className={style.username}> {post.author.username} </p>
                        <p className={style.status}>{post.created_at} </p>
                    </div>
                </div>

                <div className={style.rightHeader}>
                    <button className={style.btnedit} onClick={Edit}>
                        <i className="fas fa-ellipsis-v"></i>
                    </button>
                </div>

            </div>

            <div className={style.mainImg}>

                <img key={post.photos.id} src={post.photos.url} width={560} onClick={() => setIsModal(true)} alt="post" />
            </div>

            <div className={style.interaction}>
                <div className={style.leftInteracion}>
                    <div className={style.likes}>
                        {post.is_liked ? (
                            <i onClick={() => removelikePost(post.id)} className={`${style.likeStyle} fas fa-heart`}></i>
                        ) : (
                            <i onClick={() => likePost(post.id)} className={`fas fa-heart`} ></i>
                        )}
                        <b>{post.likes_count}</b>
                    </div>
                    <div className={style.comments}>
                        <i className="far fa-comment"></i>
                        <b>{post.comments_count}</b>
                    </div>
                </div>

                <div className={style.rightIneraction}>
                    <button onClick={Share} >Share<i className="sharearrow fas fa-arrow-right"></i></button>
                </div>
            </div>

            <div className={style.text}>
                <p>{post.description}</p>
            </div>

            {isModal && (
                <PostModal
                    closeModal={setIsModal}
                    post={post}
                    likePost={likePost}
                    removelikePost={removelikePost}
                />
            )}

        </div>

    )
}

export default Post;