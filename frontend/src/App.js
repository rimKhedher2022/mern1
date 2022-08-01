import { useEffect } from 'react';

//Protected Routes Imports
import ProtectedRoute from './components/route/ProtectedRoutes';
import HostProtectedRoute from './components/route/HostProtectedRoutes';
import TraderProtectedRoutes from './components/route/TraderProtectedRoutes';


import { loadUser } from './actions/userActions';
import store from './store'
import { createTheme, ThemeProvider } from "@mui/material/styles";

import theme from '../src/components/shared/theme'
import './App.scss';
import './index.css';

import {BrowserRouter as Router , Switch, Route  } from 'react-router-dom';


import Home from './components/userPages/Home';
import ServicesExperience from './components/userPages/Service_Experience';
import BecomeAccounts from './components/userPages/BecomeAccount';

import HostForm from './components/host/hostPages/newHost/HostForm';

import LodgingDetails from './components/lodging/lodgingDetails';

import Profile from './components/userAuth/Profile/Profile';



import UpdateProfile from './components/userAuth/Profile/UpdateProfile'
import UpdatePassword from './components/userAuth/Profile/UpdatePassword';
import ForgotPassword from './components/userAuth/Login/ForgotPassword'
import NewPassword from './components/userAuth/Login/NewPassword';
import Success from './components/userAuth/Signup/Success';
import Check from './components/userAuth/Signup/Check';
import Login from './components/userAuth/Login/Loginpage';
import Signup from './components/userAuth/Signup/SignupPage';
import TraderForm from './components/trader/TraderForm';

import Test1View from './components/host/hostPages/newHost/test1View';
import Test2View from './components/host/hostPages/newHost/test2View';


import AllExperiences from './components/experience/allExperiences';
import ExperienceDetails from './components/experience/experienceDetails';

import NewRestaurant from './components/restaurant/newRestaurant';


import NewLodging from './components/lodging/newLodging';
import NewTransport from './components/transport/newTransport';
import AllRestaurants from './components/restaurant/allRestaurants';
import AllLodgings from './components/lodging/allLodgings'
import AllTransport from './components/transport/allTransport';

import AddRemoveMultipleInputFields from './test'
//Host pages
import Host from './components/userAuth/Profile/host/Host';




import RestaurantDetails from './components/restaurant/restaurantDetails';
import TransportDetails from './components/transport/transportDetails';
import ExperienceForm from './components/experience/ExperienceForm';


//Profile

import UserProfile from './components/userAuth/Profile/UserProfile';

//Reservation 
import Reservation from "./components/reservation/Reservation";


//Contact
import Contact from './components/userPages/Contact';

//Dialog 
import CustomizedDialogs from './Dialog/dialog1'

function App() {
  useEffect(() => {
 store.dispatch(loadUser())
 
  }, [])
  

  return (
    <div className="App">
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>

      <Route exact path='/dialog1' component={CustomizedDialogs} />



    <Route exact path='/' component={Home} />
    <Route exact path='/service_experience' component={ServicesExperience} />
    <Route exact path='/becomeaccount' component={BecomeAccounts} />
    <Route exact path='/t1' component={AddRemoveMultipleInputFields} />






    <Route exact path='/password/forgot' component={ForgotPassword} />
    <Route exact path='/password/reset/:token' component={NewPassword} />
    <Route exact path='/activate/liyT0hVe5Kz5QVbnbi4NXB5ZXL7eFa7N' component={Success} />
    <Route exact path='/check' component={Check} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={Signup} />

    <Route exact path='/test2' component={Test1View} />
    <Route exact path='/test3' component={Test2View} />








   {/* Host Routes */}

    <Route exact path='/becomehost' component={HostForm} />
    <Route exact path='/newexperience' component={ExperienceForm} />
    <Route exact path='/allexperiences' component={AllExperiences} />
    <Route  path="/experience/:id" component={ExperienceDetails} />
    <HostProtectedRoute exact path='/host/me' component={Host} />



   {/* Trader Routes */}
    <Route exact path='/becometrader' component={TraderForm} />
  
    <TraderProtectedRoutes exact path='/newrestaurant' component={NewRestaurant} />
    <TraderProtectedRoutes exact path='/newlodging' component={NewLodging} />
    <TraderProtectedRoutes exact path='/newtransport' component={NewTransport} />

    <Route exact path='/allrestaurants' component={AllRestaurants} />
    <Route exact path='/alllodgings' component={AllLodgings} />
    <Route exact path='/alltransports' component={AllTransport} />

    <Route  path="/lodging/:id" component={LodgingDetails} />
    <Route  path="/restaurant/:id" component={RestaurantDetails} />
    <Route  path="/transport/:id" component={TransportDetails} />





    






   {/* Reservation Routes */}
    <Route exact path='/contactus' component={Contact} />






   {/* Reservation Routes */}
   <Route exact path='/reservation' component={Reservation}  />

   {/* User Profile Routes */}

  <ProtectedRoute exact path='/me' component={UserProfile}  />
  <ProtectedRoute exact path='/me/update' component={UpdateProfile}  />
  <ProtectedRoute exact path='/password/update' component={UpdatePassword}  />


    </Switch>



    </Router>
    </ThemeProvider>
</div>

  );
}

export default App;

