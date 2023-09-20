import React, { useRef, useState } from 'react';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

function Histories() {
    const sliderMove  = useRef();
    const buttonRight = useRef();
    const buttonLeft  = useRef();
    const [number, setNumber] = useState(0);

    const handleSliderMove = (number, button)=>{        
        if(number <= -3 || number >= 0) {
            let newButton = null;

            button.style.pointerEvents = "none"
            button.style.opacity = 0;
            button.style.visibility = "hidden"  

            button !== buttonRight.current ? newButton = buttonRight : newButton = buttonLeft;            
            newButton.current.style.opacity = 1;          
            newButton.current.style.visibility = "visible";                                
            newButton.current.style.pointerEvents = "all"
        } 

        sliderMove.current.style.transform = `translateX(${4.875 * number}rem)`;
    }

    const nextButton = (e)=>{
        const newNumber = number - 1;                
        setNumber(newNumber);
        handleSliderMove(newNumber, e.target);
    }
    
    const beforeButton = (e)=>{
        const newNumber = number + 1;        
        setNumber(newNumber);
        handleSliderMove(newNumber, e.target);
    }

    return (
        <div className="slider">
            <div className='contSlider'>
                <button ref={buttonRight} onClick={nextButton} className='slider_button slider_button--right'>
                    <ExpandCircleDownIcon className='chevron chevron-right'/>
                </button>
                <button ref={buttonLeft} onClick={beforeButton} className='slider_button slider_button--left'>
                    <ExpandCircleDownIcon className='chevron chevron-left'/>
                </button>
                <div ref={sliderMove} className="sliderMove">
                    <div className="history">
                        <img src="../src/assets/perfiles/girl.jpg" className='history_perfil' alt="" />
                        <span className='history_user'>user_name</span>
                    </div>
                    <div className="history">
                        <img src="../src/assets/perfiles/girl.jpg" className='history_perfil' alt="" />
                        <span className='history_user'>user_name</span>
                    </div>
                    <div className="history">
                        <img src="../src/assets/perfiles/girl.jpg" className='history_perfil' alt="" />
                        <span className='history_user'>user_name</span>
                    </div>
                    <div className="history">
                        <img src="../src/assets/perfiles/girl.jpg" className='history_perfil' alt="" />
                        <span className='history_user'>user_name</span>
                    </div>
                    <div className="history">
                        <img src="../src/assets/perfiles/girl.jpg" className='history_perfil' alt="" />
                        <span className='history_user'>user_name</span>
                    </div>
                    <div className="history">
                        <img src="../src/assets/perfiles/girl.jpg" className='history_perfil' alt="" />
                        <span className='history_user'>user_name</span>
                    </div>
                    <div className="history">
                        <img src="../src/assets/perfiles/girl.jpg" className='history_perfil' alt="" />
                        <span className='history_user'>user_name</span>
                    </div>
                    <div className="history">
                        <img src="../src/assets/perfiles/girl.jpg" className='history_perfil' alt="" />
                        <span className='history_user'>user_name</span>
                    </div>
                    <div className="history">
                        <img src="../src/assets/perfiles/girl.jpg" className='history_perfil' alt="" />
                        <span className='history_user'>user_name</span>
                    </div>
                    <div className="history">
                        <img src="../src/assets/perfiles/girl.jpg" className='history_perfil' alt="" />
                        <span className='history_user'>user_name</span>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Histories;