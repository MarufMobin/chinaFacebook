import React, { useState } from 'react';
import './Modal.css'
import profileImage from '../../Media/profile.jpg'
import ModalDragAndDrop from '../ModalDragAndDrop/ModalDragAndDrop';
const Modal = ({ setModalStatus, modalStatus }) => {
    const [modalDragAndDrop, setModalDragAndDrop] = useState(false)
    return (
        <div className='modal-background'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-6 col-12 mx-auto">
                        <div className='custom-card'>
                            <div className='d-flex justify-content-between  align-items-center '>
                                <h4 className='w-100 text-center'>
                                    Create post
                                </h4>
                                <i role="button"
                                    onClick={() => setModalStatus(!modalStatus)}
                                    className="fa fa-times fs-4 p-1 text-black-50 " aria-hidden="true"
                                ></i>
                            </div>
                            <div className="d-flex ">
                                <img width={'40px'} height={'40px'} className={'rounded-circle'} src={profileImage} alt="" />
                                <span className='ms-3'>
                                    <h6 className='m-0 p-0'>Abdul jabbar</h6>
                                    <button style={{ fontSize: '14px', fontWeight: '500' }} className='mt-1 border-0 d-flex  align-items-center'>
                                        <i className="fa fa-globe" aria-hidden="true"></i>
                                        <span className='mx-1'> Public</span>
                                        <i className="fa fa-sort-desc align-self-baseline" aria-hidden="true"></i>
                                    </button>
                                </span>
                            </div>
                            <hr className='bg-opacity-10 mb-3' />
                            <form action="">
                                <textarea autoFocus name="" style={{ resize: 'none' }} id="" placeholder="What's on your maind, Maruf?" className='w-100 border-0 fs-4' cols="50" rows={!modalDragAndDrop ? '4' : '2'}></textarea>
                                {modalDragAndDrop ? <ModalDragAndDrop modalDragAndDrop={modalDragAndDrop} setModalDragAndDrop={setModalDragAndDrop}></ModalDragAndDrop> : <></>}
                                <div className='d-flex justify-content-between py-3 px-3 border border-1 rounded-3 mb-2'>
                                    <span role={'button'} style={{ fontWeight: '500' }}>
                                        Add to your post
                                    </span>
                                    <span style={{}} className=''>
                                        <i role={'button'} onClick={() => setModalDragAndDrop(!modalDragAndDrop)} className="fa fs-4 me-3 text-success fa-file-image-o" aria-hidden="true"></i>
                                        <i role={'button'} className="fa fs-4 me-3 fa-tags text-primary" aria-hidden="true"></i>
                                        <i role={'button'} className="fa fs-4 me-3 fa-smile-o text-warning" aria-hidden="true"></i>
                                        <i role={'button'} className="fa fs-4 me-3 fa-map-marker text-danger" aria-hidden="true"></i>
                                        <i role={'button'} className="fa fs-4 me-3 fa-microphone text-danger" aria-hidden="true"></i>
                                        <i role={'button'} className="fa fs-4  fa-ellipsis-h " aria-hidden="true"></i>
                                    </span>
                                </div>
                                <button type="button" className="btn btn-primary w-100">Post</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;