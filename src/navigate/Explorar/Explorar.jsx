import React, { useEffect, useState } from 'react';
import './Explorar.css'
import PubExplorar from './PubExplorar';
import getListImages from '../../services/getListImages';

function Explorar({userLoged, keyWord, amount}) {
    const [listImages, setListImages] = useState([]);

    const fillListImages = async ()=>{
        const newListImages = await getListImages(keyWord, amount);
        setListImages(newListImages);
    }

    useEffect(()=>{
        fillListImages();
    }, [])

    return (
        <div className='explorar'>
            { listImages.map((im)=>(
                <PubExplorar key={im.id} commentNumbers={im.comments} likes={im.likes} urlPublication={im.webformatURL} username={im.user} url={im.userImageURL} userLoged={userLoged}/>
            ))}            
        </div>
    );
}

export default Explorar;