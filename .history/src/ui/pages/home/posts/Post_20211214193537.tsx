import { GetUserType } from "core/store/reducers/usersReducer";
import React, { FC, useEffect, useState } from "react";
import PostModal from "ui/components/postModal/postModal";
import style from "./Post.module.scss";
import UserPhoto from 'public/images/withoutphoto.png'
import Profile from "ui/pages/profile/profileContent/Profile";
import { AccountType, GetAccountType, GetAllPostsType } from "core/store/api/api";
import { Link } from "react-router-dom";


interface PostType {
    user: GetUserType
    profile?: GetAccountType
    isLoading: boolean
    posts: Array<GetAllPostsType>
    post: GetAllPostsType
    //userData: GetUserType
    editProfile: (account: AccountType) => void
    getProfileUser: (username: string) => void
    userItem: GetUserType
}

const Post: FC<PostType> = ({ user, posts, isLoading, getProfileUser, editProfile }) => {

    function Share() {
        alert('Share with ...')
    }

    function Edit() {
        alert('Edit')
    }

    const TakeUser = () => {
        getProfileUser(user.username)
        console.log("Username:", user.username)
    }
    console.log('PostItem', posts, "User", user)
    const [isModal, setIsModal] = useState(false)
    return (
        <div className={style.postItem}>
            <div className={style.header}>
                <div className={style.leftHeader}>
                    <Link to={`/profile`}>
                        <img onClick={TakeUser} width={40} src={user.profile_photo_url !== null ? user.profile_photo_url : UserPhoto} alt="postHeader" />
                    </Link>
                    <div className={style.content_info}>
                        <p className={style.username}> {user.username} </p>
                        <p className={style.status}></p>
                    </div>
                </div>

                <div className={style.rightHeader}>
                    <button className={style.btnedit} onClick={Edit}>
                        <i className="fas fa-ellipsis-v"></i>
                    </button>
                </div>

            </div>

            <div className={style.mainImg}>
                {/* {posts.map(post => <p>{post.author}</p>)} */}
                {/* <img src={postsItem.photos.url} width={560} onClick={() => setIsModal(true)} alt="post" /> */}
            </div>
            <div>
                {posts.map(post => <p>{post.id}</p>)}
            </div>

            <div className={style.interaction}>
                <div className={style.leftInteracion}>
                    <div className={style.likes}>
                        <i className="far fa-heart"></i>
                        <b>API Likes</b>
                    </div>
                    <div className={style.comments}>
                        <i className="far fa-comment"></i>
                        <b>API Comments</b>
                    </div>
                </div>

                <div className={style.rightIneraction}>
                    <button onClick={Share} >Share<i className="sharearrow fas fa-arrow-right"></i></button>
                </div>
            </div>

            <div className={style.text}>
                {/* <p>{postsItem.description !== '' ? postsItem.description : 'Post Without Descriptin'}</p> */}
            </div>

            {isModal && (
                <PostModal
                    closeModal={setIsModal}

                />
            )}

        </div>

    )
}

export default Post;