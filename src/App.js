
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter , Switch  , Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import DeliveryDetails from './components/DeliveryDetails/DeliveryDetails';
import NotFound from './components/NotFound/NotFound';
import FoodDetail from './components/Foods/FoodDetail/FoodDetail';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
            <Header/>    

          <Switch>
            <Route path="/" exact>
            <Home/>
            </Route>
            <Route path="/home">
                <Home/>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route path="/details">
                <DeliveryDetails></DeliveryDetails>
            </Route>
            <Route path="/food/:foodID">
                <FoodDetail></FoodDetail>
            </Route>
            <Route path="*" exact>
                <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>`
      </AuthProvider>
    </div>
  );
}

export default App;
