import React, { useEffect, useState } from 'react';
import Histories from '../histories/Histories';
import Publication from './Publication';
import "./publication.css";
import "./timeline.css";
import getListImages from '../services/getListImages';

function TimeLine({historyUsers, publicationsUsers, userLoged}) {
    const [imagesList,setImagesList] = useState([]);

    const fillListImages = async ()=>{
        const newImages = await getListImages("people+street", 10);
        setImagesList(newImages);
        console.log(newImages)
    }

    useEffect(()=>{
        fillListImages();
    }, [])

    return (
        // imagesList && 
            <div className='timeLine'>                        
                <Histories historyUsers={historyUsers}/>
                {imagesList.length !== 0 && 
                    <div className="timeLine_Publications">
                        {publicationsUsers.map((user, index)=>(
                            <Publication key={user.login.uuid} imgPublication={imagesList[index].webformatURL} userLoged={userLoged} url={user.picture.medium} username={user.login.username} days={2} description={user.location.timezone.description} likes={1233}/>                                    
                        ))
                        }
                    </div>                            
                }
            </div>            
    );
}

export default TimeLine;