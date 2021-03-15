import 'bootstrap/dist/css/bootstrap.min.css';
import './Theme.css';
import './App.css';

import { BillPage } from './public/views/BillPage';
import { HomePage } from './public/views/HomePage';
import { LoginPage } from './public/views/LoginPage'
import { Products } from './admin/pages/Products';
import { ProductCreate } from './admin/pages/ProductCreate';
import { Layout } from './layout/Layout';

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
                        <ProductCreate type={'create'} />
                    </Route>
                    <Route path='/admin/products/:id'>
                        <ProductCreate type={'edit'}/>
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
