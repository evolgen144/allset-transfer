import { Redirect, Route } from 'react-router-dom';
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
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>

        <IonHeader class="as_header">
            <IonToolbar class="as_toolbar">
                <IonGrid class="as_headerGrid">
                    <IonRow class="ion-align-items-center ion-justify-content-center">
                        <IonCol size="auto" class="ion-text-center">
                          {/* <img class="logo" src="..resources/logo.png" alt="AllSetLogo"> */}
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonSegment class="as_topNavSegment" id="hireSeg" value="Hire">
                            <IonSegmentButton value="Hire">
                                <IonLabel class="as_topNavButton">Hire</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="Get Hired">
                                <IonLabel class="as_topNavButton">Get Hired</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonRow>
                </IonGrid>
            </IonToolbar>
        </IonHeader>

        <IonContent class="ion-padding">
            <IonItem>
                <IonLabel position="floating">The project's name?</IonLabel>
                <IonInput id="as_projectName" class="as_input" clear-input="true" placeholder="Name?"  value=""></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">The role or position?</IonLabel>
                <IonInput id="as_role" class="as_input" clear-input="true" placeholder="Role/position?" value=""></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">The budget?</IonLabel>
                <IonInput id="as_budget" class="as_input" clear-input="true" placeholder="Budget?" value=""></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">The project's location?</IonLabel>
                <IonInput id="as_location" class="as_input" clear-input="true" placeholder="Location?" value=""></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">The date(s)?</IonLabel>
                <IonInput  id="as_date" class="as_input" clear-input="true" placeholder="Date(s)?" value=""></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">The details?</IonLabel>
                <IonTextarea id="as_details" class="as_textarea_1" auto-grow="true" clear-input="true" placeholder="Additional Details?" value=""></IonTextarea>
            </IonItem>

            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonButton id='as_hireSubmit' class="as_hireBtns" expand="block"><IonIcon slot="start"  name="checkmark-outline"></IonIcon>Submit</IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton id='as_hireCancel' class="as_hireBtns" expand="block"><IonIcon slot="start"  name="refresh-outline"></IonIcon>Reset</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        
        </IonContent>

  </IonApp>
);

export default App;
