import React,{useState} from 'react';
import Comments from '../../components/Comments/Comments';
import Modal from '../../components/Modal/Modal';


const Home = () => {
    const [ modalStatus , setModalStatus ] = useState(false)

    return (
        <div>
            <div>
                <button onClick={()=>setModalStatus(!modalStatus)}>Click This One </button>
                {
                    modalStatus && <Modal setModalStatus={setModalStatus} modalStatus={modalStatus} />
                }
            </div>
            <Comments currentUserId="1" />
        </div>
    );
};

export default Home;