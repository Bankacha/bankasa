import 'bootstrap/dist/css/bootstrap.min.css';
import './Theme.css';
import './App.css';

import {Container} from 'react-bootstrap';

import {BillPage} from './public/views/BillPage';
import {HomePage} from './public/views/HomePage';
import {LoginPage} from './public/views/LoginPage'
import { Products } from './admin/pages/Products';

function App() {
    return (
        <Container className="h-100" fluid>
            {/* <LoginPage></LoginPage> */}
            {/* <HomePage></HomePage> */}
            {/* <BillPage></BillPage> */}
            <Products></Products>
        </Container>
    );
}

export default App;
