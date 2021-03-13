import 'bootstrap/dist/css/bootstrap.min.css';
import './Theme.css';
import './App.css';

import { Container } from 'react-bootstrap';

import { BillPage } from './public/views/BillPage';
import { HomePage } from './public/views/HomePage';
import { LoginPage } from './public/views/LoginPage'
import { Products } from './admin/pages/Products';
import { ProductCreate } from './admin/pages/ProductCreate';
import { Layout } from './shared/layout/Layout';

function App() {
    return (
        <Layout>
            {/* <LoginPage></LoginPage> */}
            <HomePage></HomePage>
            {/* <BillPage></BillPage> */}

            {/* ADMIN PAGES */}

            {/* <Products></Products> */}
            {/* <ProductCreate></ProductCreate> */}
        </Layout>

    );
}

export default App;
