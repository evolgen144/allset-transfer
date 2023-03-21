import { Redirect, Route } from 'react-router-dom';
import {
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import LoginPage from "./pages/LoginPage";
import Main from "./pages/Main";
import Search from "./pages/Search"
import Profile from "./pages/Profile"
import Cal from "./pages/Calendar";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import { search, person, calendar, chatbox, settings } from 'ionicons/icons';


const Tabs: React.FC = () => (
  <IonContent>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Redirect exact path="/" to="/Login" />
                    <Route exact path="/">
                        <LoginPage />
                    </Route>
                    <Route exact path="/Search">
                        <Search />
                    </Route>
                    <Route exact path="/Profile">
                        <Profile />
                    </Route>
                    <Route exact path="/Calendar">
                        <Cal />
                    </Route>
                    <Route exact path="/Messages">
                        <Messages />
                    </Route>
                    <Route exact path="/Settings">
                        <Settings />
                    </Route>
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
  </IonContent>
);

export default Tabs;