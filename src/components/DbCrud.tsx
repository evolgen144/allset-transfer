import * as Realm from "realm-web";
import { IonApp, IonContent } from '@ionic/react';
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

// const app = new Realm.App({ id: "all-set-wgyfg" });
// const credentials = Realm.Credentials.anonymous();
// const user = await app.logIn(credentials);
// console.log(user.id)

const DbCrud: React.FC = () => {


    async function getUserByAuthID(authID: string | null) {
        const app = new Realm.App({ id: "all-set-wgyfg" });
        const credentials = Realm.Credentials.anonymous();
        const user = await app.logIn(credentials);
      
        const mongodb = user.mongoClient("mongodb-atlas");
        const usersCollection = mongodb.db("ALLSET").collection("Clients");
      
        const query = { authID };
        const result = await usersCollection.findOne(query);
      
        return result;
    }

    let theUser = '';
    async function doSomethingWithUser(authID: string | null) {
        const theUser = await getUserByAuthID(authID);
        console.log(theUser); // logs the user object from MongoDB
    }
    const userId = useContext(UserContext);
    const userTemp: string | null = userId.userId
    doSomethingWithUser(userTemp);



    return (
        <div>{theUser}</div>
    )

}

export default DbCrud





