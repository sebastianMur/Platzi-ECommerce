import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import '../../App.css';
import { Navbar } from '../../Components/NavBar';
import { ShoppingCardProvider } from '../../Context';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';

const App = () => {
  return (
    <ShoppingCardProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCardProvider>
  );
};

export default App;
