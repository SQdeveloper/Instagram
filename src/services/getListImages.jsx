import React from 'react';

function getListImages(topic_photo, amount) {
    const API_KEY = "39710892-35df701a50bbd646dd25111b3";
    const TOPIC_PHOTO = topic_photo;
    const AMOUNT = amount;

    return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${TOPIC_PHOTO}&per_page=${AMOUNT}&image_type=photo`).
    then(res => res.json()).
    then(data => {return data.hits})
}

export default getListImages;