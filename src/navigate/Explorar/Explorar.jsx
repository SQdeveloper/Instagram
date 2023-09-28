import React, { useEffect, useState } from 'react';
import './Explorar.css'
import PubExplorar from './PubExplorar';
import getListImages from '../../services/getListImages';

function Explorar() {
    const [listImages, setListImages] = useState([]);

    const fillListImages = async ()=>{
        const newListImages = await getListImages("models", 21);
        setListImages(newListImages);
    }

    useEffect(()=>{
        fillListImages();
    }, [])

    return (
        <div className='explorar'>
            { listImages.map((im)=>(
                <PubExplorar key={im.id} urlPublication={im.webformatURL}/>
            ))}            
        </div>
    );
}

export default Explorar;