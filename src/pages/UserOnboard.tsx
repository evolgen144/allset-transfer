import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/* Customizations */
import logo from '../assets/logo.png';
import UserDataContext from '../components/UserDataContext';
import './Hire.css';

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


/* All-Set config */
// import { refresh } from 'ionicons/icons';
import { UserContext } from '../components/UserContext';


const UserOnboard: React.FC = () => {
	const currentUser = useContext(UserDataContext);
	const history = useHistory();
	const userId = useContext(UserContext);


	useEffect(() => {
		const timerId = setTimeout(() => {
			console.log("userId.userId: ", userId.userId)
			console.log("CurrentUser authID: ", currentUser?.authID)
			if (currentUser?.authID === 'default') {
				console.log('Default user')
				history.push('/GrabProfile')
			} else {
				history.push('/Search')
				}
			}, 2000);
		return () => clearTimeout(timerId);
	}, [currentUser?.authID, userId, history]);

	
	return (
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
				VERIFYING USER ACCOUNT..
			</div>
	);

}

export default UserOnboard;