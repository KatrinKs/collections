import React from 'react';
import { useAuth } from 'hooks/use-auth';
import { FormattedMessage } from "react-intl";
//import {Button, Box} from '@mui/material';

const HomePage = () => {
    const {isAuth, email} = useAuth();

    return isAuth ? (
        <>
        <div>
            <h1><FormattedMessage id='home_welcome'/>, {email}!</h1>
        </div>
        </>
    ) : (
        <>
        <div>
            <h1><FormattedMessage id='home_welcome'/>!</h1>
            <h2><FormattedMessage id='home_login'/></h2>
        </div>
        </>
    )
}

export default HomePage