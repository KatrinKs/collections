import { Login } from 'components/Login';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

const LoginPage = () => {
    return (
        <>
        <div>
            <h1><FormattedMessage id='menu_login'/></h1>
            <Login />
            <p>
                <nav>
                <FormattedMessage id='or'/> <Link to="/register"><FormattedMessage id='register'/></Link>
                </nav>
            </p>
        </div>
        </>
    )
}

export default LoginPage