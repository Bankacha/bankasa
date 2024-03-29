import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getCurrentUser } from './../store/selectors/users.selectors'

export function WorkingRoute(props) {

    const currentUser = useSelector(getCurrentUser);

    const { component: Component, path, ...rest } = props;

    return (
        <Route path={path}>
            {
                currentUser ? <Component {...rest} /> : <Redirect to='/auth' />
            }
        </Route>
    )
}
