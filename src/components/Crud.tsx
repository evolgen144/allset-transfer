import * as Realm from 'realm-web';


const Crud = new Realm.App({ id: "all-set-wgyfg"});

export async function authenticateUser(email: string, password: string) {
    try {
        const credentials = Realm.Credentials.emailPassword(email, password);
        const user = await Crud.logIn(credentials);
        return user;
    } catch (error) {
        console.error("Error authenticating user:", error);
        return null;
    }
}
        
export default Crud;
