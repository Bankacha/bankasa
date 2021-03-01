import 'bootstrap/dist/css/bootstrap.min.css';
import { BillCreate } from './public/views/BillCreate';
import { HomePage } from './public/views/HomePage';
import { LoginPage } from './public/views/LoginPage'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* <LoginPage></LoginPage> */}
      {/* <HomePage></HomePage> */}
      <BillCreate></BillCreate>
    </div>
  );
}

export default App;
