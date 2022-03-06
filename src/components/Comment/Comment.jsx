import React from 'react';
import CommentsFrom from '../CommentsForm/CommentsFrom';

const Comment = ({comment, replies,currentUserId,deleteComment,activeComment, setActiveComment,parentId=null,addComment }) => {
    const createdAt = new Date ( comment.createdAt ) .toLocaleDateString();
    const isReplying = activeComment && activeComment.type === 'repling' && activeComment.id === comment.id 
    const isAdditing = activeComment && activeComment.type === 'editing' && activeComment.id === comment.id 
    const replyId = parentId ? parentId : comment.id;
    return (
        <div className="comment">
            <div className='comment-image-container'>
                <img src="/user-icon.png" alt="" />
            </div>
            <div className='comment-right-part'>
                <div className="comment-content">
                    <div className="comment-author">
                        {comment.username}
                    </div>
                    <div className='comment-author'> {createdAt} </div>
                </div>
                <div className="comment-text">{comment.body} </div>
                <div className="comment-actions">
                    <div 
                        className="comment-action"
                         onClick={()=>{setActiveComment({id:comment.id, type: "replying"})}}>Reply</div>
                    <div className="comment-action" onClick={()=>{setActiveComment({id:comment.id, type: "editing"})}}>Edit</div>
                    <div className="comment-action"
                        onClick={() => deleteComment(comment.id)}
                     
                     >Delete</div>

                     {
                         isReplying && (
                             <CommentsFrom submitLabel={"Reply"} handleSubmit={(text) => addComment(text, replyId)} />
                         )
                     }
                </div>
                {
                replies.length > 0  && (
                    <div className='replies'>
                        {
                            replies.map(reply => (
                                <Comment 
                                 comment={reply}
                                  key={reply.id}
                                   replies={[]} 
                                   currentUserId={currentUserId}
                                   deleteComment={deleteComment}
                                   parentId={comment.id}
                                   activeComment={activeComment}
                                   setActiveComment={setActiveComment}
                                   addComment={addComment}
                                />
                            ))
                        }
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default Comment;