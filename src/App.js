import 'bootstrap/dist/css/bootstrap.min.css';
import './Theme.css';
import './App.css';

import { BillPage } from './public/views/BillPage';
import { HomePage } from './public/views/HomePage';
import { LoginPage } from './public/views/LoginPage'
import { Products } from './admin/pages/Products';
import { ProductCreatePage } from './admin/pages/ProductCreatePage';
import { Layout } from './layout/Layout';
import { CategoriesPage } from './admin/pages/CategoryPage';
import { AdminPage } from './admin/pages/AdminPage';
import { AccountingPage } from './admin/pages/AccountingPage';
import { Reports } from './admin/pages/Reports';
import { Supplies } from './admin/pages/Supplies';
import { UserProfiles } from './admin/pages/UserProfiles';
import { UserCreate } from './admin/pages/UserCreate';
import { ActiveBills } from './public/components/ActiveBills';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { AdminRoute } from './auth/AdminRoute';
import { WorkingRoute } from './auth/WorkingRoute';

function App() {
    return (
        <Router>
            <ReactNotification />

            <Layout>
                <Switch>

                    <AdminRoute exact path='/admin/products' component={Products} />
                    <AdminRoute path='/admin/products/create' component={ProductCreatePage} type={'create'} />
                    <AdminRoute path='/admin/products/:id' component={ProductCreatePage} type={'edit'} />
                    <AdminRoute path='/admin/categories' component={CategoriesPage} />
                    <AdminRoute path='/admin/accounting/users/create' component={UserCreate} />
                    <AdminRoute path='/admin/accounting/users' component={UserProfiles} />
                    <AdminRoute path='/admin/accounting/supplies' component={Supplies} />
                    <AdminRoute path='/admin/accounting/reports' component={Reports} />
                    <AdminRoute path='/admin/accounting' component={AccountingPage} />
                    <AdminRoute path='/admin' component={AdminPage} />

                    <Route exact path='/auth'>
                        <LoginPage />
                    </Route>
                    <WorkingRoute path='/active' component={ActiveBills} />
                    <WorkingRoute path='/bill' component={BillPage} />
                    <WorkingRoute path='/' component={HomePage} />


                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
