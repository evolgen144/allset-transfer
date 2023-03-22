import React from 'react';
import { Redirect, Route } from 'react-router-dom';
/* App Pages */
import LoginPage from "./pages/LoginPage";

// import Search from "./pages/Search"
// import Profile from "./pages/Profile"
// import Cal from "./pages/Calendar";
// import Messages from "./pages/Messages";
// import Settings from "./pages/Settings";


import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import { search, person, calendar, chatbox, settings } from 'ionicons/icons';
// import { ellipse, square, triangle, checkmarkOutline, refreshOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './pages/App.css';

import Tabs from './Tabs';


setupIonicReact();

const App: React.FC = () => {

    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/Login" render={() => <LoginPage />} />
                    <Route path="/Search" render={() => <Tabs />} />
                    <Route path="/Profile" render={() => <Tabs />} />
                    <Route exact path="/"> <Redirect to="/Login" /></Route>
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    );
};
export default App;
