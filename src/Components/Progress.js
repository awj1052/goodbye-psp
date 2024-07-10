import React from 'react';
import './Progress.css';

function Progress({ width }) {
    return (
        <div className='my-progress-wrap'>
            <div className='my-progress' style={{width : width}}></div>
        </div>
    )
}

export default Progress;