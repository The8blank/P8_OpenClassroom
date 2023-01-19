import React from 'react';

function Tag (props) {

    const {dataTag} = props;
    
    return (
        <div className='tag'>
            <p className='tag-text'>{dataTag}</p>
        </div>
    );
};

export default Tag;