import { useState } from 'react';
import Modal from './Modal';
import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css'

function PostsList({ isVisible, onStopPosting }) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPosts) =>
            [postData, ...existingPosts]
        )
    }

    let modalContent;
    if (isVisible) {
        modalContent = (
            <Modal onClose={onStopPosting}>
                <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
            </Modal>
        )
    }
    return (
        <>
            {modalContent}
            <ul className={classes.posts}>
                {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
            </ul>
        </>
    )
}
export default PostsList;