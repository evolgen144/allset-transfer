import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import logo from '../assets/logo.png';

const Cal: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  const onDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  return (
    <IonPage>
      <IonHeader className="as_header">
          <IonToolbar className="as_toolbar">
              <IonGrid className="as_grid">
                  <IonRow>
                      <IonCol size="12" className="ion-text-center colSize">
                      <IonImg src={logo} alt="AllSetLogo" style={{ height: '25%' }}/>
                      <IonTitle>My Calendar</IonTitle>
                      </IonCol>
                  </IonRow>
              </IonGrid>
          </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <Calendar value={date} onChange={onDateChange} />
      </IonContent>
    </IonPage>
  );
};

export default Cal;