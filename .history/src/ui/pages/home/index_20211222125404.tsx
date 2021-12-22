import Home from './Home';
import { Redirect } from "react-router";
import { AppStateType } from 'core/store/redux/reduxStore';
import { connect } from 'react-redux';
import { FC, useEffect, useState } from 'react';
import { logOut } from 'core/store/reducers/authReducer';
import { AccountType, CreatePostType, GetAccountType, GetAllComments, GetAllPostsType, GetSinglePostType } from 'core/store/api/api';
import { getIsLoading, getUsersSelector } from 'core/store/selectors';
import { editProfile, getProfile, } from 'core/store/reducers/profileReducer';
import { getProfileUser, getUsers, GetUserType } from 'core/store/reducers/usersReducer';
import { getAllComments, getAllPosts, getPost, getPostsOfSingleUser, likePost, removelikePost, setComment } from 'core/store/reducers/postsReducer';

type ContainerHomeType = {
    isAuth: boolean
    profile: GetAccountType
    isLoading: boolean
    users: Array<GetUserType>
    posts: Array<GetAllPostsType>
    comments: Array<GetAllComments>
    singlePosts: Array<GetSinglePostType>
    currentPage: number
    pageSize: number
    postItem: CreatePostType
    editProfile: (account: AccountType) => void
    getProfileUser: (username: string) => void
    likePost: (postId: number, like: number) => void
    removelikePost: (postId: number, like: number) => void
    getAllComments: (postId: number) => void
    getPost: (postId: number) => void
    getAllPosts: (currentPage: number) => void
    getPostsOfSingleUser: (username: string) => void
    setComment: (postId: number, message: string) => void
}



const IdxHome: FC<ContainerHomeType> = ({ isAuth, profile,
    isLoading, users,
    posts, comments,
    singlePosts, currentPage,
    postItem,
    editProfile, getProfileUser,
    likePost, removelikePost,
    getAllComments, getPost,
    getPostsOfSingleUser, getAllPosts,
    setComment

}) => {

    useEffect(() => {
        getAllPosts(currentPage)
        console.log('posts mounted, page:', currentPage)
    }, [currentPage, getAllPosts])

    return isAuth ? (
        <div>
            <Home
                profile={profile}
                isLoading={isLoading}
                users={users}
                posts={posts}
                comments={comments}
                singlePosts={singlePosts}
                editProfile={editProfile}
                getProfileUser={getProfileUser}
                likePost={likePost}
                removelikePost={removelikePost}
                getAllComments={getAllComments}
                getPost={getPost}
                getPostsOfSingleUser={getPostsOfSingleUser}
                setComment={setComment}
            />
        </div>
    )
        : (
            <Redirect to="/signup" />
        )
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    profile: state.profile.profile,
    posts: state.posts.posts,
    comments: state.posts.comments,
    singlePosts: state.posts.singlePosts,
    pageSize: state.posts.pageSize,
    postsCount: state.posts.postsCount,
    currentPage: state.posts.currentPage,
    postItem: state.posts.postItem,
    isLoading: getIsLoading(state),
    users: getUsersSelector(state),
})



export default connect(mapStateToProps, {
    editProfile, getUsers,
    getProfile, getProfileUser,
    getAllPosts, likePost,
    removelikePost, getAllComments,
    getPost, getPostsOfSingleUser,
    setComment
})(IdxHome);
