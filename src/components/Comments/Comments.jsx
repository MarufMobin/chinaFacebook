import React, { useEffect, useState } from 'react';
import {getComments as getCommentsApi , createComment as createCommentApi, deleteComment as deleteCommentApi} from '../../api';
import Comment from '../Comment/Comment';
import CommentsFrom from '../CommentsForm/CommentsFrom';

const Comments = ({currentUserId}) => {
    const [ backendComments, setBackendComments ] = useState([]);
    // active comment i there data status
    const [ activeComment, setActiveComment ] = useState(null);
    // Main Comment in database
    const rootComments = backendComments.filter( backendComment => backendComment.parentId === null )
    // Replies Comment in Database 
    const getReplies = commentId => {
        return backendComments.filter( backendComment => backendComment.parentId === commentId ).sort( (a, b) => new Date(a.createteAt).getTime() - new Date(b.createteAt).getTime)
    }

    // Delete Comments will be here
    const deleteComment = commentId =>{
            if( window.confirm("Are you Sure to Delete this Comment")){
                deleteCommentApi(commentId).then( () =>{
                    const updatedBackendComments = backendComments.filter(backendComment => backendComment.id !== commentId )
                    setBackendComments(updatedBackendComments)
                })
            }
    }
    useEffect(() =>{
        getCommentsApi().then( data => setBackendComments(data));
    }, []);

    const addComment = ( text, parentId ) =>{
        console.log('addComment', text, parentId)
         createCommentApi(text, parentId).then( comment => {
             setBackendComments( [ comment, ...backendComments])
         })
    }

    console.log(backendComments)
    return (
        <div className='commnets'>
            <h5 className="comments-title"> </h5>
            <div className="comment-form-title">
                Write Comment
            </div>
            <CommentsFrom submitLabel="write" handleSubmit={addComment} />
            <div className="comments-container">
                {
                    rootComments.map( rootComment => (
                        <div key={rootComment.id}>
                            <Comment 
                                key={rootComment.id} 
                                comment={rootComment} 
                                replies={getReplies(rootComment.id)} 
                                currentUserId={currentUserId}
                                deleteComment={deleteComment}
                                activeComment={activeComment}
                                setActiveComment={setActiveComment}
                                addComment={addComment}
                            />
                        </div>
                    ))
                }    
            </div>
        </div>
    );
};

export default Comments;