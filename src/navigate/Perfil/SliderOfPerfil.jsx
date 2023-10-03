import React, { useRef } from 'react';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

function SliderOfPerfil( {historyUsers}) {
    const arrowLeft = useRef();
    const arrowRight = useRef();
    const sliderMove = useRef();
    let count = 0;

    const moveSlider = ()=>{
        sliderMove.current.style.transform = `translateX(${10*count}%)`;
    }

    const handleArrowLeft = ()=>{
        count += 1;
        if(count >= 0) {
            arrowLeft.current.style.visibility = "hidden";            
        };
        arrowRight.current.style.visibility = "visible";
        moveSlider(count)
    }

    const handleArrowRight = ()=>{
        count -= 1;
        if(count <= -3) {
            arrowRight.current.style.visibility = "hidden";        
        };
        arrowLeft.current.style.visibility = "visible";
        moveSlider(count)
    }

    return (
        <div className='sectionPerfil_slider'>
            <div className="sectionPerfil_contentSlider">
                <button onClick={handleArrowLeft} ref={arrowLeft} className='sectionPerfil_sliderMove-arrow sectionPerfil_sliderMove-arrow-left'>
                    <ExpandCircleDownIcon className='sectionPerfil-arrow'/>
                </button>
                <button onClick={handleArrowRight} ref={arrowRight} className='sectionPerfil_sliderMove-arrow sectionPerfil_sliderMove-arrow-right'>
                    <ExpandCircleDownIcon className='sectionPerfil-arrow'/>
                </button>
                <div ref={sliderMove} className="sectionPerfil_sliderMove">
                    { historyUsers.map(user=>(
                        <button key={user.login.uuid} className="sectionPerfil_slider-contHistory">
                            <img className='sectionPerfil_slider-contHistory-img' src={user.picture.large} alt="img-perfil" />
                            <div className="sectionPerfil_slider-contHistory-name">
                                {user.login.username}
                            </div>
                        </button>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default SliderOfPerfil;