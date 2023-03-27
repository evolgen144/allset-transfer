import React, { useContext } from 'react';
import { IonButton, 
	IonButtons, 
	IonCard, 
	IonCardContent, 
	IonCardHeader, 
	IonCardSubtitle, 
	IonCardTitle, 
	IonCol, 
	IonContent, 
	IonGrid, 
	IonHeader, 
	IonIcon, 
	IonPage, 
	IonRow, 
	IonText,
	IonImg,
	IonTitle, 
	IonToolbar } from '@ionic/react';

/* CSS */
import "./Profilex.css"


/* UserDataContext */
import UserDataContext from '../components/UserDataContext';

/* Logo */
import logo from '../assets/logo.png';



import { arrowBackOutline, arrowForward, bookmarkOutline, chatboxEllipsesOutline, ellipsisHorizontal, imageOutline, personAddOutline } from "ionicons/icons";

const Profilex: React.FC = () => {
	const currentUser = useContext(UserDataContext);
	const avatar = require(`../assets/${currentUser?.clientInfo.firstName}.png`);

	return (
		<IonPage className={ 'home' }>
			<IonHeader className="as_header">
        		<IonToolbar className="as_toolbar">
					<IonGrid className="as_grid">
						<IonRow>
							<IonCol size="12" className="ion-text-center colSize">
								<IonImg src={logo} alt="AllSetLogo" style={{ height: '25%' }}/>
								<IonTitle>Profile</IonTitle>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonToolbar>
			</IonHeader>
			<IonContent>

				<div className='topHeader'></div>

				<IonGrid>
					<IonRow className="ion-justify-content-center">
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
														<p>{currentUser?.clientInfo.firstName}, {currentUser?.clientInfo.lastName}</p>
													</IonText>
													<IonText color="medium">
														<p>{currentUser?.Position}</p>
													</IonText>
												</IonCol>
											</IonRow>

											<IonRow className='profileStats'>

												<IonCol className='profileStat'>
													
													<IonCardTitle>109</IonCardTitle>
													<IonCardSubtitle>Followinig</IonCardSubtitle>
												</IonCol>

												<IonCol className={ 'profileStat' }>
													
													<IonCardTitle>1.2k</IonCardTitle>
													<IonCardSubtitle>Followers</IonCardSubtitle>
												</IonCol>
											</IonRow>
										</IonCol>
									</IonRow>

									<IonRow>
										<IonCol size="6">
											<IonButton fill="outline" expand="block">
												Message
											</IonButton>
										</IonCol>

										<IonCol size="6">
											<IonButton color="primary" expand="block">
												<IonIcon icon={ personAddOutline } size="small" />&nbsp;
												Follow
											</IonButton>
										</IonCol>
									</IonRow>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>

					<IonRow className='profileStatusContainer'>
						<IonCol size="12">
							<IonCard className='profileCard'>

								<IonCardHeader>
									<IonRow className='profileStatus'>
										<IonIcon icon={ chatboxEllipsesOutline } />
										<IonCardSubtitle>Status</IonCardSubtitle>
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

					<IonRow>
						<IonCol size="6">
							<IonCard className='profileCard'>
								<IonCardContent>
									<IonIcon icon={ imageOutline } />
									<IonCardTitle>147</IonCardTitle>
									<IonCardSubtitle>Photos</IonCardSubtitle>
								</IonCardContent>
							</IonCard>
						</IonCol>

						<IonCol size="6">
							<IonCard className='profileCard'>
								<IonCardContent>
									<IonIcon icon={ bookmarkOutline } />
									<IonCardTitle>63</IonCardTitle>
									<IonCardSubtitle>Bookmarks</IonCardSubtitle>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>

					<IonRow className='profileActionContainer'>
						<IonCol size="12">
							<IonCard className='profileActionCard'>
								<IonCardContent>
									<IonRow className="ion-justify-content-between">
										<IonCardSubtitle>{currentUser?.bio.pastWork}</IonCardSubtitle>
										<IonIcon icon={ arrowForward } />
									</IonRow>
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