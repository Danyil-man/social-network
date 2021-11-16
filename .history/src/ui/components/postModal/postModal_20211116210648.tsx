import React, { FC, useState } from "react";
import postModal from "./PostModal.module.scss";
import comment1 from "../../../public/images/story/story3.png";

interface PropsPostsModal {
    closeModal: any;
    postAva: string;
    username: string;
    postImg: string;
}

interface PropsComment {
    comment__avatar: string;
    comment__message: string;
    comment__status: string;
}

let comment_data = [
    {
        comment__avatar: comment1,
        comment__message: 'Cool image',
        comment__status: '12min ago'
    }
]

const Comment = (props: PropsComment) => {
    return (
        <div className={postModal.commentsItems}>
            <div className={postModal.commentAvatar}>
                <img width={40} src={props.comment__avatar} alt="" />
            </div>
        </div>
    )
}

const PostModal: FC<PropsPostsModal> = ({ closeModal, postAva, username, postImg }) => {
    const [isModal, setIsModal] = useState(true);

    return (
        <div>
            {isModal && (
                <div className={postModal.wrapper}>
                    <div className={postModal.container}>
                        <div className={postModal.postImgBlock}>
                            <img className={postModal.postImg} src={postImg} alt="postimage" />
                        </div>
                        <div className={postModal.interaction}>
                            <div className={postModal.header}>
                                <div className={postModal.userInfo}>
                                    <img width={40} src={postAva} alt="avatar" />
                                    <p>{username}</p>
                                </div>
                                <div className={postModal.CloseBtn}>
                                    <button className={postModal.titleCloseBtn} onClick={() => closeModal(false)}> <i className="far fa-times-circle"></i> </button>
                                </div>
                            </div>

                            <div className={postModal.commentsBlock}>
                                {comment_data.map(comment => <Comment
                                    comment__avatar={comment.comment__avatar}
                                    comment__message={comment__message}
                                    comment__status={comment__status} />)}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default PostModal;