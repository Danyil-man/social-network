import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./Profile.module.scss";
import ProfilePhoto from "public/images/withoutphoto.png";
import { AccountType, CreatePostType, GetAccountType, GetAllPostsType, GetSinglePostType } from "core/store/api/api";
import EditProfileModal from "ui/components/modal/EditProfileModal";
import { GetUserType } from "core/store/reducers/usersReducer";
import NewPostModal from "ui/components/modal/NewPostModal";
import noPhoto from 'public/images/posts/noPost.jpg'


interface ProfileType {
    profile: GetAccountType
    profilePosts: Array<GetSinglePostType>
    postItem: CreatePostType
    editProfile: (account: AccountType) => void
    createPosts: (postItem: CreatePostType) => void
    deletePost: (postId: number) => void
    isLoading: boolean
}

const Profile: FC<ProfileType> = ({ profile, editProfile, createPosts,
    deletePost, isLoading, profilePosts,
    postItem }) => {
    const { t } = useTranslation();
    console.log('ProPosts:', profilePosts)
    const [isModalEdit, setIsModalEdit] = useState(false)
    const [isNewPostModal, setIsNewPostModal] = useState(false)

    useEffect(() => {
        return () => { profilePosts }
    }, [profilePosts])
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.mainHeader}>
                    <div className={style.leftSide}>
                        <div className={style.photoBlock}>
                            <img width={115} src={profile.profile_photo_url != null ? profile.profile_photo_url : ProfilePhoto} alt="profile__photo" />
                        </div>
                        <div className={style.description}>
                            <div className={style.headerDescription}>
                                <h4>{profile.first_name} {profile.last_name} </h4>
                                <p>{profile.job_title !== null ? profile.job_title : "No Job Description"}</p>{/* will be props  */}
                            </div>
                            <div className={style.lifeDescription}>
                                <p> {profile.description !== null ? profile?.description : "No Description"}</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.rightSide}>
                        <div className={style.mediasubscriptions}>
                            <div className={style.followersBlock}>
                                <b>{profile.followers}</b>
                                <p>Followers</p>
                            </div>
                            <div className={style.followingBlock}>
                                <b>{profile.following}</b>
                                <p>Following</p>
                            </div>
                        </div>
                        <div className={style.navigation}>
                            <button onClick={() => setIsModalEdit(true)} className={style.editProf}>{t('editProf')}</button>
                            <button onClick={() => setIsNewPostModal(true)} className={style.NewPost}>{t('newPost')}</button>
                        </div>
                    </div>
                </div>
                <div className={style.photosCollageContent}>
                    {profilePosts.map(post => <CollagePhotosProfile deletePost={deletePost} post={post} />)}
                </div>
            </div>

            {isModalEdit && <EditProfileModal
                closeModal={setIsModalEdit}
                editProfile={editProfile}
                profile={profile}
                isLoading={isLoading}
            />}

            {isNewPostModal && <NewPostModal
                closeModal={setIsNewPostModal}
                createPosts={createPosts}
                isLoading={isLoading}
                postItem={postItem} />}
        </div>

    )
}

type CollageType = {
    post: GetAllPostsType
    deletePost: (postId: number) => void
}

const CollagePhotosProfile: FC<CollageType> = ({ post, deletePost }) => {
    const [isdeletePost, setDeletePost] = useState(false)
    const deletePostSucces = () => {
        setDeletePost(false)
        deletePost(post.id)
    }
    return (<>
        {
            post.photos.map(photo => <div onClick={() => setDeletePost(true)} className={style.photoItem}>
                <img key={photo.id} src={photo.url !== null ? photo.url : noPhoto} width={358} height={358} alt="profilePosts" />
            </div>
            )

        }
        {isdeletePost && (
            <div className={style.deletePostBlock}>
                <div className={style.deleteContainer}>
                    <p>Delete this post?</p>
                    <div className={style.buttonBlock}>
                        <button className={style.cancelButton} onClick={() => setDeletePost(false)}>No</button>
                        <button className={style.deleteButton} onClick={deletePostSucces}>Yes</button>

                    </div>

                </div>
            </div>

        )}
    </>
    )
}

export default Profile;