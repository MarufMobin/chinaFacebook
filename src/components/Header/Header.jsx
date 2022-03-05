import React from 'react';

const Header = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-4">
                    <div className='d-flex justify-content-center '>
                        <div className='me-5'>
                            <i class="fa fa-facebook-official" aria-hidden="true"></i>
                        </div>
                        <div>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>     
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div><i class="fa fa-home" aria-hidden="true"></i></div>
                    <div><i class="fa fa-caret-square-o-right" aria-hidden="true"></i></div>
                    <div><i class="fa fa-newspaper-o" aria-hidden="true"></i></div>
                    <div><i class="fa fa-users" aria-hidden="true"></i></div>
                    <div><i class="fa fa-archive" aria-hidden="true"></i></div>
                </div>
                <div className="col-4">
                    <div>
                        <div>
                            <span>image Md Maruf mobin</span>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;