import React, { useContext } from 'react';
import {
	IonCard, 
	IonCardContent, 
	IonCardHeader, 
	IonCardSubtitle, 
	IonCol, 
	IonContent, 
	IonGrid, 
	IonPage, 
	IonRow, 
	IonText } from '@ionic/react';

/* CSS */
import "./Profilex.css"


/* UserDataContext */
import UserDataContext from '../components/UserDataContext';


const Profilex: React.FC = () => {
	const currentUser = useContext(UserDataContext);
	let avatar;
	try {
		avatar = require(`../assets/${currentUser?.clientInfo.firstName}.png`);
	} catch (error) {
		avatar = require(`../assets/logo.png`);
	}
	console.log('User name:', currentUser?.clientInfo.firstName)


	return (
		<IonPage className={ 'home' }>
			<IonContent>

				<div className='topHeader'></div>

				<IonGrid>
					<IonRow className="ion-justify-content-center as_margins">
						<IonCol size="12" className="ion-justify-content-center ion-align-items-center ion-text-center">
							<IonCard className='profileHeader'>

								<IonCardContent>

									<IonRow>
										<IonCol size="4">
											<img src={avatar} alt="avatar" className='avatar'/>
										</IonCol>

										<IonCol size="8">
											<IonRow className='profileInfo'>
												<IonCol size="12">
													<IonText color="dark" className='profileName'>
														<p>{currentUser?.clientInfo.firstName} {currentUser?.clientInfo.lastName}</p>
													</IonText>
													<IonText color="medium">
														<p>{currentUser?.Position}</p>
														<p>{currentUser?.clientInfo.location}</p>
													</IonText>
												</IonCol>
											</IonRow>
										</IonCol>
									</IonRow> 
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>

					<IonRow className='profileActionContainer as_margins'>
						<IonCol size="12">
							<IonCard className='profileCard'>

								<IonCardHeader>
									<IonRow className='profileStatus'>
										<IonCardSubtitle>Bio</IonCardSubtitle>
									</IonRow>
								</IonCardHeader>
								<IonCardContent>
									<IonText>
										<p>{currentUser?.bio.about}</p>
									</IonText>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>

					<IonRow className='profileActionContainer as_margins'>
						<IonCol size="12">
						<IonCard className='profileCard'>
							<IonCardHeader>
								<IonRow className='profileStatus'>
									<IonCardSubtitle>Past Work</IonCardSubtitle>
								</IonRow>
							</IonCardHeader>
							<IonCardContent>
								<IonText>
									{/* <p>{pastWorkTitles.join(' \n\n ')}</p> */}
								</IonText>
							</IonCardContent>
						</IonCard>
						</IonCol>
					</IonRow>

					<IonRow className='profileActionContainer as_margins'>
						<IonCol size="12">
							<IonCard className='profileCard'>
								<IonCardHeader>
									<IonRow className='profileStatus'>
										<IonCardSubtitle>Reviews</IonCardSubtitle>
									</IonRow>
								</IonCardHeader>
								<IonCardContent>
									<IonText>
										{/* <p>{reviewTitles}</p> */}
									</IonText>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>

				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Profilex;