import * as Realm from "realm-web";
import { IonApp, IonContent } from '@ionic/react';
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

// const app = new Realm.App({ id: "all-set-wgyfg" });
// const credentials = Realm.Credentials.anonymous();
// const user = await app.logIn(credentials);
// console.log(user.id)

const DbCrud: React.FC = () => {
const app = new Realm.App({ id: "all-set-wgyfg" });


    async function getUserByAuthID(authID: string | null) {

        if (app.currentUser) {
            console.log("User is already logged in:", app.currentUser.id);
            return;
        }

        const credentials = Realm.Credentials.emailPassword("adam@a.com", "Abc12345");
        const user = await app.logIn(credentials);
        console.log("Logged in to Realm as:", user.id);
        
        const mongodb = user.mongoClient("mongodb-atlas");
        const usersCollection = mongodb.db("ALLSET").collection("Clients");
      
        const query = { authID };
        const result = await usersCollection.findOne(query);
      
        return result;
    }

    let theUser = '';

    async function processUser(authID: string | null) {
        const theUser = await getUserByAuthID(authID);
        console.log("The domSomething function returns the user: ", theUser); // logs the user object from MongoDB
    }
    const userId = useContext(UserContext);
    processUser(userId.userId);

    return (
        <div>{theUser}</div>
    )
}

export default DbCrud





