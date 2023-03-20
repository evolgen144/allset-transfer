import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

/* App Pages */
import LoginPage from "./pages/LoginPage";
import Main from "./pages/Main";
import Search from "./pages/Search"
import Profile from "./pages/Profile"
import Cal from "./pages/Calendar";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";


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
import { search, person, calendar, chatbox, settings } from 'ionicons/icons';
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
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/" render={() => <Redirect to="/Login" />} />
                    <Route path="/Login" component={LoginPage} exact />
                    <Route path="/Main" component={Main} exact />
                    <Route path="/Search" component={Search} exact />
                    <Route path="/Profile" component={Profile} exact />
                    <Route path="/Messages" component={Messages} exact />
                    <Route path="/Calendar" component={Cal} exact />
                    <Route path="/Settings" component={Settings} exact />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="Search" href="/Search">
                        <IonIcon icon={search} />
                        <IonLabel>Search</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="Profile" href="/Profile">
                        <IonIcon icon={person} />
                        <IonLabel>Profile</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="Calendar" href="/Calendar">
                        <IonIcon icon={calendar} />
                        <IonLabel>Calendar</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="Messages" href="/Messages">
                        <IonIcon icon={chatbox} />
                        <IonLabel>Messages</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="Settings" href="/Settings">
                        <IonIcon icon={settings} />
                        <IonLabel>Settings</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
