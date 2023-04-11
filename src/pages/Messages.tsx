import React, { useContext, useState, useEffect }  from 'react';
import {
	IonPage,
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonMenu,
	IonList,
	IonItem,
	IonLabel,
	IonSplitPane,
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
	IonCardSubtitle
} from '@ionic/react';
import logo from '../assets/logo.png';
import { useAuth0 } from "@auth0/auth0-react";
import './GetHired.css'
import { getJobsPosted, getJobsApplied, getJobApplicants, getUserProfile } from "../components/CrudOperations";
// import Chat from "./Chat";


import UserDataContext from '../components/UserDataContext';

import { Job } from '../components/CrudOperations';

// interface Job {
// 	_id: string;
// 	title: string;
// 	posterId: string;
// }

interface Application {
	_id: string;
	jobId: string;
	applicantId: string;
}

interface User {
	_id: string;
	name: string;
	email: string;
}

type MenuOption = "Received" | "Made";

const Messages: React.FC = () => {

	// const { user } = useAuth0();
	const user: string | undefined = useContext(UserDataContext)?.authID;
	const [selectedOption, setSelectedOption] = useState<MenuOption>("Received");
	const [jobsPosted, setJobsPosted] = useState<Job[]>([]);
	const [jobsApplied, setJobsApplied] = useState<Job[]>([]);
	const [applicants, setApplicants] = useState<User[]>([]);
	const [selectedJob, setSelectedJob] = useState<Job | null>(null);
	const [selectedUser, setSelectedUser] = useState<User | null>(null);
	const [showJobModal, setShowJobModal] = useState(false);
	const [showUserProfileModal, setShowUserProfileModal] = useState(false);
	const [showChat, setShowChat] = useState(false);	
	// const currentUser = useContext(UserDataContext);

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
		
		const handleJobClick = async (job: Job) => {
			setSelectedJob(job);
			setShowJobModal(true);
		};
		
		const handleApplicantClick = async (user: User) => {
			setSelectedUser(user);
			setShowUserProfileModal(true);
		};
		
		const closeJobModal = () => {
			setShowJobModal(false);
		};
		
		const closeUserProfileModal = () => {
			setShowUserProfileModal(false);
		};
		
		const handleChat = () => {
			setShowChat(true);
		};
		
		const closeChat = () => {
			setShowChat(false)
		};

		const handleBook = async () => {
		// Handle booking logic here
		};
		
		const handleRemove = async () => {
		// Handle removal logic here
		};
			



	return(
		<IonPage>
			{/* <IonSplitPane contentId="main"> */}
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
							<IonMenuButton></IonMenuButton>
						</IonButton>
						<IonTitle>Applications {selectedOption}</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonContent id="main">
					{/* <IonHeader>
						<IonToolbar>
							<IonTitle>{selectedOption}</IonTitle>
						</IonToolbar>
					</IonHeader> */}
					<IonContent>
						{(selectedOption === "Received" ? jobsPosted : jobsApplied).map((job) => (
							<IonCard key={job.projectName} onClick={() => handleJobClick(job)}>
								<IonCardHeader>
									<IonCardTitle className='titlea'>{job.projectName}</IonCardTitle>
									<IonCardSubtitle className='positions'>{job.position.join(' | ')}</IonCardSubtitle>
									<IonGrid className='padzero titleb'>
										<IonRow>
											</IonRow>
												Starting: {new Date(job.startDate!).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} in {job.location} 
											<IonRow>
											</IonRow>
												Budget: {job.budget}
											<IonRow>
										</IonRow>
									</IonGrid>	
								</IonCardHeader>
								<IonCardContent className='firstCard'>
									{job.details.length > 100 ? job.details.slice(0, 100) + '...' : job.details}
								</IonCardContent>
							</IonCard>
						))}
					</IonContent>

					<IonModal isOpen={showJobModal} onDidDismiss={closeJobModal}>
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
									{/* <IonButton className="custom-button" expand="full" onClick={handleApply(selectedJob.auth0Id!, selectedJob.jobID!)}>
										Apply
									</IonButton> */}
									<IonButton className="custom-button" expand="full" onClick={() => setShowJobModal(false)}>
										Close
									</IonButton>
								</>
							)}
						</IonContent>
					</IonModal>

					<IonModal isOpen={showUserProfileModal} onDidDismiss={closeUserProfileModal}>
						// Display user profile and buttons
					</IonModal>
				</IonContent>
			{/* </IonSplitPane> */}
  		</IonPage>
	)
};

export default Messages;