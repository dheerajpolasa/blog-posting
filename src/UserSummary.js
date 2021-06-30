import React from 'react';

import './UserSummary.css';

function UserSummary(props) {
    const { user } = props;
    return (
        <div className="user-summary">
            Welcome back, {user.displayName}
        </div>
    )
}

export default UserSummary
