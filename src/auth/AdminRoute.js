import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getCurrentUser } from './../store/selectors/users.selectors'

export function AdminRoute(props) {

    const currentUser = useSelector(getCurrentUser);

    const { component: Component, path, ...rest } = props;

    return (
        <Route path={path}>
            {
                // currentUser?.role === 'admin' ? <Component {...rest} /> : <Redirect to='/auth' />
                <Component {...rest} />
            }
        </Route>
    )
}