import React, { useState } from 'react';
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
    IonPage,
    IonIcon,
    IonLabel,
    IonTextarea,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact
  } from '@ionic/react';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import './Main.css';

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
import '../theme/variables.css';

/* All-Set config */
import { refresh } from 'ionicons/icons';


/* Auth0 */
import LogoutButton from '../components/LogoutButton';

const Hire: React.FC = () => {
    const [ProjectName, setProjecttName] = useState<string>('');
    const [Role, setRole] = useState<string>('');
    const [Budget, setBudget] = useState<string>('');
    const [Location, setLocation] = useState<string>('');
    const [Date, setDate] = useState<string>('');
    const [Details, setDetails] = useState<string>('');
    
    const pressSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      console.log(ProjectName, Role, Budget, Location, Date, Details);
    }
  
    const handleReset = (): void => {
      setProjecttName('');
      setRole('');
      setBudget('');
      setLocation('');
      setDate('');
      setDetails('');
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">

                <form onSubmit={pressSubmit}>
                    <IonItem>
                        <IonLabel position="floating">The project's name?</IonLabel>
                        <IonInput placeholder="Project Name" value={ProjectName} onIonChange={(e) => setProjecttName(e.detail.value!)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">The role or position?</IonLabel>
                        <IonInput placeholder="Role" value={Role} onIonChange={(e) => setRole(e.detail.value!)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">The budget?</IonLabel>
                        <IonInput placeholder="Budget" value={Budget} onIonChange={(e) => setBudget(e.detail.value!)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">The project's location?</IonLabel>
                        <IonInput placeholder="Location" value={Location} onIonChange={(e) => setLocation(e.detail.value!)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">The date(s)?</IonLabel>
                        <IonInput placeholder="Date" value={Date} onIonChange={(e) => setDate(e.detail.value!)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">The details?</IonLabel>
                        <IonTextarea placeholder="Details" value={Details} onIonChange={(e) => setDetails(e.detail.value!)} />
                    </IonItem>
                    <IonButton type="submit">Submit</IonButton>
                    <IonButton type="button" onClick={handleReset}>
                        <IonIcon icon={refresh} />
                        Reset
                    </IonButton>
                    <LogoutButton />
                </form>
            </IonContent>
        </IonPage>
    )
};

export default Hire;