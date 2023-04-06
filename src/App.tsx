import React from 'react';
import { Redirect, Route } from 'react-router-dom';

/* App Pages */
import LoginPage from "./pages/LoginPage";
import UserOnboard from "./pages/UserOnboard";
// import Search from "./pages/Search"
import Profilex from "./pages/Profilex"
import Cal from "./pages/Calendar";
import GrabProfile from './pages/GrabProfile';
// import Messages from "./pages/Messages";
// import Settings from "./pages/Settings";

/* Tabs */
import Tabs from './Tabs';


import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import './pages/App.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {

    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/Login" render={() => <LoginPage />} />
                    <Route path="/Search" render={() => <Tabs />} />
                    <Route path="/Profilex" render={() => <Tabs />} />
                    <Route path="/Calendar" render={() => <Cal />} />
                    <Route path="/UserOnboard" render={() => <UserOnboard />} />
                    <Route path="/GrabProfile" render={() => <GrabProfile />} />
                    <Route exact path="/"> <Redirect to="/Login" /></Route>
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    );
};
export default App;
