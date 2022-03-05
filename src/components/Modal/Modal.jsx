import React from 'react';
import './Modal.css'

const Modal = ({modalOpen}) => {
    
    return (
       <div className='modal-background'>
          <div className='container'>
                <div className="row">
                    <div className="col-6 mx-auto">
                        <div className='custom-card'>
                            <form action="">
                                <input type="text" />
                                <input type="text" />
                                <button onClick={modalOpen}>Close</button>
                            </form>
                        </div>
                    </div>
                </div>
          </div>
        </div>
    );
};

export default Modal;