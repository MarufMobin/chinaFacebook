import React,{useState} from 'react';
import Comments from '../../components/Comments/Comments';
import Modal from '../../components/Modal/Modal';


const Home = () => {
    // Show Modal Componets
    const [ modalStatus , setModalStatus ] = useState(false)
    const modalOpen = () =>{
        setModalStatus(!modalStatus)
    }
    // Show Hidden Comments 
    const [ showComments, setShowComments ] = useState(false);
    const showHiddenComments = () =>{
        setShowComments( !showComments)
    }
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                <div>
                    <button onClick={modalOpen}>Click This One </button>
                   
                </div>
                <div>
                    <button onClick={showHiddenComments}>Show All Comments</button>
                </div>
                    { showComments && <Comments currentUserId="1" /> }
                </div>
                <div className="col-4"></div>
            </div>
            {/* Open Modal for Post */}
            {
                modalStatus && <Modal modalOpen={modalOpen} />
            }
        </div>
    );
};

export default Home;