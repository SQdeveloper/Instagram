import React, { useRef, useState } from 'react';
import ModalComment from './ModalComments/ModalComment';
import ModalOptions from './ModalOptions/ModalOptions';

function Publication({userLoged, url, username, days ,description, likes}) {
    const [activePost, setActivePost]     = useState(false);
    const [listComments, setListComments] = useState([]);
    const [clickedHeart, setClickedHeart]   = useState(false);
    const [clickedComment, setClickedComment] = useState(false);
    const [clickedOptions, setClickedOptions] = useState(false);
    const inputText = useRef();
    
    const handleChangeInput = (e)=>{        
        const input = e.target.value;
        if(input !== "") {setActivePost(true)}
        else {setActivePost(false)}
    }

    const sendPost = (e)=>{
        e.preventDefault();
        const newListComments = [...listComments];
        newListComments.push(inputText.current.value);
        setListComments(newListComments);
        inputText.current.value = "";        
    }

    const handleClickHeart = ()=>{
        setClickedHeart(clickedHeart => !clickedHeart);
    }
    const handleClickComment = ()=>{
        setClickedComment(clickedComment => !clickedComment);
    }
    const handleClickShare = ()=>{
        // setClickedHeart(clickedHeart => !clickedHeart);
    }

    const openOptionsModal = ()=>{
        setClickedOptions(clickedOptions => !clickedOptions);
    }

    return (
        <div className='publication'>
            <div className="publication_header">
                <div className="perfilUser">
                    <img src={url} alt="perfil_user" />
                    <div className='publication_header--info'>                    
                        <div>
                            <h5>{username}</h5>
                            <svg aria-label="Verificado" className="x1lliihq x1n2onr6" color="rgb(0, 149, 246)" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12"><title>Verificado</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fillRule="evenodd"></path></svg>
                            <div className="header__days">{days} days</div>
                        </div>
                        <span>{description}</span>
                    </div>
                </div>
                <button onClick={openOptionsModal} className='publication_header-options'><svg aria-label="Más opciones" className="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></button>
                {clickedOptions &&
                    <ModalOptions openOptionsModal={openOptionsModal}/>
                }
            </div>
            <div className="publication_content">
                <video loop autoPlay muted src="../src/assets/videos/once.mp4"></video>
            </div>
            <div className="publication_reactions">
                <div className="publication_reactions-left">
                    <button onClick={handleClickHeart} className='publication_reactions-icons publication_reactions-heart'>
                        {clickedHeart ?
                            <svg className='i-dont-like' aria-label="Ya no me gusta" color="rgb(255, 48, 64)" fill="rgb(255, 48, 64)" height="24" role="img" viewBox="0 0 48 48" width="24"><title>Ya no me gusta</title><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>                         
                            :
                            <svg className='i-like icon-hover' aria-label="Me gusta" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Me gusta</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                        }
                    </button>
                    <button onClick={handleClickComment} className='publication_reactions-icons publication_reactions-comment'>
                        <svg aria-label="Comentar" className='icon-hover' color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comentar</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                    </button>
                    {clickedComment && 
                        <ModalComment publicationUrl='../src/assets/videos/once.mp4' openOptionsModal={openOptionsModal} handleClickComment={handleClickComment} likes={likes} url={url} username={username}/>                            
                    }
                    <button onClick={handleClickShare} className='publication_reactions-icons publication_reactions-share'>
                        {/* {clickedIcon} */}
                        <svg className='icon-hover' aria-label="Compartir publicación" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Compartir publicación</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                    </button>
                </div>
                <button><svg aria-label="Guardar" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Guardar</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg></button>                
            </div>
            <span className='publication_likes'>
                {likes} Likes
            </span>
            <ul className="publication_comments">
                {
                    listComments.map((comment, index) => (
                        <li key={index}>
                            <strong>{userLoged[0].login.username}</strong> {comment}
                        </li>         
                    ))
                }
            </ul>
            <div className="publication_post">
                <form action="" onSubmit={sendPost}>
                    <input name='text-publication' ref={inputText} onChange={handleChangeInput} type="text" placeholder='Add a comment...' />
                    <div className="publication_post-options">
                        {activePost && 
                         <button type='submit' onClick={sendPost} className='publication_options-buttonPost'>Post</button>
                        }
                        <button className="publication_post-icon"><svg aria-label="Emoticono" color="rgb(115, 115, 115)" fill="rgb(115, 115, 115)" height="13" role="img" viewBox="0 0 24 24" width="13"><title>Emoticono</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg></button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Publication;