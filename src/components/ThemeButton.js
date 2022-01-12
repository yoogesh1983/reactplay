import React from 'react';
import { Connect } from '../index'

const ThemeButton = () => {
    const [{ theme }, dispatch] = Connect();

    const changeColorAction = () => {
        if(theme.primary === 'blue'){
            dispatch({type: 'changeTheme', newTheme: {primary: 'green'}})
        } else {
            dispatch({type: 'changeTheme', newTheme: {primary: 'blue'}})
        }
    }

    return (
        <button style={{backgroundColor: `${theme.primary}`}} onClick={ changeColorAction }>Make me blue</button>
    )
};

export default ThemeButton;