import React from 'react';
import './ModalOptions.css'

function ModalOptions({openOptionsModal}) {
    return (
        <div className='modal modalOptions'>
            <button className='modal_buttonClose' onClick={openOptionsModal} ><svg aria-label="Cerrar" class="x1lliihq x1n2onr6" color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Cerrar</title><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg></button>
            <ul className="contentModalOptions">
                <li><button className='contentModalOptions-warning'>Report</button></li>
                <li><button className='contentModalOptions-warning'>Stop following</button></li>
                <li><button>Add favorites</button></li>
                <li><button>Go to favorites</button></li>
                <li><button>Share on</button></li>
                <li><button>Copy link</button></li>
                <li><button>Insertion code</button></li>
                <li><button>Information about this account</button></li>
                <li><button onClick={openOptionsModal}>Cancel</button></li>
            </ul>
        </div>
    );
}

export default ModalOptions;