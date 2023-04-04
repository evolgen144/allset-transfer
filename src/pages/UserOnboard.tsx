import React, { useState, useContext, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import 'react-calendar/dist/Calendar.css';
import logo from '../assets/logo.png';
import { useHistory } from 'react-router-dom';
import Hire from './Hire';

import UserDataContext from '../components/UserDataContext';


import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonPage,
  IonIcon,
  IonLabel,
  IonTextarea,
  IonSelect,
  IonSelectOption
} from '@ionic/react';

const UserOnboard: React.FC = () => {

  const currentUser = useContext(UserDataContext);
  const history = useHistory();

  useEffect(() => {
    if (currentUser !== null) {
      history.push('/Search')
    }
  }, [currentUser]);


  const MyContent = (): JSX.Element => {

    const loading = <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>Loading...</div>
    const [myContent, setMyContent] = useState<JSX.Element | null>(loading);

    useEffect(() => {
      const timerId = setTimeout(() => {
        setMyContent(
        <div>
            <IonHeader className="as_header">
              <IonToolbar className="as_toolbar">
                <IonGrid className="as_grid">
                  <IonRow>
                    <IonCol size="12" className="ion-text-center colSize">
                    <IonImg src={logo} alt="AllSetLogo" style={{ height: '25%' }}/>
                    <IonTitle>{currentUser?.clientInfo.firstName}'s Messages</IonTitle>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonToolbar>
            </IonHeader>


            <form onSubmit={pressSubmit}>
                    <IonItem>
                        <IonLabel position="floating">The project's name?</IonLabel>
                        <IonInput placeholder="Project Name" value={ProjectName} onIonChange={(e) => setProjecttName(e.detail.value!)} />
                    </IonItem>
                    <IonItem className="itemsHeight">
                        <IonSelect className="select-placeholder selectHeight" value={selectedItems} placeholder="The role or positions?" multiple onIonChange={(e) => setSelectedItems(e.detail.value as string[])}>
                        {positions.map((positions, index) => (
                            <IonSelectOption key={index} value={positions}>
                                {positions}
                            </IonSelectOption>
                        ))}
                        </IonSelect>
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
                        <IonLabel position="floating">The details?</IonLabel>
                        <IonTextarea autoGrow={true} placeholder="Details" value={Details} onIonChange={(e) => setDetails(e.detail.value!)} />
                    </IonItem>
                    
                    <IonGrid>
                        <IonRow className='ion-padding'>
                        <DatePicker
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                            isClearable={true}
                            placeholderText="The Date(s)?" 
                        />
                        </IonRow>
                        <IonRow>
                            <IonCol size='6'>
                                <IonButton expand='full' className="custom-button" type="submit">Submit</IonButton>
                            </IonCol>
                            <IonCol size='6'>
                                <IonButton expand='full' className="custom-button" type="button" onClick={handleReset}>
                                    <IonIcon icon={refresh} />
                                    Reset
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </form>
        </div>
        );
      }, 1000);
      return () => clearTimeout(timerId);
    }, []);

    return (
      <div>
        {myContent}
      </div>
    );
        
  }
  
    return (
      <IonPage>
        <MyContent />
      </IonPage>
    );

}



export default UserOnboard;