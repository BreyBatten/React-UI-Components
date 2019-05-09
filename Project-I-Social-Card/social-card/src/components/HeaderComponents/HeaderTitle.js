import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className = 'header-title'>
            <p className = 'school-name'>Lambda School</p>
            <p className = 'school-handle'>@LambdaSchool</p>
            <p className = 'date'>08 May</p>
        </div>
    );
};

export default HeaderTitle;