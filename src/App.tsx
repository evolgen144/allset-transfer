import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import Main from "./pages/Main";
import CalendarExample from './pages/Calendar';

import {
  IonHeader,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonSegment,
  IonSegmentButton,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonImg,
  IonFooter,
  IonApp,
  IonIcon,
  IonLabel,
  IonTextarea,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, checkmarkOutline, refreshOutline } from 'ionicons/icons';
import logo from './assets/logo.png';

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

/* All-Set config */
import { refresh } from 'ionicons/icons';

import './pages/App.css';

/* MongoDB */
// import * as Realm from "realm-web";
// const app = new Realm.App({ id: "all-set-wgyfg" });
// const credentials = Realm.Credentials.anonymous();
// const user = await app.logIn(credentials);
// console.log(user.id)

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                <Route path="/login" component={LoginPage} exact />
                <Route path="/Main" component={Main} exact />
                <Route exact path="/" render={() => <Redirect to="/login" />} />
                <Route path="/Calendar" component={CalendarExample} exact />
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
);

export default App;
