import React from 'react';
import { Link } from 'react-router-dom';

const RefreshLink = (props) => {
    const handleClick = () => {
        // Perform any additional actions if needed before refreshing the page
        window.location.reload();
    };

    return <Link {...props} onClick={handleClick} />;
};

export default RefreshLink;