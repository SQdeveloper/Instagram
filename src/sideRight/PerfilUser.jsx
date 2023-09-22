import React from 'react';

function PerfilUser({url, username, following}) {
    return (        
        <div className='perfil'>
            <div className="perfil_content">
                <img className='perfil_image' src={url} alt="img-perfil" />
                <div className="perfil_info">
                    <h5 className='perfil_info-user'>{username}</h5>
                    <span className='perfil_info-span'>{following ? "following you" : "New on Instragram"}</span>
                </div>
            </div>
            <button className='perfil_info-button'>Follow</button>
        </div>        
    );
}

export default PerfilUser;