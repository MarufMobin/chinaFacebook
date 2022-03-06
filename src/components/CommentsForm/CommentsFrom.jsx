import React,{useState} from 'react';

const CommentsFrom = ({handleSubmit, submitLabel}) => {
    const [text , setText ] = useState("");
    // Text area Button disable Status 
    const isTextAreaDisable = text.length === 0;
    const onSubmit = e =>{
        e.preventDefault();
        handleSubmit(text)
        setText("")
    }
    return (
        <form onSubmit={onSubmit} method="POST">
            <textarea 
                className='comment-form-textarea'
                value={text}
                onChange={(e) => setText(e.target.value) }
            ></textarea>
            <button className='comment-form-button' disabled={isTextAreaDisable}>{submitLabel}</button>
        </form>
    );
};

export default CommentsFrom;