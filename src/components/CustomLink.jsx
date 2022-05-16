import { Link, useMatch } from "react-router-dom";

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch(to);

    return (
        <Link
            to={to}
            style={{
                color: match ? 'rgb(29, 224, 235)' : 'aliceblue',
            }}
            {...props}
        >
            {children}
        </Link>
    )
}

export default CustomLink