import React from 'react';
import { Connect } from '../index'

const Signin = () => {
    const [{ user }, dispatch] = Connect();

    const changeLoginStatus = () => {
        dispatch({
            type: 'LOGIN-UPDATE', 
            payload: {
                login: !user.login,
                firstName: 'Yoogesh',
                lastName: 'Sharma',
            }
        })
    }

    return (<>
            <p>{user.login.toString()}</p>
            <button onClick={ changeLoginStatus }>
                {user.login ? 'Logout' : 'Login'}
            </button>
        </>)
};

export default Signin;