import React, { FC, useState } from "react";
import style from "./MiniProfile.module.scss";
import ProfilePhoto from "public/images/withoutphoto.png"
import { useTranslation } from "react-i18next";
import NewPostModal from "ui/components/modal/NewPostModal";
import { AccountType, CreatePostType, GetAccountType, ImagePhotoType } from "core/store/api/api";
import EditProfileModal from "ui/components/modal/EditProfileModal";

import { GetUserType } from "core/store/reducers/usersReducer";
import { Uppy } from "@uppy/core";
import AwsS3 from "@uppy/aws-s3";
import { DragDrop } from "@uppy/react";

type MiniProfileType = {
    profile: GetAccountType
    isLoading: boolean
    postItem: CreatePostType
    editProfile: (account: AccountType) => void
    createPosts: (postItem: CreatePostType) => void
}
type Image = {
    createPosts: (postItem: CreatePostType) => void
}
export const LoadImage: FC<Image> = ({ createPosts }) => {

    const uppy = new Uppy({
        meta: { type: 'avatar' },
        restrictions: { maxNumberOfFiles: 2 },
        autoProceed: true,
    })

    uppy.use(AwsS3, { companionUrl: 'https://linkstagram-api.ga' })

    uppy.on('complete', (result) => {
        const data = result.successful

        let obj: CreatePostType = {
            description: '',
            photos_attributes: data.map(m => {
                let key = '';

                if (m.meta.key) {
                    key = m.meta.key as string;
                }

                const [storage, id] = key.split("/");

                return {
                    image: {
                        id,
                        storage,
                        metadata: {
                            filename: m.name,
                            size: m.size,
                            mime_type: m.meta.type || ''
                        }
                    }
                }
            })
        }
        console.log('OBJ', obj)
        createPosts(obj)
    })

    return (
        <DragDrop
            uppy={uppy}
        />
    );
};

const MiniProfile: FC<MiniProfileType> = ({ profile, isLoading,
    postItem, editProfile, createPosts }) => {
    const { t } = useTranslation();
    const [isNewPostModal, SetisNewPostModal] = useState(false)
    const [isModalEdit, setIsModalEdit] = useState(false)
    return (
        <div className={style.wrapper}>
            <div className={style.media}>
                <div className={style.followers}>
                    <b>{profile.followers}</b>
                    <p>Followers</p>
                </div>

                <button className={style.avabtn}>
                    <img width={88} src={profile?.profile_photo_url != null ? profile.profile_photo_url : ProfilePhoto} alt="avatar" />
                </button>

                <div className={style.following}>
                    <b>{profile.following}</b>
                    <p>Following</p>
                </div>
            </div>

            <div className={style.description}>
                <h6> {profile.username} <span>-</span> {profile.job_title} </h6>
                <p> {profile.description}</p>

            </div>

            <div className={style.navigation}>
                <button onClick={() => setIsModalEdit(true)} className={style.editProf}>{t('editProf')}</button>
                <button onClick={() => SetisNewPostModal(true)} className={style.NewPost}>{t('newPost')}</button>
            </div>

            <div className={style.privacy}>
                <p>About Help Terms Locations Language <br /> <i className="far fa-copyright"> 2021 Linkstagram</i>  </p>
            </div>

            {isNewPostModal && <NewPostModal
                closeModal={SetisNewPostModal}
                createPosts={createPosts}
                isLoading={isLoading}
                postItem={postItem}
            />}

            {isModalEdit && <EditProfileModal
                closeModal={setIsModalEdit}
                editProfile={editProfile}
                profile={profile}
                isLoading={isLoading}
            />}


        </div>
    )
}

export default MiniProfile;