import 'bootstrap/dist/css/bootstrap.min.css';
import './Theme.css';
import './App.css';

import { BillPage } from './public/views/BillPage';
import { HomePage } from './public/views/HomePage';
import { LoginPage } from './public/views/LoginPage'
import { Products } from './admin/pages/Products';
import { ProductPage } from './admin/pages/ProductPage';
import { Layout } from './layout/Layout';
import { CategoryPage } from './admin/pages/CategoryPage';

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
                        <ProductPage type={'edit'}/>
                    </Route>
                    <Route path='/admin/category'>
                        <CategoryPage />
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
