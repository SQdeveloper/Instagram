import React from 'react';
import './Messages.css';
import Chat from './Chat/Chat';

const Messages = ({userChat}) => {
    return (
        <div className='messages'>
            <div className="messages_bandeja">
                <div className="messages_bandeja_header">
                    <button>
                        <span className='messages_bandeja_header-username'>J_squinto</span>
                        <svg aria-label="Icono de comilla angular hacia abajo" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M12 17.502a1 1 0 0 1-.707-.293l-9-9.004a1 1 0 0 1 1.414-1.414L12 15.087l8.293-8.296a1 1 0 0 1 1.414 1.414l-9 9.004a1 1 0 0 1-.707.293Z"></path></svg>
                    </button>
                    <svg aria-label="Nuevo mensaje" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Nuevo mensaje</title><path d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.848" x2="20.076" y1="3.924" y2="7.153"></line></svg>                    
                </div>
                <div className="messages_bandeja_title">
                    <h1 className='messages_bandeja_title-h1'>Messages</h1>
                    <span className='messages_bandeja_title-span'>Requests</span>
                </div>
                <div className="messages_bandeja_contMessages">
                    {userChat.map(user=>(
                        <button className="messages_bandeja_contMessages-message">
                            <img className='messages_bandeja_contMessages-message--img' src={user.picture.medium} alt="perfil image" />
                            <div className="messages_bandeja_contMessages-message--text">
                                <div className="messages_bandeja_contMessages-text-name">
                                    {user.name.first + " " + user.name.last}
                                </div>
                                <div className="messages_bandeja_contMessages-text-mss">
                                    {user.location.timezone.description}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
            <div className="messages_sectionChat">
                {/* <svg aria-label="" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="96" role="img" viewBox="0 0 96 96" width="96"><path d="M48 0C21.532 0 0 21.533 0 48s21.532 48 48 48 48-21.532 48-48S74.468 0 48 0Zm0 94C22.636 94 2 73.364 2 48S22.636 2 48 2s46 20.636 46 46-20.636 46-46 46Zm12.227-53.284-7.257 5.507c-.49.37-1.166.375-1.661.005l-5.373-4.031a3.453 3.453 0 0 0-4.989.921l-6.756 10.718c-.653 1.027.615 2.189 1.582 1.453l7.257-5.507a1.382 1.382 0 0 1 1.661-.005l5.373 4.031a3.453 3.453 0 0 0 4.989-.92l6.756-10.719c.653-1.027-.615-2.189-1.582-1.453ZM48 25c-12.958 0-23 9.492-23 22.31 0 6.706 2.749 12.5 7.224 16.503.375.338.602.806.62 1.31l.125 4.091a1.845 1.845 0 0 0 2.582 1.629l4.563-2.013a1.844 1.844 0 0 1 1.227-.093c2.096.579 4.331.884 6.659.884 12.958 0 23-9.491 23-22.31S60.958 25 48 25Zm0 42.621c-2.114 0-4.175-.273-6.133-.813a3.834 3.834 0 0 0-2.56.192l-4.346 1.917-.118-3.867a3.833 3.833 0 0 0-1.286-2.727C29.33 58.54 27 53.209 27 47.31 27 35.73 36.028 27 48 27s21 8.73 21 20.31-9.028 20.31-21 20.31Z"></path></svg>
                <div className="messages_sectionChat-strong">
                    Yours messages
                </div>
                <div className="messages_sectionChat-text">
                    Send your photos and privacy messages to a friend  or group
                </div>
                <button className='messages_sectionChat-button'>Send message</button> */}

                <Chat/>

            </div>
        </div>
    );
};

export default Messages;