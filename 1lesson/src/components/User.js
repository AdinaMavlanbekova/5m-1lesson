import React from "react";

const User = ({userInfo}) => {
    return (
        <ul>
            <li>name: {userInfo.name}</li>
            <li>email: {userInfo.email}</li>
            <button>get more</button>
        </ul>
    )
}

export default User;