import React from 'react';

const DateInsert = () => {
    const convertDate = (dateString) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const date = new Date(dateString);

        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        return `${day} ${months[monthIndex]} ${year}`;
    };

    const formattedDate = convertDate({match?.fixture?.date});

    return <div>{formattedDate}</div>;
};

export default MyComponent;
