import 'bootstrap/dist/css/bootstrap.min.css';
import './Theme.css';
import './App.css';

import { BillPage } from './public/views/BillPage';
import { HomePage } from './public/views/HomePage';
import { LoginPage } from './public/views/LoginPage'
import { Products } from './admin/pages/Products';
import { ProductPage } from './admin/pages/ProductPage';
import { Layout } from './layout/Layout';
import { CategoriesPage } from './admin/pages/CategoryPage';
import { AdminPage } from './admin/pages/AdminPage';
import { AccountingPage } from './admin/pages/AccountingPage';
import { Reports } from './admin/pages/Reports';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { AdminRoute } from './auth/AdminRoute';
import { WorkingRoute } from './auth/WorkingRoute';
import { useSelector } from 'react-redux';
import { getCurrentUser } from './store/selectors/users.selectors';


function App() {
    const currentUser = useSelector(getCurrentUser)

    return (
        <Router>
            <Layout>
                <Switch>

                    <AdminRoute exact path='/admin/products' component={Products} />
                    <AdminRoute path='/admin/products/create' component={ProductPage} type={'create'} />
                    <AdminRoute path='/admin/products/:id' component={ProductPage} type={'edit'} />
                    <AdminRoute path='/admin/categories' component={CategoriesPage} />
                    <AdminRoute path='/admin/accounting/reports' component={Reports} />
                    <AdminRoute path='/admin/accounting' component={AccountingPage} />
                    <AdminRoute path='/admin' component={AdminPage} />

                    <Route exact path='/auth'>
                        <LoginPage />
                    </Route>
                    {
                        currentUser?.role === 'waiter' ? (
                            <Switch>
                                <WorkingRoute path='/bill' component={BillPage} />
                                <WorkingRoute path='/' component={HomePage} />
                            </Switch>
                        ) : (
                            <Switch>
                                <AdminRoute path='/bill' component={BillPage} />
                                <AdminRoute path='/' component={HomePage} />
                            </Switch>
                        )
                    }


                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
