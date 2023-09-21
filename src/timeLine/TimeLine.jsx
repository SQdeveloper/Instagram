import React from 'react';
import Histories from '../histories/Histories';
import Publication from './Publication';
import "./publication.css";
import "./timeline.css";

function TimeLine({historyUsers, publicationsUsers, userLoged}) {
    return (
        <div className='timeLine'>                        
            <Histories historyUsers={historyUsers}/>
            <div className="timeLine_Publications">
                {publicationsUsers.map(user=>(
                    <Publication key={user.login.uuid} userLoged={userLoged} url={user.picture.medium} username={user.login.username} days={2} description={user.location.timezone.description} likes={1233}/>                                    
                ))
                }
            </div>            
        </div>
    );
}

export default TimeLine;