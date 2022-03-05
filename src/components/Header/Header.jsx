import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className='container-fluid nav-background py-3'>
            <div className="row">
                <div className="col-5">
                    <div className='d-flex justify-content-center '>
                        <div className=''>
                            <i className="fa fa-facebook-official" aria-hidden="true"></i>
                        </div>
                        <div>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>     
                        </div>
                    </div>
                </div>
                <div className="col-2">
                   <div className='d-flex justify-content-between'>
                    <div>
                            <i className="fa fa-home" aria-hidden="true"></i></div>
                        <div><i className="fa fa-caret-square-o-right" aria-hidden="true"></i></div>
                        <div><i className="fa fa-newspaper-o" aria-hidden="true"></i></div>
                        <div><i className="fa fa-users" aria-hidden="true"></i></div>
                        <div><i className="fa fa-archive" aria-hidden="true"></i></div>
                   </div>
                </div>
                <div className="col-5">
                    <div className='d-flex justify-content-center px-5'>
                        <div >
                            <span>image Md Maruf mobin</span>
                            <button>click </button>
                        </div>
                        <div>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        </div>
                        <div>
                        <i className="fa fa-comment" aria-hidden="true"></i>
                        </div>
                        <div>
                        <i className="fa fa-bell" aria-hidden="true"></i>
                        </div>
                        <div>
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;