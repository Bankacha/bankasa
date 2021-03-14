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
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Layout>
                <Switch>

                    {/* ADMIN PAGES */}

                    <Route path='/admin/products'>
                        <Products />
                    </Route>
                    <Route exact path='/admin/create'>
                        <ProductCreate />
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
