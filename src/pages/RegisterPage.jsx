import { SignUp } from 'components/SignUp';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

const RegisterPage = () => {
    return (
        <>
        <div>
            <h1><FormattedMessage id='menu_register'/></h1>
            <SignUp />
            <p>
            <FormattedMessage id='have_account'/> <Link to="/login"> <FormattedMessage id='signin'/></Link>   
            </p>            
        </div>
        </>
    )
}

export default RegisterPage