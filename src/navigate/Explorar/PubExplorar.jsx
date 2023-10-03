import React from 'react';
import {useState} from 'react';
import ModalComment from '../../timeLine/ModalComments/ModalComment';
import ModalOptions from '../../timeLine/ModalOptions/ModalOptions';
import ModalShare from '../../timeLine/ModalShare/ModalShare';

function PubExplorar({commentNumbers , urlPublication, likes, username, url, userLoged}) {
    const [isOpenPublication, setIsOpenPublication] = useState(false);    
    const [isClickedButtonSave, setIsClickedButton] = useState(false);
    const [clickedHeart, setClickedHeart] = useState(false);
    const [listComments, setListComments] = useState([]);
    const [isOpenOptionModal, setIsOpenOptionModal] = useState(false);
    const [isOpenShareModal, setIsOpenShareModal] = useState(false);

    const openShareModal = ()=>{
        setIsOpenShareModal(isOpenShareModal=>!isOpenShareModal);
    }

    const openOptionsModal = ()=>{
        setIsOpenOptionModal(isOpenOptionModal=>!isOpenOptionModal);
    }

    const changeButtonSave = ()=>{
        setIsClickedButton(isClickedButtonSave=>!isClickedButtonSave);
    }

    const handleButtonExplorar = ()=>{
        setIsOpenPublication(isOpenPublication => !isOpenPublication);
    }    

    return (
        <>
        <button onClick={handleButtonExplorar} className='explorar_publication'>
            <img className='explorar_publication-img' src={urlPublication} alt="publication" />
            <svg className='explorar_publication-svg' aria-label="Secuencia" color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="24" role="img" viewBox="0 0 48 48" width="24"><title>Secuencia</title><path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path></svg>
            <div className="explorar_publication-second">
                <div className="explorar_reactions">
                    <div className="explorar_reaction">
                        <svg className='i-dont-like' aria-label="Ya no me gusta" color="rgb(255, 48, 64)" fill="rgb(255, 48, 64)" height="24" role="img" viewBox="0 0 48 48" width="24"><title>Ya no me gusta</title><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                        <span>{likes}</span>
                    </div>
                    <div className="explorar_reaction">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/></svg>
                        <span>{commentNumbers}</span>
                    </div>
                </div>
            </div>
        </button>
        {isOpenPublication && 
            <ModalComment changeButtonSave={changeButtonSave} isClickedButtonSave={isClickedButtonSave} setClickedHeart={setClickedHeart} clickedHeart={clickedHeart} openShareModal={openShareModal} setListComments={setListComments} userLoged={userLoged} listComments={listComments} publicationUrl={urlPublication} openOptionsModal={openOptionsModal} handleClickComment={handleButtonExplorar} likes={likes} username={username} url={url}/>
        }
        {isOpenOptionModal && <ModalOptions openOptionsModal={openOptionsModal}/>}
        {isOpenShareModal && <ModalShare openShareModal={openShareModal} userLoged={userLoged}/>}
        </>
    );
}

export default PubExplorar;