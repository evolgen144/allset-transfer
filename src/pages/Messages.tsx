import React, { useContext, useState, useEffect }  from 'react';
import {
	IonPage,
	IonContent,
	IonButtons,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonMenu,
	IonList,
	IonItem,
	IonLabel,
	IonMenuToggle,
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardContent,
	IonModal,
	IonButton,
	IonMenuButton,
	IonGrid,
	IonRow,
	IonCardSubtitle,
	IonCol
} from '@ionic/react';
import logo from '../assets/logo.png';
import './GetHired.css'
import { getJobsPosted, getJobsApplied, getJobApplicants, getUserProfile } from "../components/CrudOperations";
import Chat from "./Chat";

import { User } from '../typeInterfaces'
import UserDataContext from '../components/UserDataContext';
import { Job } from '../components/CrudOperations';


type MenuOption = "Received" | "Made";

const Messages: React.FC = () => {

	const user: string | undefined = useContext(UserDataContext)?.authID;
	const [selectedOption, setSelectedOption] = useState<MenuOption>("Made");
	const [jobsPosted, setJobsPosted] = useState<Job[]>([]);
	const [jobsApplied, setJobsApplied] = useState<Job[]>([]);
	const [applicants, setApplicants] = useState<User[]>([]);
	const [selectedJob, setSelectedJob] = useState<Job | null>(null);
	const [selectedAppliedJob, setSelectedAppliedJob] = useState<Job | null>(null);
	const [selectedUser, setSelectedUser] = useState<User | null>(null);
	const [showJobModal, setShowJobModal] = useState(false);
	const [showUserProfileModal, setShowUserProfileModal] = useState(false);
	const [specificJobModal, setSpecificJobModal] = useState(false);
	const [showChat, setShowChat] = useState(false);
	const [showAppliedChat, setShowAppliedChat] = useState(false);
	const [selectedPosterID, selectedPosterId] = useState<string>('');	


	useEffect(() => {
		if (user) {
			loadData();
		}
		}, [user, selectedOption]);
		
		const loadData = async () => {
			const posted = await getJobsPosted(user!);
			const applied = await getJobsApplied(user!);
			setJobsPosted(posted);
			console.log("THESE ARE YOUR JOB POSTS: ", jobsPosted)
			setJobsApplied(applied);
			console.log("THESE ARE YOUR JOB APPLIED: ", jobsApplied)
		};
		
		const handleMenuOptionClick = (option: MenuOption) => {
			setSelectedOption(option);
		};
		
		const handleJobPostedClick = async (job: Job) => {
			setSelectedJob(job);
			const jobApplicants = await getJobApplicants(user!, job.jobID?.toString()!)
			setApplicants(jobApplicants)
			setShowJobModal(true);
		};
		
		const showUserProfile = (user: User) => {
			setSelectedUser(user)
			setShowUserProfileModal(true);
		}

		const showJobDetails = (job: Job) => {
			setSelectedJob(job);
			selectedPosterId(job.auth0Id!)
			setSpecificJobModal(true);
		};
		
		const closeJobModal = () => {
			setShowJobModal(false);
		};
		
		const closeUserProfileModal = () => {
			setShowUserProfileModal(false);
		};
		
		const handleChat = () => {
			const selected = selectedUser?.authID
			console.log("Chat between: ", {user, selected})
			setShowChat(true);
		};

		const handleAppliedChat = () => {
			console.log("Chat between: ", {user, selectedPosterID})
			setShowAppliedChat(true);
		};
		
		const closeChat = () => {
			setShowChat(false)
		};

		const closeAppliedChat = () => {
			setShowAppliedChat(false)
		};

		const handleBook = async () => {
		// Handle booking logic here
		};
		
		const handleRemove = async () => {
		// Handle removal logic here
		};


	return(
		<IonPage>

			<IonMenu side="start" contentId="main" type="overlay">
				<IonHeader>
					<IonToolbar>
						<IonTitle>AllSet Applications</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonList>
						{(["Received", "Made"] as MenuOption[]).map((option) => (
						<IonMenuToggle key={option} autoHide={false}>
							<IonItem button onClick={() => handleMenuOptionClick(option)}>
								<IonLabel>{option}</IonLabel>
							</IonItem>
						</IonMenuToggle>
						))}
					</IonList>
				</IonContent>
			</IonMenu>
				
			<IonHeader>
				<IonToolbar>
					<IonButton slot="start">
						<IonMenuButton className='backsize'>Menu</IonMenuButton>
					</IonButton>
					<IonTitle>Applications {selectedOption}</IonTitle>
				</IonToolbar>
			</IonHeader>

			{/* SETTING THE CARD VIEW AFTER A MENU OPTION IS CLICKED */}
			{/* <IonContent id="main"> */}

			<IonContent id="main">
				{(selectedOption === "Received" ? jobsPosted : jobsApplied).map((job) => (
					<IonCard key={job.projectName} onClick={() =>
						selectedOption === "Received"? handleJobPostedClick(job) : showJobDetails(job)}>
						<IonCardHeader>
							<IonCardTitle className='titlea'>{job.projectName}</IonCardTitle>
							<IonCardSubtitle className='positions'>{job.position.join(' | ')}</IonCardSubtitle>
							<IonGrid className='padzero titleb'>
							</IonGrid>	
						</IonCardHeader>
					</IonCard>
				))}
			</IonContent>
					
			{/* MODAL SHOWING XXXXXXX */}
			<IonModal isOpen={showJobModal} onDidDismiss={closeJobModal}>
				{applicants.map((applicant) => (
					<IonCard key={applicant.authID} onClick={() => showUserProfile(applicant)}>
						<IonCardHeader>
							<IonCardTitle className='titlea'>{applicant.clientInfo.firstName} {applicant.clientInfo.lastName}</IonCardTitle>
							<IonCardSubtitle className='positions'>{applicant.Position}</IonCardSubtitle>
							<IonGrid className='padzero titleb'>
								<IonRow>
									</IonRow>
										{applicant.clientInfo.location}
									<IonRow>
									</IonRow>
										{applicant.bio.about.length > 100 ? applicant.bio.about.slice(0, 100) + '...' : applicant.bio.about} 
									<IonRow>
								</IonRow>
							</IonGrid>	
						</IonCardHeader>
					</IonCard>
				))}
				<IonButton className="custom-button" expand="full" onClick={() => closeJobModal()}>
					Close
				</IonButton>
			</IonModal>

			<IonModal isOpen={showUserProfileModal} onDidDismiss={closeUserProfileModal}>
				<IonContent>
					{selectedUser && (
						<>
							<IonCard>
								<IonCardHeader>
									<IonCardTitle className='titlec'>{selectedUser.clientInfo.firstName} {selectedUser.clientInfo.lastName}</IonCardTitle>
									<IonCardSubtitle>{selectedUser.Position}</IonCardSubtitle>
								</IonCardHeader>
								<IonCardContent>
									<h1>About</h1>
									<p>{selectedUser.bio.about}</p>
									<h1>Past Work</h1>
									<p>{selectedUser.bio.pastWork}</p>
									<h1>Email</h1>
									<p>{selectedUser.clientInfo.email}</p>
									</IonCardContent>
							</IonCard>
							<IonGrid>
								<IonRow>
									<IonCol size='4'>
										<IonButton className="custom-button" expand="full" onClick={() => handleChat()}>
											Chat
										</IonButton>
									</IonCol>
									<IonCol size='4'>
										<IonButton className="custom-button" expand="full" onClick={() => setShowUserProfileModal(false)}>
											Book
										</IonButton>
									</IonCol>
									<IonCol size='4'>
										<IonButton className="custom-button" expand="full" onClick={() => setShowUserProfileModal(false)}>
											Close
										</IonButton>
									</IonCol>
								</IonRow>
							</IonGrid>
						</>
					)}
				</IonContent>
			</IonModal>
						
			{/* MODAL FOR JOB USER APPLIED FOR*/}
			<IonModal isOpen={specificJobModal} onDidDismiss={() => setSpecificJobModal(false)}>
				<IonContent>
					{selectedJob && (
						<>
							<IonCard>
								<IonCardHeader>
									<IonCardTitle className='titlec'>{selectedJob.projectName}</IonCardTitle>
									<IonCardSubtitle>{/* Add subtitle if needed */}</IonCardSubtitle>
								</IonCardHeader>
								<IonCardContent>
									<h1>Details</h1>
									<p>{selectedJob.details}</p>
									<h1>Roles needed</h1>
									<p>{selectedJob.position.join(' | ')}</p>
									<h1>Budget</h1>
									<p>{selectedJob.budget}</p>
									<h1>Location</h1>
									<p>{selectedJob.location}</p>
									<h1>Production Dates:</h1>
									<p>Start Date: {new Date(selectedJob.startDate!).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
									<p>End Date: {new Date(selectedJob.endDate!).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
								</IonCardContent>
							</IonCard>
							<IonGrid>
								<IonRow>
									<IonCol size='4'>
										<IonButton className="custom-button" expand="full"  onClick={() => handleAppliedChat()}>
											Chat
										</IonButton>
									</IonCol>
									<IonCol size='4'>
										<IonButton className="custom-button" expand="full" onClick={() => setSpecificJobModal(false)}>
											Un-Apply
										</IonButton>
									</IonCol>
									<IonCol size='4'>
										<IonButton className="custom-button" expand="full" onClick={() => setSpecificJobModal(false)}>
											Close
										</IonButton>
									</IonCol>
								</IonRow>
							</IonGrid>
						</>
					)}
				</IonContent>
			</IonModal>


			<IonModal isOpen={showChat} onDidDismiss={() => setShowChat(false)}>
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							<IonButton onClick={closeChat}>Close</IonButton>
						</IonButtons>
							<IonTitle>AllSet Chat</IonTitle>
					</IonToolbar>
				</IonHeader>
				<Chat currentUserId={user!} otherUserId={selectedUser?.authID!} />
			</IonModal>

			<IonModal isOpen={showAppliedChat} onDidDismiss={() => setShowAppliedChat(false)}>
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							<IonButton onClick={closeAppliedChat}>Close</IonButton>
						</IonButtons>
							<IonTitle>AllSet Chat</IonTitle>
					</IonToolbar>
				</IonHeader>
				<Chat currentUserId={user!} otherUserId={selectedPosterID} />
			</IonModal>
			{/* </IonContent> */}
  		</IonPage>
	)
};

export default Messages;