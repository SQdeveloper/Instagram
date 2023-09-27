import React, { useState } from 'react';

function SideBarOption({svg, text, setSectionSelected}) {
    const [isClickedOption, setIsClickedOption] = useState(false);

    const tet = (e)=>{
        e.preventDefault(); 
        setSectionSelected(text);        
    }

    return (
        <li className='sideBar_option'>
            <button onClick={tet}>
                {svg}
                <a className={isClickedOption ? "sideBar_erase" : ""} href="">{text}</a>
            </button>
        </li>
    );
}

export default SideBarOption;