import { GetSingleUserType } from "core/store/reducers/usersReducer";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import style from './UserProfile.module.scss';
import ProfilePhoto from '../../../public//images/withoutphoto.png'

type UserProfileType = {
    user: GetSingleUserType
}

const UserProfile: FC<UserProfileType> = ({ user }) => {
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
                                <h4>{profile?.first_name} {profile?.last_name} </h4>
                                <p>{profile?.job_title !== null ? profile?.job_title : "No Job Description"}</p>{/* will be props  */}
                            </div>
                            <div className={style.lifeDescription}>
                                <p> {profile?.description !== null ? profile?.description : "No Description"}</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.rightSide}>
                        <div className={style.mediasubscriptions}>
                            <div className={style.followersBlock}>
                                <b>{profile?.followers}</b>
                                <p>Followers</p>
                            </div>
                            <div className={style.followingBlock}>
                                <b>{profile?.following}</b>
                                <p>Following</p>
                            </div>
                        </div>
                        <div className={style.navigation}>
                            <button onClick={() => setIsModalEdit(true)} className={style.editProf}>{t('editProf')}</button>
                            <button className={style.NewPost}>{t('newPost')}</button>
                        </div>
                    </div>
                </div>
                <div className={style.photosCollageContent}>
                    {posts.map(post => <CollagePhotosProfile post={post} />)}
                </div>
            </div>

            {isModalEdit && <EditProfileModal
                closeModal={setIsModalEdit}
                editProfile={editProfile}
                profile={profile}
                isLoading={isLoading}
            />}

        </div>
    )
}

type CollageType = {
    post: GetAllPostsType
}

const CollagePhotosProfile: FC<CollageType> = ({ post }) => {
    return (<>
        {
            post.photos.map(photo => <div className={style.photoItem}>
                <img key={photo.id} src={photo.url} width={358} height={358} alt="profilePosts" />
            </div>)
        }
    </>
    )
}
}

export default UserProfile