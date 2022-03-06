import React, { useState } from 'react';
import './ModalDragAndDrop.css'
const ModalDragAndDrop = ({ modalDragAndDrop, setModalDragAndDrop }) => {
    const [mediaLoad, setMediaLoad] = useState(false)
    return (
        <div className='dragAndDropContainer  container  pb-5 pt-3'>
            {
                mediaLoad ? '' : <div className="d-flex flex-column ">
                    <i role="button"
                        onClick={() => setModalDragAndDrop(!modalDragAndDrop)}
                        className="fa align-self-end fa-times fs-4  text-black-50 " style={{ padding: '6px 8px', }} aria-hidden="true"
                    ></i>
                    <div className='dragAndDropMediaContainer my-4'>
                        <span><i onClick={() => document.getElementById('imageInput')?.click()} style={{ padding: '6px 8px' }} class="fa fa-plus-circle fs-4 " aria-hidden="true"></i></span>
                        <span >
                            <form  action="">
                                <h5 className='m-0'>Add Photos/Videos</h5>
                                <small className='text-center text-black-50 '>or drag and drop</small>
                                <input id='imageInput' className='visually-hidden' type="file" multiple />
                            </form>
                        </span>
                    </div>
                </div>
            }
        </div>
    );
};

export default ModalDragAndDrop;