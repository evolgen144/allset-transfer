// import * as Realm from "realm-web";
import { IonApp } from '@ionic/react';
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

// const app = new Realm.App({ id: "all-set-wgyfg" });
// const credentials = Realm.Credentials.anonymous();
// const);
// console.log('***** THE LOGGED IN User ID:', user.id)

const DbCrud: React.FC = () => {
    const userId = useContext(UserContext);
    console.log('***** DbCrud.tsx: confirmed >', userId)


    return (
        <IonApp>
        </IonApp>
    )

}

export default DbCrud





