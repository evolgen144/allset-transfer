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



import { arrowBackOutline, arrowForward, bookmarkOutline, chatboxEllipsesOutline, ellipsisHorizontal, imageOutline, personAddOutline, personOutline } from "ionicons/icons";


/* Interfaces */
interface ClientInfo {
	firstName: string;
	lastName: string;
	email: string;
	location: string;
}

interface Reviews {
	[key: number]: string;
}

interface PastWork {
	[key: number]: string;
}

interface Bio {
	about: string;
	pastWork: PastWork;
	reviews: Reviews;
}

interface JobPost {
	Title: string;
	Date: string;
	Description: string;
}

interface Postings {
	[key: string]: JobPost;
}

interface User {
	_id: {
		$oid: string;
	};
	authID: string;
	clientInfo: ClientInfo;
	Position: string;
	bio: Bio;
	postings: Postings;
}



const Profilex: React.FC = () => {
	const currentUser = useContext(UserDataContext);
	const avatar = require(`../assets/${currentUser?.clientInfo.firstName}.png`);
	console.log('User name:', currentUser?.clientInfo.firstName)



	/* Experiment */
	const getAllPastWork = (currentUser: User): string[] => {
		return Object.values(currentUser!.bio.pastWork);
	};
	
	// const pastWorkArray: PastWork[] = getAllPastWork(currentUser);
	const pastWorkTitles: string[] = getAllPastWork(currentUser!);
	console.log(pastWorkTitles)

	const renderPastWorkCards = (pastWorkTitles: string[]): JSX.Element[] => {
		return pastWorkTitles.map((title, index) => (
		  <IonCard key={index}>
			<IonCardHeader>
			  <p>{title}</p>
			</IonCardHeader>
		  </IonCard>
		));
	  };





	return (
		<IonPage className={ 'home' }>
			{/* <IonHeader className="as_header">
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
			</IonHeader> */}
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

											{/* <IonRow className='profileStats'>

												<IonCol className='profileStat'>
													
													<IonCardTitle>109</IonCardTitle>
													<IonCardSubtitle>Followinig</IonCardSubtitle>
												</IonCol>

												<IonCol className={ 'profileStat' }>
													
													<IonCardTitle>1.2k</IonCardTitle>
													<IonCardSubtitle>Followers</IonCardSubtitle>
												</IonCol>
											</IonRow> */}
										{/* </IonCol>
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
											</IonButton> */}
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
										{/* <p>{currentUser?.bio.about}</p> */}
									</IonText>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>

					<IonRow className='profileActionContainer as_margins'>
						<IonCol size="12">
							{renderPastWorkCards(pastWorkTitles)}
						</IonCol>
					</IonRow>

					<IonRow className='profileActionContainer as_margins'>
						<IonCol size="12">
							<IonCard className='profileActionCard'>
								<IonCardHeader>
									<IonRow className='profileStatus'>
										<IonCardSubtitle>Reviews</IonCardSubtitle>
									</IonRow>
								</IonCardHeader>
								<IonCardContent>
									<IonText>
										{/* <p>{currentUser?.bio.reviews}</p> */}
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