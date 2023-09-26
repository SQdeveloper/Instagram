import React from 'react';
import './ModalShare.css'

function ModalShare({openShareModal, userLoged}) {
    return (
        <div className='modal modalOptions'>           
            <div className="contentShareModal">
                <div className="contentShareModal_header">
                    <span className='contentShareModal_header-title'>Compartir</span>
                    <button onClick={openShareModal} className='contentShareModal_header-buttonClose'><svg aria-label="Cerrar" class="x1lliihq x1n2onr6" color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Cerrar</title><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg></button>
                </div>
                <div className=''>
                    <form className='contentShareModal_form' action="">
                        <label name="from" htmlFor="from">From:</label>
                        <input name='from' placeholder='Busca...' type="text" />
                    </form>
                </div>
                {userLoged.map((user, index)=>(
                    <div key={index} className="contentShareModal_sugerencias">
                        <div className="title">Sugerencias</div>
                        <div className="contentShareModal_sugerencia">
                                <div className="contentShareModal_perfil">
                                    <img src={user.picture.medium} alt="" />
                                        <div className="contentShareModal_perfil-info">
                                            <h5>{user.name.first}</h5>
                                            <span>{user.login.username}</span>
                                        </div>
                                </div>
                            <input type="radio" />                        
                        </div>
                        <div className="contentShareModal_sugerencia">
                                <div className="contentShareModal_perfil">
                                    <img src={user.picture.medium} alt="" />
                                        <div className="contentShareModal_perfil-info">
                                            <h5>{user.name.first}</h5>
                                            <span>{user.login.username}</span>
                                        </div>
                                </div>
                            <input type="radio" />                        
                        </div>
                        <div className="contentShareModal_sugerencia">
                                <div className="contentShareModal_perfil">
                                    <img src={user.picture.medium} alt="" />
                                        <div className="contentShareModal_perfil-info">
                                            <h5>{user.name.first}</h5>
                                            <span>{user.login.username}</span>
                                        </div>
                                </div>
                            <input type="radio" />                        
                        </div>
                    </div>
                ))}
                <div className="contentShareModal_footer">
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}

export default ModalShare;