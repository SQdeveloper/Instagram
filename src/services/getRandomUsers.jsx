import React from 'react';

function getRandomUsers() {
    const numberOfUsers = 27;

    return fetch(`https://randomuser.me/api/?results=${numberOfUsers}`).
    then(res => res.json()).
    then(data => { return data.results });
}

export default getRandomUsers;