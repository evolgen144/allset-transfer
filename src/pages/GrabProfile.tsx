import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Realm from "realm-web";

/* Customizations */
import logo from '../assets/logo.png';
import UserDataContext from '../components/UserDataContext';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import './Hire.css';
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

import {
	IonGrid,
	IonRow,
	IonCol,
	IonItem,
	IonInput,
	IonButton,
	IonPage,
	IonIcon,
	IonLabel,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonImg,
	IonTextarea,
	IonContent
} from '@ionic/react';

/* All-Set config */
import { refresh } from 'ionicons/icons';
import { insertNewUser } from '../components/CrudOperations';
import { ClientInfo, Bio, User, Socials } from '../typeInterfaces'
import { UserContext } from '../components/UserContext';
import { useAuth0 } from '@auth0/auth0-react';


const GrabProfile: React.FC = () => {
	const app = new Realm.App({ id: "all-set-wgyfg" });
	const { logout } = useAuth0();
	const userId = useContext(UserContext);
	console.log("Grabbing Profile for: ", userId.userId)
	const logOutAuth = () => {
		logout()
	}
		
	async function logMeOut() {
		/* Realm logout */
		const timerId = setTimeout(() => {
			try {
				// Log out the currently active user
				app.currentUser?.logOut();

				// If successful, the currentUser should be null
				console.log("User logged out");
			} catch (error) {
				console.error("AllSet Error logging out:", error);
			}
			logOutAuth()
		}, 3000);
		return () => clearTimeout(timerId);

	}


	/* Profile Info */
	const query = userId.userId;
	const authident: string | null = query;
	const [FirstName, setFirstName] = useState<string>('');
	const [LastName, setLastName] = useState<string>('');
	const [Email, setEmail] = useState<string>('');
	const [Location, setLocation] = useState<string>('');
	const [Facebook, setFacebook] = useState<string>('');
	const [Instagram, setInstagram] = useState<string>('');
	const [LinkedIN, setLinkedIN] = useState<string>('');
	const [YouTube, setYouTube] = useState<string>('');
	const [Vimeo, setVimeo] = useState<string>('');
	const [Twitter, setTwitter] = useState<string>('');
	const [Position, setPosition] = useState<string>('');
	const [About, setAbout] = useState<string>('');
	const [PastWork, setPastWork] = useState<string>('');


	const pressSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		const Socials: Socials = {
			Facebook: Facebook,
			Instagram: Instagram,
			LinkedIN: LinkedIN,
			YouTube: YouTube,
			Vimeo: Vimeo,
			Twitter: Twitter
		}
		
		const clientInfo: ClientInfo = {
			firstName: FirstName,
			lastName: LastName,
			email: Email,
			location: Location,
			socials: Socials
		}


		const bio: Bio =  {
			about: About,
			pastWork: PastWork,
		}
			
		const newUser: User = {
			authID: authident!,
			clientInfo: clientInfo,
			socials: Socials,
			Position: Position,
			bio: bio,
		}

		/* Posting of job */
		insertNewUser(newUser);
		logMeOut()
		// handleReset()

		// Insert success alert after job posted
		
	};


	const handleReset = (): void => {
		setFirstName('');
		setLastName('');
		setEmail('');
		setLocation('');
		setFacebook('');
		setInstagram('');
		setLinkedIN('');
		setYouTube('');
		setVimeo('');
		setTwitter('');
		setPosition('');
		setAbout('');
		setPastWork('');
	}
	
	return (
		<IonPage>
			<IonHeader className="as_header">
				<IonToolbar className="as_toolbar">
					<IonGrid className="as_grid">
						<IonRow>
							<IonCol size="12" className="ion-text-center colSize">
								<IonImg src={logo} alt="AllSetLogo" style={{ height: '25%' }}/>
								<IonTitle>Complete your profile</IonTitle>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<form onSubmit={pressSubmit}>
					<IonGrid>
						<IonRow>
							<IonItem>
								<IonLabel position="floating">First Name</IonLabel>
								<IonInput placeholder="First Name" value={FirstName} onIonChange={(e) => setFirstName(e.detail.value!)} />
							</IonItem>
							<IonItem>
								<IonLabel position="floating">Last Name</IonLabel>
								<IonInput placeholder="Last Name" value={LastName} onIonChange={(e) => setLastName(e.detail.value!)} />
							</IonItem>
							<IonItem>
								<IonLabel position="floating">Email</IonLabel>
								<IonInput placeholder="Email" value={Email} onIonChange={(e) => setEmail(e.detail.value!)} />
							</IonItem>
							<IonItem>
								<IonLabel position="floating">Location</IonLabel>
								<IonInput placeholder="Location" value={Location} onIonChange={(e) => setLocation(e.detail.value!)} />
							</IonItem>
							<IonItem>
								<IonLabel position="floating">Facebook</IonLabel>
								<IonInput placeholder="Facebook" value={Facebook} onIonChange={(e) => setFacebook(e.detail.value!)} />
							</IonItem>
							<IonItem>
								<IonLabel position="floating">Instagram</IonLabel>
								<IonInput placeholder="Instagram" value={Instagram} onIonChange={(e) => setInstagram(e.detail.value!)} />
							</IonItem>
							<IonItem>
								<IonLabel position="floating">LinkedIn</IonLabel>
								<IonInput placeholder="LinkedIn" value={LinkedIN} onIonChange={(e) => setLinkedIN(e.detail.value!)} />
							</IonItem>
							<IonItem>
								<IonLabel position="floating">YouTube</IonLabel>
								<IonInput placeholder="YouTube" value={YouTube} onIonChange={(e) => setYouTube(e.detail.value!)} />
							</IonItem>
							<IonItem>
								<IonLabel position="floating">Vimeo</IonLabel>
								<IonInput placeholder="Vimeo" value={Vimeo} onIonChange={(e) => setVimeo(e.detail.value!)} />
							</IonItem>
							<IonItem>
								<IonLabel position="floating">Twitter</IonLabel>
								<IonInput placeholder="Twitter" value={Twitter} onIonChange={(e) => setTwitter(e.detail.value!)} />
							</IonItem>
							<IonItem>
								<IonLabel position="floating">Position</IonLabel>
								<IonInput placeholder="Position" value={Position} onIonChange={(e) => setPosition(e.detail.value!)} />
							</IonItem>
							<IonItem>
								<IonLabel position="floating">About</IonLabel>
								<IonTextarea autoGrow={true} placeholder="About)" value={About} onIonChange={(e) => setAbout(e.detail.value!)} />
							</IonItem>
							<IonItem>
								<IonLabel position="floating">PastWork</IonLabel>
								<IonTextarea autoGrow={true} placeholder="Past Work (Separate each with `###`)" value={PastWork} onIonChange={(e) => setPastWork(e.detail.value!)} />
							</IonItem>
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
			</IonContent>
		</IonPage>
	);
}



export default GrabProfile;