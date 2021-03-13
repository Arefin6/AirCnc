import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center my-5 not-found">
            <h1>404</h1>
             <p>Page Not Found!</p>
            <Link to='/' className="btn btn-primary btn-rounded">Back To Home</Link>
        </div>
    );
};

export default NotFound;