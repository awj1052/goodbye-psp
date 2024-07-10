import React from 'react';
import './ProgressBar.css';


function ProgressBar({children}) {
    return (
        <div className='my-progress-bar'>{children}</div>
    )
}

export default ProgressBar;