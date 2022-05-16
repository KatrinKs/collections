import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import { FormattedMessage } from "react-intl";

const NotFoundPage = () => {
    const {isAuth} = useAuth();
    return  isAuth ? (
        <div>
            <FormattedMessage id='not_found'/>
            <Link to="/home"><FormattedMessage id='main_list'/></Link>
        </div>
    ): (
        <div>
            <FormattedMessage id='not_found'/>
            <Link to="/"><FormattedMessage id='main_list'/></Link>
        </div>
    )
}

export default NotFoundPage