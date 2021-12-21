import { GetSingleUserType } from "core/store/reducers/usersReducer";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import style from './UserProfile.module.scss';
import ProfilePhoto from 'public/images/withoutphoto.png'
import { GetSinglePostType } from "core/store/api/api";

type UserProfileType = {
    user: GetSingleUserType
    userPosts: Array<GetSinglePostType>
}

const UserProfile: FC<UserProfileType> = ({ user, userPosts }) => {
    const { t } = useTranslation();
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.mainHeader}>
                    <div className={style.leftSide}>
                        <div className={style.photoBlock}>
                            <img width={115} src={user.profile_photo_url != null ? user.profile_photo_url : ProfilePhoto} alt="profile__photo" />
                        </div>
                        <div className={style.description}>
                            <div className={style.headerDescription}>
                                <h4>{user.first_name} {user.last_name} </h4>
                                <p>{user.job_title !== null ? user.job_title : "No Job Description"}</p>{/* will be props  */}
                            </div>
                            <div className={style.lifeDescription}>
                                <p> {user.description !== null ? user.description : "No Description"}</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.rightSide}>
                        <div className={style.mediasubscriptions}>
                            <div className={style.followersBlock}>
                                <b>{user.followers}</b>
                                <p>Followers</p>
                            </div>
                            <div className={style.followingBlock}>
                                <b>{user.following}</b>
                                <p>Following</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.photosCollageContent}>
                    {userPosts.map(post => <CollagePhotosProfile post={post} />)}
                </div>
            </div>
        </div>
    )
}

type CollageType = {
    post: GetSinglePostType
}

const CollagePhotosProfile: FC<CollageType> = ({ post }) => {
    return (<>
        {
            post.photos.map(photo => <div className={style.photoItem}>
                <img key={photo.id} src={photo.url}
                    width={358} height={358} alt="profilePosts" />
            </div>)
        }
    </>
    )
}

export default UserProfile