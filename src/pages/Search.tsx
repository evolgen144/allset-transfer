import {
    IonHeader,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonSegment,
    IonSegmentButton,
    IonContent,
    IonImg,
    IonPage,
    IonLabel,
  } from '@ionic/react';
import logo from '../assets/logo.png';

/* Segment pages */
import Hire from './Hire';
import GetHired from './GetHired';
  
  
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import './Search.css'


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
import React, { useState } from 'react';

const Search: React.FC = () => {
  
      const [selectedSegment, setSelectedSegment] = useState('GetHired');
  
      return(
          <IonPage>
              <IonHeader className="as_header">
                  <IonToolbar className="as_toolbar">
                      <IonGrid className="as_grid">
                          <IonRow>
                              <IonCol size="12" className="ion-text-center colSize">
                              <IonImg src={logo} alt="AllSetLogo" style={{ height: '25%' }}/>
                              </IonCol>
                          </IonRow>
                          <IonRow>
                              <IonSegment className="full-width-segment" value={selectedSegment} onIonChange={(e) => setSelectedSegment(e.detail.value as string)} >
                                    <IonSegmentButton value="GetHired">
                                      <IonLabel class="as_topNavButton">GET HIRED</IonLabel>
                                  </IonSegmentButton>
                                  <IonSegmentButton value="Hire">
                                      <IonLabel class="as_topNavButton">HIRE</IonLabel>
                                  </IonSegmentButton>
                              </IonSegment>
                          </IonRow>
                      </IonGrid>
                  </IonToolbar>
              </IonHeader>
  
              <IonContent>
                  {selectedSegment === 'Hire' && <Hire />}
                  {selectedSegment === 'GetHired' && <GetHired />}
              </IonContent>
          </IonPage>
      )
  }
  
  export default Search;
  