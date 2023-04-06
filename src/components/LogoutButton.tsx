import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { IonButton } from '@ionic/react';
import * as Realm from "realm-web";
import './LogoutButton.css'

const LogoutButton: React.FC = () => {

	const app = new Realm.App({ id: "all-set-wgyfg" });

	const { logout } = useAuth0();

	/* Logout Auth0 */  
	const logOutAuth = () => {
		logout()
	}
		
	async function logMeOut() {
		/* Realm logout */
		try {
			// Log out the currently active user
			await app.currentUser?.logOut();

			// If successful, the currentUser should be null
			console.log("User logged out");
		} catch (error) {
			console.error("AllSet Error logging out:", error);
		}


		logOutAuth()
	}

	return (
		<IonButton expand='full' className="custom-button" onClick={() => logMeOut()}>
			Log Out
		</IonButton>
	);
};

export default LogoutButton;