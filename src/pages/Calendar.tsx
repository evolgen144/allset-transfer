import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarExample: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  const onDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calendar Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Calendar value={date} onChange={onDateChange} />
      </IonContent>
    </IonPage>
  );
};

export default CalendarExample;