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

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    {/* ADMIN PAGES */}

                    <Route exact path='/admin/products'>
                        <Products />
                    </Route>
                    <Route path='/admin/products/create'>
                        <ProductPage type={'create'} />
                    </Route>
                    <Route path='/admin/products/:id'>
                        <ProductPage type={'edit'} />
                    </Route>
                    <Route path='/admin/categories'>
                        <CategoriesPage />
                    </Route>
                    <Route path='/admin/accounting/reports'>
                        <Reports />
                    </Route>
                    <Route path='/admin/accounting'>
                        <AccountingPage />
                    </Route>
                    <Route path='/admin'>
                        <AdminPage />
                    </Route>

                    {/* PUBLIC PAGES */}

                    <Route exact path='/auth'>
                        <LoginPage />
                    </Route>
                    <Route path='/bill'>
                        <BillPage />
                    </Route>
                    <Route path='/'>
                        <HomePage />
                    </Route>

                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
