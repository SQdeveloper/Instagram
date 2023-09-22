import React from 'react';

function PerfilUserLoged({userLoged}) {        
    return (        
        userLoged.map(user=>(
            <div key={user.login.uuid} className='perfil'>
                <div className="perfil_content">
                    <img className='perfil_image' src={user.picture.medium} alt="img-perfil" />
                    <div className="perfil_info">
                        <h5 className='perfil_info-user'>{user.login.username}</h5>
                        <span className='perfil_info-span'>                        
                            <h3>{user.name.first + " " + user.name.last}</h3>                        
                        </span>
                    </div>
                </div>
                <button className='perfil_info-button'>Change</button>
            </div>        
        ))
    );
}

export default PerfilUserLoged;