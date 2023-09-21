import React from 'react';

function PerfilUserLoged({userLoged}) {        
    return (        
        <div className='perfil'>
            <div className="perfil_content">
                {/* <img className='perfil_image' src={userLoged[0].picture.medium} alt="img-perfil" /> */}
                <div className="perfil_info">
                    {/* <h5 className='perfil_info-user'>{userLog}</h5> */}
                    <span className='perfil_info-span'>
                        {userLoged.map(user=>(
                            <h3 key={user.login.uuid}>{user.login.username}</h3>
                        ))}
                    </span>
                </div>
            </div>
            <button className='perfil_info-button'>Change</button>
        </div>        
    );
}

export default PerfilUserLoged;