import React,{useState} from 'react';
import Comments from '../../components/Comments/Comments';
import Modal from '../../components/Modal/Modal';


const Home = () => {
    const [ modalStatus , setModalStatus ] = useState(false)
    const modalOpen = () =>{
        setModalStatus(!modalStatus)
    }
    return (
        <div>
            <div>
                <button onClick={modalOpen}>Click This One </button>
                {
                    modalStatus && <Modal modalOpen={modalOpen} />
                }
            </div>
            <Comments currentUserId="1" />
        </div>
    );
};

export default Home;