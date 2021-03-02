import 'bootstrap/dist/css/bootstrap.min.css';
import './Theme.css';
import './App.css';

import {Container} from 'react-bootstrap';

import {BillCreate} from './public/views/BillCreate';
import {HomePage} from './public/views/HomePage';
import {LoginPage} from './public/views/LoginPage'

function App() {
    return (
        <Container className="h-100" fluid>
            {/*<LoginPage></LoginPage>*/}
            <HomePage></HomePage> 
            {/*<BillCreate></BillCreate>*/}
        </Container>
    );
}

export default App;
