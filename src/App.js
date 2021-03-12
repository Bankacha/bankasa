import 'bootstrap/dist/css/bootstrap.min.css';
import './Theme.css';
import './App.css';

import {Container} from 'react-bootstrap';

import {BillPage} from './public/views/BillPage';
import {HomePage} from './public/views/HomePage';
import {LoginPage} from './public/views/LoginPage'
import { Products } from './admin/pages/Products';
import { ProductCreate } from './admin/pages/ProductCreate';

function App() {
    return (
        <Container className="h-100 bg-light" fluid>
            {/* <LoginPage></LoginPage> */}
             <HomePage></HomePage> 
            {/* <BillPage></BillPage> */}

            {/* ADMIN PAGES */}

             {/*<Products></Products> */}
            {/*<ProductCreate></ProductCreate>*/}
        </Container>
    );
}

export default App;
